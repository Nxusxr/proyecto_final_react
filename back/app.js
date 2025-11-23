// /back/app.js (VERSIÓN FINAL Y ORDENADA)

require('dotenv').config(); // 1. CARGA DE VARIABLES DE ENTORNO

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); // Para permitir conexión desde Next.js (3000)
var session = require('express-session');
var fileUpload = require('express-fileupload');

// REQUIRES DE RUTAS
var apiRouter = require('./routes/api');
var loginRouter = require('./routes/admin/login');
var adminNovedadesRouter = require('./routes/admin/novedades');

var app = express();

// CONFIGURACIÓN DE VISTAS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

/* MIDDLEWARE GLOBAL (Procesa el request) */

/* CORS para el puerto 3000 */
app.use(cors({
    origin: 'http://localhost:3000' 
}));

/* LOGGER */
app.use(logger('dev'));

/* BODY PARSERS */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* COOKIES y SESIÓN para req.session */
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

/* Contenido Estático */
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

/* MIDDLEWARE PERSONALIZADO para la ruta secured */

var secured = async (req, res, next) => {
    try {
        if (req.session.id_usuario) {
            next();
        } else {
            res.redirect('/admin/login');
        }
    } catch (error) {
        console.log(error);
    }
};


/* ASIGNACIÓN DE RUTAS */

// Rutas API y Admin
app.use('/api', apiRouter);
app.use('/admin/login', loginRouter);
// Ruta protegida con middleware 'secured'
app.use('/admin/novedades', secured, adminNovedadesRouter); 

/* MANEJO DE ERRORES */

// CATCH 404
app.use(function(req, res, next) {
  next(createError(404));
});

// MANEJO GENERAL DE ERRORES
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;