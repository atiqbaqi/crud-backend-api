const knex_db_con = require('../db/db_config');

module.exports = {
    async createEvent(req,res){
        try {
            await knex_db_con('events')
            .insert({
                event_name: req.body.event_name,
                event_location: req.body.event_location,
                event_date: req.body.event_date
            });
            return res.render('create',{message:'Created event successfully.'});
        } catch (error) {
            console.log(error);
            return res.status(500).send('something went wrong');
        }
    }
}