const { getAllTaskDb, getByIdTaskDb, createTaskDb } = require('../repository/task.repository');

async function getAllTask() {
    const data = await getAllTaskDb();
    if (!data.length) throw new Error('база данных не заполнена');
    return data;
};

async function getByIdTask(id) {
    const data = await getByIdTaskDb(id);
    if (!data.length) throw new Error('такого id нет');
    return data;
};

async function createTask(task, user_id) {
    const data = await createTaskDb(task, user_id);
    return data;
};

module.exports = { getAllTask, getByIdTask, createTask };