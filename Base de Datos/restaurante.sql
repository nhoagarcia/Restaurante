--Comentarios tablamenu para introducir la edicion de los platos por menu:
--ahora vamos a la base de datos yleemos todos los registros de la tabla que relaciona
-- poatos y menus usando como codido el menu" 
-- monto por dom o ineerhtml la tabla de platos asociados al menu
-- muestro la tabla


-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-01-2023 a las 10:01:19
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `restaurante`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alergenos`
--

CREATE TABLE `alergenos` (
  `CodAlergeno` int(11) NOT NULL,
  `Descripcion` varchar(250) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `alergenos`
--

INSERT INTO `alergenos` (`CodAlergeno`, `Descripcion`) VALUES
(5, 'Gluten'),
(6, 'pescado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `Nombre` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `Apellidos` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `Contraseña` varchar(6) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha_nacimiento` date NOT NULL,
  `Email` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `Telefono` varchar(11) COLLATE utf8_spanish2_ci NOT NULL,
  `Direccion` varchar(25) COLLATE utf8_spanish2_ci NOT NULL,
  `DNI` varchar(9) COLLATE utf8_spanish2_ci NOT NULL,
  `Rol` enum('admin','user') COLLATE utf8_spanish2_ci NOT NULL,
  `Puntos` varchar(5) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`Nombre`, `Apellidos`, `Contraseña`, `Fecha_nacimiento`, `Email`, `Telefono`, `Direccion`, `DNI`, `Rol`, `Puntos`) VALUES
('Adrián', 'Lorente Izquierdo', '123456', '1998-05-01', 'adrian@gmail.com', '666666666', 'Calle Huertas', '20499772X', 'user', '5'),
('francisco javier', 'muñoz lopez', '123456', '2023-01-11', 'franciscojaviml@hotmail.com', '680235216', 'casa', '06226521F', 'user', '1'),
('Sergio', 'Márquez', '456789', '2022-12-16', 'm@gmail.com', '666666666', 'C_Maria', '70422699B', 'user', '1'),
('Paco', 'Muñoz', '123456', '2022-04-01', 'paco@gmail.com', '666666666', 'C Valeras, 22', '06226521F', 'user', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menus`
--

CREATE TABLE `menus` (
  `CodMenu` int(11) NOT NULL,
  `PrecioMenu` decimal(4,2) NOT NULL,
  `TipoMenu` varchar(15) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `menus`
--

INSERT INTO `menus` (`CodMenu`, `PrecioMenu`, `TipoMenu`) VALUES
(1, '11.00', 'Del día'),
(2, '9.00', 'Especial');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos`
--

CREATE TABLE `platos` (
  `CodPlato` int(11) NOT NULL,
  `Nombre` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(250) COLLATE utf8_spanish2_ci NOT NULL,
  `PrecioPlato` decimal(4,2) NOT NULL,
  `TipoProducto` enum('primero','segundo','postre','bebida') COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `platos`
--

INSERT INTO `platos` (`CodPlato`, `Nombre`, `Descripcion`, `PrecioPlato`, `TipoProducto`) VALUES
(1, 'Pizza margherita', 'La más simple y tradicional de las pizzas: tomate frito, mozzarella y un chorrito de aceite.', '7.00', 'primero'),
(7, 'Pasta al pesto', 'pasta al pesto tradicional cuya salsa se compone de ingredientes completamente frescos', '9.00', 'segundo'),
(9, 'Risoto', 'La mezcla perfecta de un arroz cremoso, Parmiggiano Reggiano y setas de temporada', '11.00', 'primero');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos_alergenos`
--

CREATE TABLE `platos_alergenos` (
  `CodPlato_a` int(11) NOT NULL,
  `CodAlergeno_a` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos_menu`
--

CREATE TABLE `platos_menu` (
  `CodPlato_r` int(11) NOT NULL,
  `CodMenu_r` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alergenos`
--
ALTER TABLE `alergenos`
  ADD PRIMARY KEY (`CodAlergeno`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`Email`);

--
-- Indices de la tabla `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`CodMenu`);

--
-- Indices de la tabla `platos`
--
ALTER TABLE `platos`
  ADD PRIMARY KEY (`CodPlato`);

--
-- Indices de la tabla `platos_alergenos`
--
ALTER TABLE `platos_alergenos`
  ADD PRIMARY KEY (`CodPlato_a`,`CodAlergeno_a`),
  ADD KEY `CodAlergeno_a` (`CodAlergeno_a`);

--
-- Indices de la tabla `platos_menu`
--
ALTER TABLE `platos_menu`
  ADD PRIMARY KEY (`CodPlato_r`,`CodMenu_r`),
  ADD KEY `CodMenu_r` (`CodMenu_r`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `menus`
--
ALTER TABLE `menus`
  MODIFY `CodMenu` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `platos`
--
ALTER TABLE `platos`
  MODIFY `CodPlato` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1314;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `platos_alergenos`
--
ALTER TABLE `platos_alergenos`
  ADD CONSTRAINT `platos_alergenos_ibfk_1` FOREIGN KEY (`CodAlergeno_a`) REFERENCES `alergenos` (`CodAlergeno`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `platos_alergenos_ibfk_2` FOREIGN KEY (`CodPlato_a`) REFERENCES `platos` (`CodPlato`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `platos_menu`
--
ALTER TABLE `platos_menu`
  ADD CONSTRAINT `platos_menu_ibfk_1` FOREIGN KEY (`CodMenu_r`) REFERENCES `menus` (`CodMenu`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `platos_menu_ibfk_2` FOREIGN KEY (`CodPlato_r`) REFERENCES `platos` (`CodPlato`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
