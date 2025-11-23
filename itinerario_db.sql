-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2025 a las 21:57:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `itinerario_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text DEFAULT NULL,
  `cuerpo` text DEFAULT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(3, 'Inauguración', 'Nueva sección de novedades.', 'Acá se verán las últimas actualizaciones.', 'fnqkqnctzns6xy9xskms'),
(4, 'Descuentos de Verano', 'Aprovecha un 20% OFF', 'Durante todo el mes de enero tendremos descuentos especiales en todos nuestros planes de viaje.', NULL),
(5, 'Lanzamiento de la App', 'Lleva tu itinerario en el bolsillo', 'Ya puedes descargar nuestra aplicación móvil disponible para iOS y Android.', NULL),
(6, '¡Nuevas funcionalidades en camino!', 'Próximamente: Itinerario Teams', 'Conocerás una nueva herramienta para mejorar el desempeño de tu equipo y organizar mejor su tiempo de trabajo.', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `priority` varchar(10) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `category` varchar(50) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id`, `title`, `description`, `date`, `time`, `priority`, `status`, `category`, `user_id`) VALUES
(1, 'Prueba de tarea', 'Probando creación de tarea.', '2025-11-11', '10:00:00', 'medium', 0, 'personal', 1),
(3, 'Probando 3', 'Probando tercera tarea', '2025-11-11', '14:00:00', 'high', 0, 'work', 1),
(5, 'Subida de cambios', 'Revisar y terminar de subir los cambios de la aplicación', '2025-11-23', '13:00:00', 'medium', 0, 'study', 1),
(6, 'Comprar pasajes', 'Buscar vuelos baratos a Bariloche', '2025-12-01', '10:00:00', 'high', 0, 'personal', 1),
(7, 'Reunión de equipo', 'Presentar avances del proyecto final', '2025-12-02', '14:30:00', 'high', 0, 'work', 1),
(8, 'Ir al gimnasio', 'Día de piernas', '2025-12-03', '18:00:00', 'medium', 1, 'health', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'santiago', '21232f297a57a5a743894a0e4a801fc3'),
(2, 'admin', 'c93ccd78b2076528346216b3b2f701e6');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
