import { createTaskDb, getAllTaskDb } from '../../repository/task.repository'


const client = {
    query: jest.fn()
}

jest.mock('pg', function () {
    const pool = {
        connect: jest.fn(() => client)
    }

    return {
        Pool: jest.fn(() => pool)
    }
})

describe('createTaskDb', () => {
    test('corrected', async () => {
        const value = [{ id: 1, task: 'js', user_id: 1 }]
        client.query.mockResolvedValue({ rows: value });

        const res = await createTaskDb('js', 1)
        expect(client.query).toHaveBeenCalled()
        expect(res).toEqual(value)
        expect(res).toHaveLength(1)
    })
})
describe('getAllTaskDb', () => {
    test('corrected', async () => {
        const value = [{ id: 1, task: 'js', user_id: 1 }]
        client.query.mockResolvedValue({ rows: value });

        const res = await getAllTaskDb()
        expect(client.query).toHaveBeenCalled()
        expect(res).toEqual(value)
        expect(res).toHaveLength(1)
    })
})