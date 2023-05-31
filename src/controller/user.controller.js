const express = require('express');
const { createUser, deleteUser } = require('../service/user.service');

const route = express.Router();

route.get('/', async (req, res) => {
    //const data
    res.send('ok')
});

route.post('/', async (req, res) => {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);
    res.send(data)
});

route.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await deleteUser(id);
    res.send(data);
})

module.exports = route;