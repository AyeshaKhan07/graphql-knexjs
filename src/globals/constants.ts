import { Secret } from "jsonwebtoken";

export const JWT_KEY: Secret = process.env.JWT_KEY ?? ""
