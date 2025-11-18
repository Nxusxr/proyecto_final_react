// /back/routes/admin/novedades.js
var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload); // [cite: 2021]
const destroy = util.promisify(cloudinary.uploader.destroy); // [cite: 2144]

/*
 * GET: Listado de novedades
 */
router.get('/', async function (req, res, next) {
    var novedades = await novedadesModel.getNovedades();
    
    // M6U3 - Mapeo para incluir la imagen [cite: 2062-2081]
    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return {
                ...novedad,
                imagen: '' // Si no hay img_id, manda un string vacío
            }
        }
    });

    res.render('admin/novedades', {
        layout: 'admin/layout',
        usuario: req.session.nombre,
        novedades
    });
});

/*
 * GET: Muestra el formulario de alta
 */
router.get('/agregar', (req, res, next) => { // [cite: 998]
    res.render('admin/agregar', { // [cite: 999]
        layout: 'admin/layout' // [cite: 1000]
    });
});

/*
 * POST: Procesa el alta
 */
router.post('/agregar', async (req, res, next) => {
    try {
        var img_id = ''; // [cite: 2031]
        
        // M6U3 - Lógica de subida de imagen [cite: 2032-2035]
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "") {
            var obj = {
                titulo: req.body.titulo,
                subtitulo: req.body.subtitulo,
                cuerpo: req.body.cuerpo,
                img_id
            };

            await novedadesModel.insertNovedad(obj);
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'Todos los campos son requeridos'
            });
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'No se cargo la novedad'
        });
    }
});

/*
 * GET: Eliminar novedad
 */
router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;

    // M6U3 - Borrar imagen de Cloudinary [cite: 2181-2183]
    let novedad = await novedadesModel.getNovedadById(id);
    if (novedad.img_id) {
        await (destroy(novedad.img_id));
    }
    
    await novedadesModel.deleteNovedadById(id);
    res.redirect('/admin/novedades')
});

/*
 * GET: Muestra el formulario de modificar
 */
router.get('/modificar/:id', async (req, res, next) => { // [cite: 2952]
    let id = req.params.id; // [cite: 2953]
    let novedad = await novedadesModel.getNovedadById(id); // [cite: 2954]
    res.render('admin/modificar', { // [cite: 2954]
        layout: 'admin/layout',
        novedad // [cite: 2957]
    });
});

/*
 * POST: Procesa la modificación
 */
router.post('/modificar', async (req, res, next) => {
    try {
        // M6U3 - Lógica de modificación de imagen [cite: 2147-2161]
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;

        if (req.body.img_delete === "1") { // [cite: 2148]
            img_id = null;
            borrar_img_vieja = true; // [cite: 2150]
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id; // [cite: 2156-2157]
                borrar_img_vieja = true; // [cite: 2158]
            }
        }
        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original)); // [cite: 2159-2160]
        }

        // Preparamos el objeto para el modelo [cite: 2168-2171]
        let obj = {
            titulo: req.body.titulo,
            subtitulo: req.body.subtitulo,
            cuerpo: req.body.cuerpo,
            img_id // Incluimos el nuevo img_id (o null, o el original)
        }
        
        await novedadesModel.modificarNovedadById(obj, req.body.id);
        res.redirect('/admin/novedades');

    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true, message: 'No se modifico la novedad'
        })
    }
});

module.exports = router;