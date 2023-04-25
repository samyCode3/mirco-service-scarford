// import { AuthService } from "../services/auth.service"
// const db = new AuthService()

export class AuthController {
   public database
   construtor ({db}) {
      this.database = db
      this.createController = this.createController.bind(this)
   }
    async createController(req, res) {
         const user = req.body
         console.log(user)
         res.send(user)
    }
}