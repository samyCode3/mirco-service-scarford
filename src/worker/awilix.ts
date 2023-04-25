import * as awilix from 'awilix'
import { AuthService } from '../services/auth.service'
import { AuthController } from '../controller/auth.controller'


export const container = awilix.createContainer({
    injectionMode :  awilix.InjectionMode.PROXY
})


export const setup = () => {
    container.register({
        authService: awilix.asClass(AuthService),
        authController: awilix.asClass(AuthController)

    })
}

setup()
