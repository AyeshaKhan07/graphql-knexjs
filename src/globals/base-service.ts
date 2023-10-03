import { Knex } from "knex";
import handleErrorResponse from "../utils/error-response.handler";
import HttpException from "../utils/http-exception";

export default abstract class BaseService {

    constructor(private entity: Knex.QueryBuilder) { }

    async findById(id: number) {
        return await this.entity.where("id", id).first();
    }

    async findByIdOrFail(id: number) {
        const user = await this.findById(id);

        if (!user) handleErrorResponse(new HttpException(404, "User not fount"),)

        return user
    }
}