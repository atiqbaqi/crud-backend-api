const router = require('express').Router();
const eventController = require('../controller/index');

router.get('/health',async (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    res.status(200).send('health status api');
})

router.post('/events',eventController.createEvent);
router.get('/events',(req,res)=>{
    return res.render('create');
});

module.exports=router;