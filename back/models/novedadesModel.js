// /back/models/novedadesModel.js
var pool = require('../bd');

/*
 * Listar novedades
 */
async function getNovedades() {
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}

/*
 * Alta de novedad
 */
async function insertNovedad(obj) {
    try {
        var query = "insert into novedades set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

/*
 * Eliminar novedad
 */
async function deleteNovedadById(id) {
    var query = "delete from novedades where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

/*
 * Obtener novedad por ID
 */
async function getNovedadById(id) {
    var query = "select * from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

/*
 * Modificar novedad
 */
async function modificarNovedadById(obj, id) {
    try {
        var query = "update novedades set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { 
    getNovedades, 
    insertNovedad,
    deleteNovedadById,
    getNovedadById,
    modificarNovedadById
}