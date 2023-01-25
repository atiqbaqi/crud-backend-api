const express = require('express');
const router = express.Router();
const EventController = require('../controller/EventController');
const AuthController = require('../controller/AuthController');
const auth = require('../middleware/auth');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/health',async (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    res.status(200).send('health status api');
})

// login
router.post('/login', AuthController.login);

//create new event
router.post('/events', auth, EventController.createEvent);

//list of events
router.get('/events', auth, EventController.listEvents);

//update event
router.put('/events/:id', auth, EventController.updateEvent);

//read event
router.get('/events/:id', auth, EventController.selectEvent);

module.exports=router;