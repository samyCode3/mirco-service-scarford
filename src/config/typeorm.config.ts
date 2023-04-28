import 'reflect-metadata'
import { DataSource } from 'typeorm'

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

database.initialize().then((db) => {
    if(db) {
        console.log(`Database is connected successfully`)
    }
}).catch((error) => {
    const err = new Error(`Database fails to connect: ${error.message}`)
    console.log(err)
})