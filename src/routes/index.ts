import { Router } from "express";
import { AuthRouter } from "./auth/auth.routes";

export const authRoute = Router()
const authRouter = AuthRouter
authRoute.use('/auth', authRouter)