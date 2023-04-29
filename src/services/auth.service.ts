import UserSI from "../interface/user/user.interface";
import UserModel from "../model/user.model";
import BaseService from "../resources/base.service";
import { injectable } from 'tsyringe'
@injectable()
export default class AuthService extends BaseService<UserSI> {
          constructor(modelI?: UserModel){
                  super(modelI)
          }
}


