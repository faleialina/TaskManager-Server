import { pool } from '../db';

async function getAllTaskDb() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks';
    const { rows } = await client.query(sql);
    return rows;
};

async function getByIdTaskDb(id) {
    const client = await pool.connect();
    const sql = 'SELECT * FROM tasks WHERE id = $1';
    const { rows } = await client.query(sql, [id]);
    return rows;
};

async function createTaskDb(task, user_id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'insert into tasks (task,user_id) values ($1,$2) returning *';
        const { rows } = await client.query(sql, [task, user_id]);
        await client.query('commit');
        return rows;
    } catch (error) {
        await client.query('rollback');
        return [];
    }
};

async function updateTaskDb(id, task, user_id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'UPDATE tasks SET task = $1,user_id = $2 WHERE id = $3 returning *';
        const { rows } = await client.query(sql, [task, user_id, id]);
        await client.query('commit');
        return rows;
    } catch (error) {
        await client.query('rollback');
        return [];
    }
};

async function deleteTaskDb(id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'DELETE FROM tasks WHERE id = $1 returning *';
        const { rows } = await client.query(sql, [id]);
        await client.query('commit');
        return rows;
    } catch (error) {
        await client.query('rollback');
        return [];
    }
};

async function patchTaskDb(id, clientData) {
    const client = await pool.connect();
    const sql1 = 'SELECT * from tasks where id =$1';
    const res1 = (await client.query(sql1, [id])).rows;

    const merge = { ...res1[0], ...clientData };

    const sql2 = 'UPDATE tasks SET task = $1, user_id = $2 where id =$3 returning *';
    const res2 = (await client.query(sql2, [merge.task, merge.user_id, id])).rows;
    return res2;
};

export { getAllTaskDb, getByIdTaskDb, createTaskDb, updateTaskDb, deleteTaskDb, patchTaskDb };