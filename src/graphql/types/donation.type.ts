import { GraphQLObjectType, GraphQLInt, GraphQLBoolean } from "graphql"

const DonationType = new GraphQLObjectType({
    name: "DonationType",
    fields: {
        id: { type: GraphQLInt },
        amount: { type: GraphQLInt },
        anonymousDonation: { type: GraphQLBoolean },
        transactionFeeCovered: { type: GraphQLBoolean },
        donationType: { type: GraphQLInt },
        status: { type: GraphQLInt },
        // user: {},
        // donatedTo: {}
        // currency: {}
        // page: {}
        // paymentMethod: {}
        // city: {}
        // country: {}
    }
})

export default DonationType;
