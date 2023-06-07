const { pool } = require('../db');

async function createUserDb(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users (name, surname, email, pwd) values ($1, $2, $3, $4) returning * ';
    const res = (await client.query(sql, [name, surname, email, pwd])).rows;
    return res;
}

async function getUserByEmail(email) {
    const client = await pool.connect();
    const sql = 'SELECT * from users where email = $1';
    const res = (await client.query(sql, [email])).rows;
    return res;
}

module.exports = { createUserDb, getUserByEmail };