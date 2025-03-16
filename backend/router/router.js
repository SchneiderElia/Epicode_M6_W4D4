import { Router } from "express"

const router = Router()


///////// GET /////////////////////////////////////////////////////////////

router.get('/', (request, response, next) => {
    console.log('hello im here -- get request ok')
    response.send('hello im here -- get request ok')
    next()
})

///////// GET /////////////////////////////////////////////////////////////

export default router