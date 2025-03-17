import { Router } from "express"


const router = Router()


///////// GET  /////////////////////////////////////////////////////////////
router.get('/', (request, response, next) => {
    console.log(request.body)
    response.send(request.body)
    next()
})
 

/////////  USERS   //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////// GET alla users /////////////////////////////////////////////////////////////

router.get('/users', (request, response, next) => {
    console.log('hello look all users')
    console.log(request.body)
    response.send(request.body)
    next()
})

///////// POST create single users /////////////////////////////////////////////////////////////

router.post('/users', (request, response, next) => {
    console.log('hello u build a new user')
    console.log(request.body)
    response.send(request.body)
    next()
})

///////// PUT modify single users /////////////////////////////////////////////////////////////

router.put('/users/:userId', (request, response, next) => {
    console.log('hello i modify my user')
    console.log(request.body)
    console.log(request.params.userId)
    response.send(request.body)
    next()
})

///////// DELETE single users /////////////////////////////////////////////////////////////

router.delete('/users/:userId', (request, response, next) => {
    console.log('hello u delete my user')
    console.log(request.body)
    console.log(request.params.userId)
    response.send(request.body)
    next()
})


/////////  POSTS   //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////// POST  create single articles /////////////////////////////////////////////////////////////

router.post('/post', (request, response, next) => {
    console.log('hello u build a new post')
    console.log(request.body)
    response.send(request.body)
    next()
})

///////// PUT modify single articles /////////////////////////////////////////////////////////////

router.put('/post/:postId', (request, response, next) => {
    console.log('hello i modify u single post')
    console.log(request.body)
    console.log(request.params.postId)
    response.send(request.body)
    next()
})

///////// DELETE single articles /////////////////////////////////////////////////////////////

router.delete('/post/:postId', (request, response, next) => {
    console.log('hello u delete single post')
    console.log(request.body)
    console.log(request.params.postId)
    response.send(request.body)
    next()
})



export default router
