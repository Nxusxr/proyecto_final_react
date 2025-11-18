// /back/routes/api.js
require('dotenv').config();
var express = require('express');
var router = express.Router();
var tareasModel = require('../models/tareasModel');
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET - Listar todas las tareas (Filtrado por user_id) */
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

/* POST - Agregar una nueva tarea (Añadiendo user_id) */
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

/* DELETE - Eliminar una tarea por ID (Validando user_id) */
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

/* PUT - Modificar/Actualizar una tarea por ID (Validando user_id) */
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

/*
 * GET - Listar todas las Novedades (Público)
 * Basado en M6U3
 */
router.get('/novedades', async function(req, res, next) {
    try {
        let novedades = await novedadesModel.getNovedades();

        // Mapeamos para agregar la URL de la imagen
        novedades = novedades.map(novedad_item => {
            if (novedad_item.img_id) {
                const imagen = cloudinary.url(novedad_item.img_id, { 
                    width: 960,
                    crop: 'scale'
                });
                return {
                    ...novedad_item, // (id, titulo, subtitulo, cuerpo)
                    imagen // Se agrega la URL de la imagen
                }
            } else {
                return {
                    ...novedad_item,
                    imagen: '' // Si no hay imagen, un string vacío
                }
            }
        });

        res.json(novedades);
    
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener las novedades' });
    }
});

module.exports = router;