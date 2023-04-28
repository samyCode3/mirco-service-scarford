import * as mongoose from 'mongoose'
import * as envConfig from 'dotenv'
envConfig.config()
const database = process.env.MONGO_DB || ''
export const connection = async () => {
   const dbUrI = database as string
   try {
       await mongoose.connect(dbUrI)
       console.log("Database is connected")
   } catch (err) {
      const error = new Error(`Reason why database fails to connect ${err}`)
      console.log(error)
      process.exit(1)  
   } 
}      

   
