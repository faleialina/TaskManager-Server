const express = require('express');
const { getAllUser, getUserById, createUser,updateUser, deleteUser } = require('../service/user.service');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUser();
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await updateUser(id, name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        buildResponse(res, 200, data);
    } catch (error) {
        buildResponse(res, 404, error.message);
    }
});

module.exports = route;