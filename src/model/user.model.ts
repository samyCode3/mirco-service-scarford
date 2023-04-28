import {Schema, Model, model} from 'mongoose'
import UserSI from '../interface/user/user.interface'
import ModelI from '../interface/user/model.interface'
import {ROLE} from '../interface/enum/enum'
import { singleton } from 'tsyringe'

@singleton()
export default class UserModel implements ModelI {
     schema : Schema <any> = new Schema({
         fullname : { type: String, required: true},
         email : {type: String, required: true},
         password: {type: String, required: true},
         status : { type : Boolean, default: false},
         role : {type: String, default: ROLE.user},
         token: {type: String, required: true},
         reset_token: {type: String, default: ''}
     }, { timestamps : true})
     model: Model<any, any> = model<UserSI>('user', this.schema)
}
