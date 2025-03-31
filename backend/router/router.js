import 'dotenv/config'
//////////////////////  CRUD ROUTE SCHEMA    ///////////////////////////////////////
import { response, Router } from "express"
import User from "../db/models/User.js"
import Post from "../db/models/Post.js"
//////////////////  UPLOAD IMG MIDDELWEAR    //////////////////////////////////////////////////////
//import cloudinariStorage from "../cloudinaryStorage.js"
import postCoverUpload from "../middleware/uploadsCoverPost.js"
import uploadAvatar from "../middleware/uploadAvatar.js"
////////////////////  HELPER MAILER STG.   //////////////////////////////////////////////////
import mailer from "../helper/mailer.js"





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

///////// GET single users /////////////////////////////////////////////////////////////

router.get('/users/:userId', async(request, response, next) => {

    const singleUser = await User.findById(request.params.userId)
    console.log('hello look single user')
    response.send(singleUser)
    next()
})


///////// POST create single users /////////////////////////////////////////////////////////////

router.post('/users', uploadAvatar.single('avatar'),
     async (request, response, next) => {
    
    const avatar = {...request.body, avatar: request?.file?.path}
    
    const createNewUser = await User.create(avatar)

await mailer.sendMail({
      from: "elyssch@gmail.com", // Use environment variable
      to: request.body.email,
      subject: 'Hello welcome to striveBlog', // Corrected spelling
      text: 'Welcome to the striveBlog', // Corrected spelling
      html: `<strong>Enjoy to see you here ${request.body.firstName}</strong>`,
    },console.log("email sent"));


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

///////// PATCH modify avatar single users /////////////////////////////////////////////////////////////

router.patch( '/users/:userId/avatar', uploadAvatar.single('avatar'),
    async(request, response, next) => {
        const avatar = {...request.body, avatar: request.file.path}
        const uploadAvatar = await User.findByIdAndUpdate(request.params.userId,
        avatar, {new: true}
        )
        console.log('hello u modify u user avatar profile')
        response.send(uploadAvatar)
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
///////// GET alla users /////////////////////////////////////////////////////////////

router.get('/post', async (request, response, next) => {

    const allPosts = await Post.where({})

    console.log('hello look all posts')
    response.send(allPosts)
    next()
})

///////// GET single post /////////////////////////////////////////////////////////////

router.get('/post/:postId', async (request, response, next) => {

    const singlePost = await Post.findById(request.params.postId)
    console.log('hello look single post')
    response.send(singlePost)
    next()
})



///////// POST  create single articles /////////////////////////////////////////////////////////////

router.post('/post', postCoverUpload.single('cover'),
    async (request, response, next) => {

    const cover = {...request.body, cover: request.file.path}
    
    const createNewPost = await Post.create(cover)

    await mailer.sendMail({
        from: "elyssch@gmail.com", // Use environment variable
        to: request.body.email,
        subject: 'YEP your post is created', // Corrected spelling
        html: `<strong>${request.body.firstName} your new post i onlince now</strong>`,
      },console.log("email sent"));

    console.log('hello u build a new post')
    console.log(request.body)
    response.send(createNewPost)
    next()
})

///////// PUT modify single articles /////////////////////////////////////////////////////////////

router.put('/post/:postId', async (request, response, next) => {

    const updatedPost = await Post.findByIdAndUpdate(request.params.postId,
        request.body, {new: true}
    )

    console.log('hello i modify u single post')
    console.log(request.params.postId)
    response.send(updatedPost)
    next()
})

///////// PATCH modify avatar single users /////////////////////////////////////////////////////////////

router.patch( '/post/:postId/cover', postCoverUpload.single('cover'),
    async(request, response, next) => {
        const cover = {...request.body, cover: request.file.path}
        const uploadCover = await Post.findByIdAndUpdate(request.params.postId,
        cover, {new: true}
        )
        console.log('hello u modify your post cover')
        response.send(uploadCover)
        next()
     })
///////// DELETE single articles /////////////////////////////////////////////////////////////

router.delete('/post/:postId', async (request, response, next) => {

    const deleatPost = await Post.findByIdAndDelete(request.params.postId)

    console.log('hello u delete your single post')
    console.log(request.params.postId)
    response.send(deleatPost)
    next()
})


/////////  SINGLE USER ALL POSTS   //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////// GET single users  all post /////////////////////////////////////////////////////////////

router.get('/users/:userId/post', async(request, response, next) => {


    const userId = request.params.userId
    const singleUserAllPost = await Post.where({userId})

    console.log('hello look all my single post')
    response.send(singleUserAllPost)
    next()
})

/////////  COMMENTS  //////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
///////// GET all comments id post /////////////////////////////////////////////////////////////

router.get('/post/:postId/comments', async (request, response, next) => {
    
      const postId = request.params.postId;
      const post = await Post.findById(postId).populate('comments.author')
  
      console.log('hello look all my post comments');
      response.send(post.comments);
    next()
  });

///////// POST single comments id post /////////////////////////////////////////////////////////////

router.post('/post/:postId/comments', async (request, response, next) => {
    
    const postId = request.params.postId;
    const post = await Post.findById(postId).populate('comments')
    post.comments.push(request.body)
    await post.save()
    

    console.log('hello look all my post comments');
    response.send(post.comments);
  next()
});

///////// PUT single comments id post /////////////////////////////////////////////////////////////

router.put('/post/:postId/comments/:commentId', async (request, response, next) => {

    const postId = request.params.postId;
    const post = await Post.findById(postId).populate('comments')
    post.comments.id(request.params.commentId).set(request.body)
    await post.save()

   /*   const post = await Post.findByIdAndUpdate(postId,
        request.body, {new: true}
     )
    console.log('hello look u comment are modify')
    response.send(post) */
    console.log('hello look u comment are modify')
    response.send(post)
    next()
    
})

///////// DELETE single comments id post /////////////////////////////////////////////////////////////

router.delete('/post/:postId/comments/:commentId', async (request, response, next) => {

    const postId = request.params.postId;
    const post = await Post.findById(postId)
    post.comments.id(request.params.commentId).remove()
 
    console.log('hello u delete your single comment')
    response.send(post)
    next();
    
})


export default router
