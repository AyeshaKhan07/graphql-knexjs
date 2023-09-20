import { ISignupDto } from "./dto/signup.dto";
import UserEntity from "./user.entity";

export class UserService {
    static async signup(payload: ISignupDto) {
        try {
            const userExisted = await UserEntity().where("email", payload.email).first();

            if (userExisted)
                throw new Error(`user with email ${payload.email} already existed`)

            const createdUserId = await UserEntity().insert({
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                contact: payload.contact,
                password: payload.password
            })
            
            return UserEntity().where("id", createdUserId[0]).first()

        } catch (error) {
            throw error
        }
    }
}