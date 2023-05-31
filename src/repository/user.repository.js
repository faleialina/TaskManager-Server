const { pool } = require('../db');

async function createUserDb(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users(name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}

async function deleteUserDb(id) {
    const client = await pool.connect();
    const sql = 'DELETE from users where id = $1 returning *';
    const result = (await client.query(sql, [id])).rows;
    return result;
}


module.exports = { createUserDb, deleteUserDb };