function isvalidTaskId(req, res, next) {
    const { id } = req.params;
    if (isNaN(+id)) throw new Error('id is not a number');
    if (+id <= 0) throw new Error('id is negative');
    next();
};

function isvalidTaskBody(req, res, next) {
    const { task, user_id } = req.body;
    if (!task) throw new Error('no value');
    if (!isNaN(task)) throw new Error('invalid value');
    if (isNaN(user_id)) throw new Error('invalid value');
    if (user_id <= 0) throw new Error('user_id is negative');
    next();
}
export { isvalidTaskId, isvalidTaskBody };