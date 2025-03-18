import { Router } from "express"
import User from "../db/models/User.js"




const router = Router()


///////// GET  /////////////////////////////////////////////////////////////
/* router.get('/', (request, response, next) => {
    console.log(request.body)
    response.send(request.body)
    next()
})
  */

/////////  USERS   //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////// GET alla users /////////////////////////////////////////////////////////////

router.get('/users', async(request, response, next) => {

    const allUsers = await User.where({})

    console.log('hello look all users')
    response.send(allUsers)
    next()
})

///////// POST create single users /////////////////////////////////////////////////////////////

router.post('/users', async (request, response, next) => {
    
    const createNewUser = await User.create(request.body)
    console.log('hello u build a new user')
    response.send(createNewUser)
    next()
})

///////// PUT modify single users /////////////////////////////////////////////////////////////

router.put('/users/:userId', async(request, response, next) => {

    const updatedUser = await User.findByIdAndUpdate(request.params.userId,
        request.body, {new: true}
    )
    console.log('hello i modify my user and nice your user updated')
    response.send(updatedUser)
    next()
})

///////// DELETE single users /////////////////////////////////////////////////////////////

router.delete('/users/:userId', async(request, response, next) => {

    const userDeleat = await User.findByIdAndDelete(request.params.userId)
    response.send('byby user deleted')
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
