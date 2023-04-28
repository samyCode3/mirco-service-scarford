
export class AuthController {
   public database
   construtor ({db}) {
      this.database = db
      this.createUser = this.createUser.bind(this)
   }
    async createUser(req, res) {
         const user = await req.body
         console.log(user)
         res.send(user)
    }
}