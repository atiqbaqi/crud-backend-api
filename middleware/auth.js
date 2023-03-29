const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    if(req.headers.authorization==undefined) return res.status(400).json({message: 'bearer token is required'});
    // get the JWT from the request headers
    const token = req.headers.authorization.split(' ')[1];
    // verify the JWT using the secret
    try {
      let v = jwt.verify(token, process.env.ACESSS_TOKEN_SECRET);
      console.log(v);
      next();  
    } catch (error) {
        console.error(error);
        if(error.message == 'invalid signature') return res.status(401).json({ message: 'invalid token'});
        if(error.message == 'jwt expired') return res.status(401).json({ message: 'token expired' });
        return res.status(500).json({ message: 'something went wrong'});
    }
};

module.exports = auth;