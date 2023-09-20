import {  GraphQLObjectType } from "graphql";

import { AllDonationsQuery, DonationQuery } from "./queries/donation.queries";
import { AllUsersQuery, UserQuery } from "./queries/user.queries";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        donation: DonationQuery,
        allDonations: AllDonationsQuery,

        user: UserQuery,
        allUsers: AllUsersQuery 
    }),
})

export default RootQuery;