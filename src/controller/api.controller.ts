import express from 'express';
import { buildResponse } from '../helper/buildResponse';
import { createUser, authUser } from '../service/api.service';


const route = express.Router();

route.post('/reg', async (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body;
        const data = await createUser(name, surname, email, pwd);
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }
});

route.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body;
        const data = await authUser(email, pwd);
        buildResponse(res, 200, data);

    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }
});

export default route;
