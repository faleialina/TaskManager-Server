import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import user from './controller/user.controller';
import task from './controller/task.controller';
import api from './controller/api.controller';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', user);
app.use('/task', task);
app.use('/api', api);

app.use((error, req, res, _next) => res.send(error.message));

export {app};