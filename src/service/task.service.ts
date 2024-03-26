import { getAllTaskDb, getByIdTaskDb, createTaskDb, updateTaskDb, deleteTaskDb, patchTaskDb  } from '../repository/task.repository';

async function getAllTask() {
    const data = await getAllTaskDb();
    if (!data.length) throw new Error('database is not full');
    return data;
};

async function getByIdTask(id) {
    const data = await getByIdTaskDb(id);
    if (!data.length) throw new Error('no such id');
    return data;
};

async function createTask(task, user_id) {
    const data = await createTaskDb(task, user_id);
    if (!data.length) throw new Error('object not created');
    return data;
};

async function updateTask(id, task, user_id) {
    const data = await updateTaskDb(id, task, user_id);
    if (!data.length) throw new Error('no such id')
    return data;
};

async function deleteTask(id) {
    const data = await deleteTaskDb(id);
    if (!data.length) throw new Error('no such id')
    return data;
}

async function patchTask(id, clientData) {
    const data = await patchTaskDb(id, clientData);
    if (!data.length) throw new Error('no such id');
    return data;
}

export { getAllTask, getByIdTask, createTask, updateTask, deleteTask, patchTask  };