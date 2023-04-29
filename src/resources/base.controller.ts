import BaseService from "./base.service";
import * as express from 'express'
export default class BaseController {
    service : BaseService<any>
    constructor(service?: BaseService<any>) {
        this.service = service
    }
    post = async (req, res) => {
       const  resource = await this.service.post(req.body)
       res.send(resource)
    }

}