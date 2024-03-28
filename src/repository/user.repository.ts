import { pool } from '../db';

async function getAllUserDb() {
    const client = await pool.connect();
    const sql = 'SELECT * FROM users';
    const { rows } = await client.query(sql);
    return rows;
}

async function getUserByIdDb(id) {
    const client = await pool.connect();
    const sql = 'SELECT  * FROM users WHERE id =$1';
    const { rows } = await client.query(sql, [id]);
    return rows;
}

async function createUserDb(name, surname, email, pwd) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'insert into users (name,surname,email,pwd) values ($1,$2,$3,$4) returning *';
        const { rows } = await client.query(sql, [name, surname, email, pwd]);
        await client.query('commit');
        return rows;
    } catch (error) {
        await client.query('rollback');
        return [];
    }
}

async function updateUserDb(id, name, surname, email, pwd) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'update users set name = $1,surname = $2,email = $3,pwd = $4 where id = $5 returning *';
        const { rows } = await client.query(sql, [name, surname, email, pwd, id]);
        await client.query('commit');
        return rows;
    } catch (error) {
        await client.query('rollback');
        return [];
    }
}

async function deleteUserDb(id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = 'delete from users where id = $1 returning *';
        const { rows } = await client.query(sql, [id]);
        await client.query('commit');
        return rows;
    } catch (error) {
        await client.query('rollback');
        return [];
    }
}


export { getAllUserDb, getUserByIdDb, createUserDb, updateUserDb, deleteUserDb };