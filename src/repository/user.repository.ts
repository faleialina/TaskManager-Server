import { pool } from '../db';

async function getAllUserDb() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getUserByIdDb(id) {
    const client = await pool.connect();
    const sql = 'SELECT  * FROM users WHERE id =$1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function createUserDb(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'INSERT INTO users(name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
    const result = (await client.query(sql, [name, surname, email, pwd])).rows;
    return result;
}

async function updateUserDb(id, name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = 'UPDATE users SET  name = $1, surname = $2, email = $3, pwd = $4 WHERE id = $5 returning *';
    const result = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    return result;
}

async function deleteUserDb(id) {
    const client = await pool.connect();
    const sql = 'DELETE from users where id = $1 returning *';
    const result = (await client.query(sql, [id])).rows;
    return result;
}


export { getAllUserDb, getUserByIdDb, createUserDb, updateUserDb, deleteUserDb };