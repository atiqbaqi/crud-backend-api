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
    },

    async listEvents(req, res){
        try {
            let page = req.query.page || 1;
            let size = req.query.size || 5;
            // calculate starting and ending position
            const start = (page - 1) * size;
            const end = start + size;

            const data = await db('events').select('*');

            // slice the data
            const result = data.slice(start, end);
            return res.status(200).send({events:result,page:page,size:size});
        } catch (error) {
            console.log(error);
            return res.status(500).send('something went wrong');
        }
    },

    async updateEvent(req,res){
        try {
            const id = req.params.id;
            await db('events')
            .update({
                event_name: req.body.event_name,
                event_location: req.body.event_location,
                event_date: req.body.event_date
            }).where({id:id});
            let updatedData = await db('events').where({id:id}).first('*');
            return res.status(200).send(updatedData);
        } catch (error) {
            console.log(error);
            return res.status(500).send('something went wrong');
        }
    },

    async selectEvent(req,res){
        try {
            const id = req.params.id;
            let data = await db('events').where({id:id}).first('*');
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send('something went wrong');
        }
    },

    async deleteEvent(req,res) {
        try {
            const id = req.params.id;
            await db('events').del().where({id:id});
            return res.status(200).send('event deleted successfully');
        } catch (error) {
            console.log(error);
            return res.status(500).send('something went wrong');
        }
    }
}