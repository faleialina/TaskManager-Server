const { getAllTaskDb, getByIdTaskDb, createTaskDb, updateTaskDb, deleteTaskDb, patchTaskDb  } = require('../repository/task.repository');

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
    if (!data.length) throw new Error('объект не создан');
    return data;
};

async function updateTask(id, task, user_id) {
    const data = await updateTaskDb(id, task, user_id);
    if (!data.length) throw new Error('такого id нет')
    return data;
};

async function deleteTask(id) {
    const data = await deleteTaskDb(id);
    if (!data.length) throw new Error('такого id нет')
    return data;
}

async function patchTask(id, clientData) {
    const data = await patchTaskDb(id, clientData);
    if (!data.length) throw new Error('такого id нет');
    return data;
}

module.exports = { getAllTask, getByIdTask, createTask, updateTask, deleteTask, patchTask  };