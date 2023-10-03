import HttpException from './http-exception';
import { HTTP_STATUS } from '../globals/http-status-codes';
import { GraphQLError } from 'graphql';

function handleErrorResponse(error: HttpException, errors: Object = {}) {
    
    const status = error.status;
    const message = error.status == HTTP_STATUS.INTERNAL_SERVER_ERROR ? "Something went wrong!" : error.message;
    
    console.log("Error Message:", error.message);
    console.log("Error Stack:", error);
    
    throw new GraphQLError(message, {
        extensions: {
          http: { status },
          errors
        },
      });
      
    // response.status(status).send({ status, message, errors });
    
}

export default handleErrorResponse;