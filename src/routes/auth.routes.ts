import * as express from 'express'

import { container } from '../worker/awilix'
console.log(container)
const authController = container.resolve('authController')
console.log(authController)
export class Router {
    public routes
    async AuthRoute (route) {
        this.routes = route
        this.routes.post('/create', authController.createController)
    }
}