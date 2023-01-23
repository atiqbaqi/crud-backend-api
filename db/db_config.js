const sql=require('mysql2');

const sql_con={
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT
};

const con=sql.createConnection(sql_con);
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected using mysql2!");
});

const knex_db_con = require('knex')({
    client: 'mysql2',
    connection: sql_con
});

knex_db_con.raw('SELECT 1').then(function(){
    console.log(`${process.env.DB_NAME} - connected using knex!`);
    console.groupEnd();
});

module.exports=sql_con;
module.exports=knex_db_con;