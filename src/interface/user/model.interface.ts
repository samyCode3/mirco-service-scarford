import {Schema, Model} from 'mongoose'

export default interface ModelI {
    schema : Schema<any>,
    model  : Model<any, any>,
}