import * as express from 'express'
// import { database} from '../config/typeorm.config'
import { connection } from '../config/mongoDb.config'
import {ErrorHandler } from '../middleware/error/errorHandler'
const PORT = process.env.SERVER_PORT || 4000

export class Express {
    public app
    constructor() {
           this.app = express()
           this.app.use(express.json({ limit: '50mb' }))
           this.loadRoutes()
    }

    private async loadRoutes () { 
        // database
        await connection()
        this.app.get('/', (req, res) => {
            res.send("Hello") 
        })
        this.app.all('*', (req, res) => {
            if(res.status(404)) {
                return res.send("Route not found")
            }
        })
        this.app.use(ErrorHandler)

        this.app.listen(PORT, () => console.log(`App running on port ${PORT}`))
    }
}
