const { pool } = require('../db');

async function getAllTaskDb() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks';
    const res = (await client.query(sql)).rows;
    return res;
};

async function getByIdTaskDb(id) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks WHERE id = $1';
    const res = (await client.query(sql, [id])).rows;
    return res;
};

async function createTaskDb(task, user_id) {
    const client = await pool.connect();
    const sql = 'INSERT INTO tasks (task, user_id) values ($1, $2) returning *';
    const res = (await client.query(sql, [task, user_id])).rows;
    return res;
};

module.exports = { getAllTaskDb, getByIdTaskDb, createTaskDb };