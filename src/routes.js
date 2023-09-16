import { Router } from 'express'
import UserController from './app/controlles/UserController.js'
import SessionController from './app/controlles/SessionController.js'

import authMiddlewares from './app/middlewares/auth.js'
import CreateStudentForTestController from './app/controlles/CreateStudentForTestController.js'

const routes = new Router()


routes.put('/update-password', UserController.update)
routes.post('/sessions', SessionController.store)

routes.use(authMiddlewares)

routes.get('/getUsers', UserController.index)

routes.get('/students', CreateStudentForTestController.index)
routes.post('/createStudent', CreateStudentForTestController.store)
routes.put('/updateStudent/:id', CreateStudentForTestController.update)

export default routes
