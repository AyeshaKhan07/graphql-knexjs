import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql"
import UserType from "../types/user.type"
import UserEntity from "../../modules/users/user.entity"

interface UserArgs {
    id: number
}

export const UserQuery = {
    type: UserType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent: any, args: UserArgs) => UserEntity().where("id", args.id).first()

}

export const AllUsersQuery = {
    type: new GraphQLList(UserType),
    resolve: () => UserEntity().select("*")
}