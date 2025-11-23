// /back/models/tareasModel.js

var pool = require('../bd');

// 1. SELECT (Leer todas las tareas)
async function getTareas(userId) {
    try {
        var query = "select * from tareas where user_id = ? order by id desc";
        var rows = await pool.query(query, [userId]);;
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// 2. INSERT (Crear una nueva tarea)
async function insertTarea(obj) {
    try {
        var query = "insert into tareas set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// 3. DELETE (Eliminar una tarea por ID)
async function deleteTarea(id, userId) {
    try {
        var query = "delete from tareas where id = ? AND user_id = ?";
        var rows = await pool.query(query, [id, userId]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// 4. UPDATE (Modificar una tarea por ID)
async function updateTarea(obj, id, userId) {
    try {
        var query = "update tareas set ? where id = ? AND user_id = ?";
        var rows = await pool.query(query, [obj, id, userId]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getTareas, insertTarea, deleteTarea, updateTarea };