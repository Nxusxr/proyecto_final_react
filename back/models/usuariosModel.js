// /back/models/usuariosModel.js
var pool = require('../bd');
var md5 = require('md5');

/*
 * Función para buscar un usuario por nombre de usuario y contraseña hasheada.
 */
async function getUserByUsernameAndPassword(user, password) {
    try {
        // 1. Hashear la contraseña ingresada por el usuario
        var hashedPassword = md5(password);

        // 2. Consulta SQL para buscar al usuario
        var query = "select * from usuarios where usuario = ? AND password = ? limit 1";
        
        // Pool.query ejecuta la consulta
        var rows = await pool.query(query, [user, hashedPassword]); 

        // 3. Devolver el resultado
        // Si hay resultados, devuelve el primer elemento (el usuario), si no, devuelve null.
        if (rows.length === 0) {
            return null;
        } else {
            return rows[0]; 
        }

    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getUserByUsernameAndPassword };