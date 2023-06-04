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

async function updateTaskDb(id, task, user_id) {
    const client = await pool.connect();
    const sql = 'UPDATE tasks SET task = $1, user_id = $2 where id =$3 returning *';
    const res = (await client.query(sql, [task, user_id, id])).rows;
    return res;
};

async function deleteTaskDb(id) {
    const client = await pool.connect();
    const sql = 'DELETE from tasks where id =$1 returning *';
    const res = (await client.query(sql, [id])).rows;
    return res;
};

async function patchTaskDb(id, clientData) {
    const client = await pool.connect();
    const sql1 = 'SELECT * from tasks where id =$1';
    const res1 = (await client.query(sql1, [id])).rows;
    
    const merge = {...res1[0], ... clientData};

    const sql2 = 'UPDATE tasks SET task = $1, user_id = $2 where id =$3 returning *';
    const res2= (await client.query(sql2, [merge.task, merge.user_id, id])).rows;
    return res2;
};

module.exports = { getAllTaskDb, getByIdTaskDb, createTaskDb, updateTaskDb, deleteTaskDb, patchTaskDb };