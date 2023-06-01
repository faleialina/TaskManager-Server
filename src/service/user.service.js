const { getAllUserDb, getUserByIdDb, createUserDb, updateUserDb, deleteUserDb } = require('../repository/user.repository');

async function getAllUser() {
    const data = await getAllUserDb();
    if (!data.length) throw new Error('база данных не заполнена');
    return data;
}

async function getUserById(id) {
    const data = await getUserByIdDb(id);
    if (!data.length) throw new Error('такого id нет');
    return data;
}

async function createUser(name, surname, email, pwd) {
    const data = await createUserDb(name, surname, email, pwd);
    if (!data.length) throw new Error('база данных не заполнена');
    return data;
}
async function updateUser(id, name, surname, email, pwd) {
    const data = await updateUserDb(id, name, surname, email, pwd);
    if (!data.length) throw new Error('такого id нет');
    return data;
}

async function deleteUser(id) {
    const data = await deleteUserDb(id);
    if (!data.length) throw new Error('такого id нет');
    return data;
}

module.exports = { getAllUser, getUserById, createUser, updateUser, deleteUser };