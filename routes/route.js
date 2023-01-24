const router = require('express').Router();
const EventController = require('../controller/EventController');
const AuthController = require('../controller/AuthController');
const auth = require('../middleware/auth');

router.get('/health',async (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    res.status(200).send('health status api');
})

// login
router.post('/login', AuthController.login);

//create new event
router.post('/events',auth,EventController.createEvent);
router.get('/events',(req,res)=>{
    return res.render('create');
});

module.exports=router;