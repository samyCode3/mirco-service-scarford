import * as express from 'express'
import {setup} from '../worker/awilix'
import { Router } from '../routes/auth.routes'
setup()
const router = new Router()
import * as bodyParser from 'body-parser'

export class Express {
    public app
    constructor() {
           this.app = express()
           this.app.use(express.json({ limit: '50mb' }))
           this.loadRoutes()
    }

    private loadRoutes () {
        this.app.get('/', (req, res) => {
            res.send("Hello")
        })
        router.AuthRoute(this.app)
        this.app.all('*', (req, res) => {
            if(res.status(404)) {
                return res.send("Route not found")
            }
        })

        this.app.listen(3000, () => console.log('App running on port 3000'))
    }
}
