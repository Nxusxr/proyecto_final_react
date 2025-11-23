// /back/routes/api.js
require('dotenv').config();
var express = require('express');
var router = express.Router();
var tareasModel = require('../models/tareasModel');
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

/* GET - Listar todas las tareas */
router.get('/tareas', async function(req, res, next) {
    try {
        const userId = req.session.id_usuario || 1;
        
        let tareas = await tareasModel.getTareas(userId);
        res.json(tareas); 
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
});

/* POST - Agregar una nueva tarea */
router.post('/tareas', async (req, res, next) => {
    try {
        const userId = req.session.id_usuario || 1;

        const payload = {
            ...req.body,
            user_id: userId
        };
        
        await tareasModel.insertTarea(payload);
        
        res.status(201).json({ status: 'ok', message: 'Tarea agregada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al agregar la tarea' });
    }
});

/* DELETE - Eliminar una tarea por ID */
router.delete('/tareas/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        const userId = req.session.id_usuario || 1;
        
        await tareasModel.deleteTarea(id, userId); 
        
        res.json({ status: 'ok', message: 'Tarea eliminada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
});

/* PUT - Modificar/Actualizar una tarea por ID */
router.put('/tareas/:id', async (req, res, next) => {
    try {
        let id = req.params.id;
        let obj = req.body;
        const userId = req.session.id_usuario || 1;

        await tareasModel.updateTarea(obj, id, userId);
        
        res.json({ status: 'ok', message: 'Tarea actualizada correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar la tarea' });
    }
});

/* GET - Listar todas las Novedades */
router.get('/novedades', async function(req, res, next) {
    try {
        let novedades = await novedadesModel.getNovedades();

        // Agregar la URL de la imagen
        novedades = novedades.map(novedad_item => {
            if (novedad_item.img_id) {
                const imagen = cloudinary.url(novedad_item.img_id, { 
                    width: 960,
                    crop: 'scale'
                });
                return {
                    ...novedad_item, // (id, titulo, subtitulo, cuerpo)
                    imagen
                }
            } else {
                return {
                    ...novedad_item,
                    imagen: ''
                }
            }
        });

        res.json(novedades);
    
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las novedades' });
    }
});

/* POST - Envío de formulario de contacto */
router.post('/contacto', async (req, res) => {
    const mail = {
        from: process.env.SMTP_USER,
        to: process.env.SMTP_TO,
        subject: 'Contacto Web',
        html: `${req.body.nombre} se contactó a través de la web y quiere más información a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.comentario} <br> Su tel es: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    try {
        await transport.sendMail(mail);
        res.status(201).json({
            error: false,
            message: 'Mensaje enviado'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: true,
            message: 'Error al enviar el mensaje'
        });
    }
});

module.exports = router;