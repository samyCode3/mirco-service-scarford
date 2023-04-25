import 'reflect-metadata'
import { DataSource } from 'typeorm'
import * as envConfig from 'dotenv'
envConfig.config()
export const database = new DataSource({
     "type" : "postgres",
     "host" : process.env.MYSQL_HOST as string,
     "username" : process.env.MYSQL_USER as string,
     "password" : process.env.MYSQL_PASS as string,
     "database" : process.env.MYSQL_DATABASE as string,
     "port" : 6000,
     entities: [
        "src/entity/*.ts" 
    ],
    synchronize: true,
    logging: true,
})
console.log(process.env.MYSQL_USER)
database.initialize().then((db) => {
    if(db) {
        console.log(' Database is connected')
    }
}).catch((error) => {
    const err = new Error(`Database fails to connect: ${error.message}`)
    console.log(err)
})