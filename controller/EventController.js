const db = require('../db/db_config');

module.exports = {
    async createEvent(req,res){
        try {
            await db('events')
            .insert({
                event_name: req.body.event_name,
                event_location: req.body.event_location,
                event_date: req.body.event_date
            });
            return res.status(200).json({message:'successfully created event'});
        } catch (error) {
            console.log(error);
            return res.status(500).send('something went wrong');
        }
    }
}