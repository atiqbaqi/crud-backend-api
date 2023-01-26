const db = require('../db/db_config');
const moment = require('moment');


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
            let pageNumber = parseInt(req.query.page) || 1;
            let pageSize = parseInt(req.query.size) || 5;
            console.log(pageNumber+'>>'+pageSize);
            const totalEvents = await db('events').count('* as total').first();
            //const totalPages = Math.ceil(totalEvents.total / pageSize);

            const data = await db.select().from('events').limit(pageSize).offset((pageNumber - 1) * pageSize);

            for(let i = 0; i < data.length; i++) {
                data[i].event_date = moment(data[i].event_date).format("YYYY-MM-DD HH:mm")+' UTC';
            }

            return res.status(200).json({data:data,recordsTotal:totalEvents.total});
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