import { GraphQLSchema } from "graphql";

import RootQuery from "./root-query";
import RootMutation from "./root-mutation";

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

export default schema