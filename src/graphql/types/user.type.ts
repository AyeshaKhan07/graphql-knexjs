import { GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLScalarType, GraphQLString } from "graphql";
import DonationType from "./donation.type";
import { knexSource } from "../../database/knex-config";

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        contact: { type: GraphQLString },
        totalDonations: { type: GraphQLInt },
        totalDonationsRaised: { type: GraphQLInt },
        // password: {type:  GraphQLString, resolve: () => undefined},
        donations: {
            type: new GraphQLList(DonationType),
            resolve: (user) => knexSource("donations").where('userId', user.id)
        },
    }
})

export default UserType;