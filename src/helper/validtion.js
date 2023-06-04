function isvalidTaskId(req, res, next) {
    const { id } = req.params;
    if (isNaN(id)) throw new Error('id не число');
    if (id <= 0) throw new Error('id отрицательное');
    next();
};

function isvalidTaskBody(req, res, next) {
    const { task, user_id } = req.body;
    if (!task) throw new Error('значение отсутствует');
    if (!isNaN(task)) throw new Error('невалидное значение');
    if (isNaN(user_id)) throw new Error('невалидное значение');
    if (user_id <= 0) throw new Error('user_id отрицательное');
    next();
}

module.exports = { isvalidTaskId, isvalidTaskBody };