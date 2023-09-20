import { knexSource } from "../../database/knex-config"

interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    contact: string
    totalDonations: number
    totalDonationsRaised: number
    password: string
}

const UserEntity = () => knexSource<User>("users")

export default UserEntity;
