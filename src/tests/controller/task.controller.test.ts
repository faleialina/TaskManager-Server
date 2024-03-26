import supertest from 'supertest'
import { app } from '../../app'

test('post/task', async () => {
    const res = await supertest(app).post('/task').send({ task: 'js', user_id: 5 });
console.log(res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].task).toBe('js');
    expect(res.body[0].user_id).toBe(5);
})