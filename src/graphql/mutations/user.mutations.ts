import { GraphQLNonNull, GraphQLString } from "graphql";

import UserType from "../types/user.type";
import { ISignupDto } from "../../modules/users/dto/signup.dto";
import { UserService } from "../../modules/users/user.service";

export const SignupMutation = {
    type: UserType,
    args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        contact: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: (parent: any, args: ISignupDto) => new UserService().signup(args)
}