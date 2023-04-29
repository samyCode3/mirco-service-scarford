import { Router, Request, Response} from "express";
import AuthController from "../../controller/auth.controller";

export const AuthRouter = Router()
const authControl = new AuthController()
AuthRouter.get('/', (req: Request, res: Response) => {
      res.send("Happy Hacking")
})
AuthRouter.post('/create', authControl.post)
