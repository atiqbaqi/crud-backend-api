const router = require('express').Router();
const eventController = require('../controller/index');

router.get('/health',async (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    res.status(200).send('health status api');
})

router.post('/events',eventController.createEvent);

module.exports=router;