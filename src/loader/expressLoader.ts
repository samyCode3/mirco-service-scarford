import * as express from 'express'
import {setup} from '../worker/awilix'
import { Router } from '../routes/auth.routes'
import { database} from '../config/database.config'

setup()
const router = new Router()
const PORT = process.env.SERVER_PORT || 4000

export class Express {
    public app
    constructor() {
           this.app = express()
           this.app.use(express.json({ limit: '50mb' }))
           this.loadRoutes()
    }

    private async loadRoutes () {
        database
        this.app.get('/', (req, res) => {
            res.send("Hello")
        })
        router.AuthRoute(this.app)
        this.app.all('*', (req, res) => {
            if(res.status(404)) {
                return res.send("Route not found")
            }
        })

        this.app.listen(PORT, () => console.log(`App running on port ${PORT}`))
    }
}
