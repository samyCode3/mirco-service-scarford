export class AuthService {
   public db
   constructor () {
     this.db
   }
     async createUser (payload) {
       const user = await this.db.create(payload)
       return user
     }
}