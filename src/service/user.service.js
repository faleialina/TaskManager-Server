const { getAllUserDb, getUserByIdDb, createUserDb, deleteUserDb } = require('../repository/user.repository');

async function getAllUser() {
    const data = await getAllUserDb();
    return data;
}

async function getUserById(id) {
    const data = await getUserByIdDb(id);
    return data;
}

async function createUser(name, surname, email, pwd) {
    const data = await createUserDb(name, surname, email, pwd);
    return data;
}

async function deleteUser(id) {
    const data = await deleteUserDb(id);
    return data;
}

module.exports = { getAllUser, getUserById, createUser, deleteUser };