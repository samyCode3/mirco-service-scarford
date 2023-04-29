import mongoose from "mongoose";
import ModelI from "../interface/user/model.interface";

export default class BaseService<T>{
    model : mongoose.Model<any, any>
    constructor(modeli: ModelI){
     this.model = modeli.model
    }

    post = async (data: T) => {
        const resource = await this.model.create(data)
        return resource
    }
}