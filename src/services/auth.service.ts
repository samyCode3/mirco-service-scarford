
export class AuthService {
   public db
   public user
   constructor (user, db) {
    this.user = user
     this.db  = db
   }
     async createUser (payload) {
       const user = await this.db.create(this.user)
       return user 
     }
}