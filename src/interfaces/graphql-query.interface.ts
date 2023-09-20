import { GraphQLObjectType } from "graphql";

export default interface GraphQLQueryInterface {
    type: GraphQLObjectType,
    args?: any,
    resolve?: Function
}