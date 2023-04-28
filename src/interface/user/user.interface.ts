import * as mongoose from 'mongoose'

export interface UserI {
    fullname : string ,
    email :  string,
    password: string
}

export default interface UserSI extends UserI, mongoose.Document{} 