const db = require('../db/db_config');
const jwt = require('jsonwebtoken');

module.exports = {
    async login(req,res){
        try {
        const user = req.body.user_name;
        const password = req.body.password;
        const user_info = await db.from('users').where({user_name: user,password: password}).first();

        if (user_info) {
            // if the user is authenticated, generate a JWT
            const token = jwt.sign({
                user_id: user_info.id,
                username: user_info.user_name,
            }, process.env.ACESSS_TOKEN_SECRET
            ,{expiresIn:1800});//30 min
            // Store the JWT token in the session
            req.session.token = token;
            return res.status(200).json({ token });
        } else {
            // if the user is not authenticated, return invalid message
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'something went wrong' });
        }
    }
}