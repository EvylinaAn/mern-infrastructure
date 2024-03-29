const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const bcrypt = require('bcrypt')
// const { token } = require('morgan')

module.exports = {
    create,
    login,
    checkToken
}


async function create(req, res) {
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)

        res.json(token)
    } catch (e){
        res.status(400).json(e)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({'email' : req.body.email})
        // const checkPassword = await bcrypt.compare(req.body.password, user.password)
        // if (checkPassword) {
        //     const token = createJWT(user)
        //     res.json(token)
        // }
        if (!user) throw new Error()

        const match = await bcrypt.compare(req.body.password, user.password)
        console.log(match)

        if(!match) throw new Error()
        res.json(createJWT(user))
        console.log(user)
    } catch (e) {
        res.status(400).json(e)    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.json(req.exp)
}

// Helper functions
function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        {expiresIn : '24h'}
    )
}