const mysql = require('mysql');
const Promise = require('bluebird');
Promise.promisifyAll(require('mysql/lib/Connection').prototype);

const config = 
{
    host: "localhost",
    user: "root",
    password: "password",
    database: "vamos",
}

const addMessage = async (mes) => {
    const connection = mysql.createConnection(config);
    await connection.connectAsync();
    let sql = 'insert into messages (message) values (?)';
    connection.queryAsync(sql, [mes.mess]);
    await connection.endAsync();
    return({message : "message added"});
}

const seeMessage = async () => 
{
    const connection = mysql.createConnection(config);
  
    await connection.connectAsync();
  
    let sql = `SELECT * FROM messages`;
    const list = await connection.queryAsync(sql);
  
    await connection.endAsync();
    return list;
};



module.exports = { addMessage, seeMessage };