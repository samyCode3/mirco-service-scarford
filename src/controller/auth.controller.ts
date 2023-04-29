import { autoInjectable } from "tsyringe";
import BaseController from "../resources/base.controller";
import AuthService from "../services/auth.service";
@autoInjectable()
export default class AuthController extends BaseController {
   constructor(service?: AuthService){
        super(service)
   }
}