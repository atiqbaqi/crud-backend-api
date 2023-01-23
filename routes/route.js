const router = require('express').Router();

router.get('/health',async (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log(`Client IP: ${clientIp}`);
    res.status(200).send('health status api');
})

module.exports=router;