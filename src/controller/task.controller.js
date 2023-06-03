const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { getAllTask, getByIdTask, createTask } = require('../service/task.service')

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllTask();
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getByIdTask(id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { task, user_id } = req.body;
        const data = await createTask(task, user_id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

module.exports = route;