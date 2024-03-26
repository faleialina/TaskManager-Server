import { createTask, getAllTask } from '../../service/task.service'
import * as repository from '../../repository/task.repository'


describe('createTask', () => {
    test('corrected', async () => {
        const mock = jest.spyOn(repository, 'createTaskDb');
        mock.mockResolvedValue([{ id: 1, task: 'ffff', user_id: 1 }]);
        const res = await createTask('ffff', 1)
        expect(res).toEqual([{ id: 1, task: 'ffff', user_id: 1 }])
        expect(res).toHaveLength(1)
        expect(res.length).toBeGreaterThan(0)
        expect(mock).toHaveBeenCalled()
    })

    test('uncorrected', async () => {
        const fake = jest.spyOn(repository, 'createTaskDb');
        try {
            fake.mockResolvedValue([])

            await createTask('task_1', '1');
        } catch (error: any) {
            expect(fake).toHaveBeenCalled();
            expect(error.message).toBe('object not created')
        }
    });


})


describe('getAllTask', () => {
    test('corrected', async () => {
        const fake = jest.spyOn(repository, 'getAllTaskDb');
        fake.mockResolvedValue([{ id: 1, task: 'task_1', user_id: '1' }, { id: 2, task: 'task_2', user_id: '2' }])

        const res = await getAllTask();

        expect(fake).toHaveBeenCalled();
        expect(res).toEqual([{ id: 1, task: 'task_1', user_id: '1' }, { id: 2, task: 'task_2', user_id: '2' }])
        expect(res).toHaveLength(2);

    });

})