import jwt from 'jsonwebtoken'
import UserRegistration from '../db/models/UserRegistration.js'

const authorization = async (req, res, next) => {
    const token = req.headers.authorization.split('')

    if(token.legth !=2) return response(401).send()
        if(parts[0] !='Bearer') resturn.response(401).send()
        
        const jwtToken = part[1]
        jtw.verify(jwtToken, process.en.JWT_SECRET, async (error, payload) =>{
	
            if(erroror) return response.status(401).send()
                const user = await User.findeById(payload.UserId)
                
                if(!user) return response.status(401).send()
                request.authUser = user
                
                next()
            })

}

export default authorization