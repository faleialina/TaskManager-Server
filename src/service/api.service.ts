import { createUserDb, getUserByEmail } from '../repository/api.repository'
import bcrypt from 'bcrypt';

const salt = 2;

async function createUser(name, surname, email, pwd) {
    const user = await getUserByEmail(email);
    if (user.length) throw new Error('there is such a user');

    const hashPwd = await bcrypt.hash(pwd, salt);

    const data = await createUserDb(name, surname, email, hashPwd);
    if (!data.length) throw new Error('user not create');
    return data;
};

async function authUser(email, pwd) {
    const user = await getUserByEmail(email);
    if (!user.length) throw new Error('email not found');

    const bool = await bcrypt.compare(pwd, user[0].pwd);
    if (!bool) throw new Error('password mismatch');
    return user;
}

export { createUser, authUser };