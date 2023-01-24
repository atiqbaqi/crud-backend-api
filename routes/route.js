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

//list of events
router.get('/events', EventController.listEvents);

module.exports=router;