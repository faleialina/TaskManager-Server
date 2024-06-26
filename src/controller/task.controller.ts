import express from 'express';

import { buildResponse } from '../helper/buildResponse';
import { getAllTask, getByIdTask, createTask, updateTask, deleteTask, patchTask } from '../service/task.service'
import { isvalidTaskId, isvalidTaskBody } from '../helper/validtion';

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllTask();
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }
});

route.get('/:id', isvalidTaskId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getByIdTask(id);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/', isvalidTaskBody, async (req, res) => {
    try {
        const { task, user_id } = req.body;
        const data = await createTask(task, user_id);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }
});

route.put('/:id', isvalidTaskId, isvalidTaskBody, async (req, res) => {
    try {
        const { id } = req.params;
        const { task, user_id } = req.body;
        const data = await updateTask(id, task, user_id);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:id', isvalidTaskId, async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteTask(id);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
});

route.patch('/:id', isvalidTaskId, async (req, res) => {
    try {
        const { id } = req.params;
        const clientData = req.body;
        const data = await patchTask(id, clientData);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

export default route;