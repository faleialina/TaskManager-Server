import { createUser, authUser } from '../../service/api.service'
import * as repository from '../../repository/api.repository'
import bcrypt from 'bcrypt';

describe('createUser', () => {
    test('corrected', async () => {
        const mock_1 = jest.spyOn(repository, 'getUserByEmail');
        const mock_2 = jest.spyOn(repository, 'createUserDb');
        const mock_3 = jest.spyOn(bcrypt, 'hash');
        mock_1.mockResolvedValue([]);
        mock_2.mockResolvedValue([{ id: 1, name: 'Alina', surname: 'Falei', email: 'bxbbmm@mail.ru', pwd: 'dgn7bgjh77nj' }]);
        mock_3.mockResolvedValue('dgn7bgjh77nj');


        const res = await createUser('Alina', 'Falei', 'bxbbmm@mail.ru', '12345678')
        expect(mock_1).toHaveBeenCalled()
        expect(mock_2).toHaveBeenCalled()
        expect(mock_3).toHaveBeenCalled()
        expect(mock_1).toHaveBeenCalledWith('bxbbmm@mail.ru')
        expect(mock_2).toHaveBeenCalledWith('Alina', 'Falei', 'bxbbmm@mail.ru', 'dgn7bgjh77nj')
        expect(mock_3).toHaveBeenCalledWith('12345678', 2)
        expect(res).toEqual([{ id: 1, name: 'Alina', surname: 'Falei', email: 'bxbbmm@mail.ru', pwd: 'dgn7bgjh77nj' }])
        expect(res).toHaveLength(1)
    })
})