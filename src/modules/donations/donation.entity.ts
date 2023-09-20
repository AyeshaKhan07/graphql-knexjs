import { knexSource } from "../../database/knex-config"

export enum DonationType {
    General = 1,
    Zakat = 2,
    Sadaqah = 3,
}

export enum DonationStatus {
    Pending = 1,
    Confirmed = 2,
    Cancelled = 3,
}

interface Donation {
    id: number
    amount: number
    anonymousDonation: boolean
    transactionFeeCovered: boolean
    donationType: DonationType
    status: DonationStatus
}

const DonationEntity = () => knexSource<Donation>("donations")

export default DonationEntity;
