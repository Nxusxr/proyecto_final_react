// /back/app.js (VERSIÓN FINAL Y ORDENADA)

require('dotenv').config(); // 1. CARGA DE VARIABLES DE ENTORNO

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); // Para permitir conexión desde Next.js (3000)
var session = require('express-session');

// REQUIRES DE RUTAS
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var loginRouter = require('./routes/admin/login');
var adminNovedadesRouter = require('./routes/admin/novedades');

var app = express();

// CONFIGURACIÓN DE VISTAS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// ====================================================================
// 2. MIDDLEWARE GLOBAL (El orden es CRÍTICO: Primero procesar el request)
// ====================================================================

// 2a. CORS: Debe ir primero si la app es consumida por otro origen
app.use(cors({
    origin: 'http://localhost:3000' 
}));

// 2b. LOGGER (Morgan)
app.use(logger('dev'));

// 2c. BODY PARSERS: Es fundamental que estos se ejecuten antes de las rutas que usan req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 2d. COOKIES y SESIÓN: Necesario para que req.session exista
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// 2e. Contenido Estático
app.use(express.static(path.join(__dirname, 'public')));


// ====================================================================
// 3. MIDDLEWARE PERSONALIZADO (Definición del 'secured')
// ====================================================================

var secured = async (req, res, next) => { // Lógica de tu curso
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


// ====================================================================
// 4. ASIGNACIÓN DE RUTAS (Una sola vez, las rutas específicas primero)
// ====================================================================

// Rutas API y Admin (tus rutas del proyecto)
app.use('/api', apiRouter);
app.use('/admin/login', loginRouter);
// Ruta protegida con middleware 'secured'
app.use('/admin/novedades', secured, adminNovedadesRouter); 

// Rutas de plantilla (pueden ser omitidas si solo usas el front de Next.js)
app.use('/', indexRouter);
app.use('/users', usersRouter);


// ====================================================================
// 5. MANEJO DE ERRORES (Al final)
// ====================================================================

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;