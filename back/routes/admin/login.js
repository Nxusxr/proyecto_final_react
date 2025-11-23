// /back/routes/admin/login.js

var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

// GET - Muestra el formulario de login
router.get('/', function (req, res, next) {
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

// POST - Procesa el inicio de sesión
router.post('/', async (req, res, next) => {
    try {
        var usuario = req.body.usuario;
        var password = req.body.password;

        // Llama al modelo para verificar credenciales
        var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

        if (data != null) {
            // Crea variables de sesión
            req.session.id_usuario = data.id;
            req.session.nombre = data.usuario;
            res.redirect('/admin/novedades');
        } else {
            res.render('admin/login', {
                layout: 'admin/layout',
                error: true
            });
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// GET - Cierre de sesión
router.get('/logout', function (req, res, next) {
    req.session.destroy();
    res.render('admin/login', {
        layout: 'admin/layout'
    });
});

module.exports = router;