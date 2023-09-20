import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";

import DonationType from "../types/donation.type";
import DonationEntity from "../../modules/donations/donation.entity";

interface DonationArgs {
    id: number
}

export const DonationQuery = {
    type: DonationType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (parent: any, args: DonationArgs) => DonationEntity().where('id', args.id).first()
}

export const AllDonationsQuery = {
    type: new GraphQLList(DonationType),
    resolve: () => DonationEntity().select('*')    
}