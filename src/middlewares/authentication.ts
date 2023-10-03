import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import { JWT_KEY } from '../globals/constants';
import HttpException from '../utils/http-exception';
import { HTTP_STATUS } from '../globals/http-status-codes';
import { UserService } from '../modules/users/user.service';
import handleErrorResponse from '../utils/error-response.handler';
import { BaseContext, GraphQLRequestListener, GraphQLRequestContextDidResolveOperation } from '@apollo/server';

// Whitelist of mutations that do not require authentication
const whitelistedMutations = ["login", "signup"];

interface IUserToken extends JwtPayload {
  id?: number
}

interface IContext extends BaseContext {
  user: IUserToken | null;
}

const authenticationMiddleware = async (): Promise<GraphQLRequestListener<BaseContext>> => ({

  async didResolveOperation(requestContext: GraphQLRequestContextDidResolveOperation<IContext>) {
    const { operationName, request, contextValue } = requestContext

    if (operationName && whitelistedMutations.includes(operationName))
      return

    const authHeader = request.http?.headers.get('Authorization');

    if (!authHeader) {
      const exception = new HttpException(HTTP_STATUS.UNAUTHORIZED, "No authentication header found.")
      handleErrorResponse(exception);
      return
    }

    let decodedToken: IUserToken | string;

    try {
      const userService = new UserService();

      const token = authHeader.split(' ')[1];
      decodedToken = jwt.verify(token, JWT_KEY);

      if (!decodedToken) {
        const exception = new HttpException(HTTP_STATUS.INTERNAL_SERVER_ERROR, "Unable to decode jwt")
        handleErrorResponse(exception);
        return
      }

      if (typeof decodedToken !== "string" && decodedToken.id) {
        await userService.findByIdOrFail(decodedToken.id);
        contextValue.user = decodedToken;
      }

    } catch (error) {
      throw error
    }
  },
})


export default authenticationMiddleware;
