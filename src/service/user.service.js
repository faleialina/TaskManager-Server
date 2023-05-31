const { createUserDb, deleteUserDb } = require('../repository/user.repository');

async function createUser(name, surname, email, pwd) {
    const data = await createUserDb(name, surname, email, pwd);
    return data;
}

async function deleteUser(id) {
    const data = await deleteUserDb(id);
    return data;
}

module.exports = { createUser, deleteUser };