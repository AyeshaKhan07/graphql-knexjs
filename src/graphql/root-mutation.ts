import { GraphQLObjectType } from "graphql";

import { SignupMutation } from "./mutations/user.mutations";

const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: () => ({
        signup: SignupMutation
    })
})

export default RootMutation;