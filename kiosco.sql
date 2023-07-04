-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2023 a las 16:06:10
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kiosco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallefactura`
--

CREATE TABLE `detallefactura` (
  `id` int(11) NOT NULL,
  `productoId` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `monto` int(11) DEFAULT NULL,
  `facturaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detallefactura`
--

INSERT INTO `detallefactura` (`id`, `productoId`, `cantidad`, `monto`, `facturaId`) VALUES
(6, 4, 2, 460, 7),
(45, 4, 3, 690, 24),
(61, 4, 2, 460, 33),
(62, 7, 1, 200, 33),
(63, 4, 2, 460, 34),
(64, 5, 2, 500, 34),
(65, 6, 3, 1050, 34),
(66, 4, 3, 690, 35),
(67, 7, 4, 800, 35),
(68, 5, 4, 1000, 36),
(69, 5, 4, 1000, 37),
(70, 4, 1, 230, 38),
(71, 5, 2, 500, 38),
(72, 4, 3, 690, 39),
(73, 5, 4, 1000, 39),
(74, 7, 1, 200, 39),
(75, 4, 2, 460, 40),
(76, 7, 3, 600, 40),
(77, 5, 1, 250, 40),
(78, 4, 2, 460, 41),
(79, 5, 1, 250, 41),
(80, 4, 1, 230, 41);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `id` int(11) NOT NULL,
  `fecha` varchar(20) DEFAULT NULL,
  `formaPagoId` int(11) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `fecha`, `formaPagoId`, `descuento`) VALUES
(7, '2023-02-22', 1, 0),
(24, '23/2/2023', 1, 0),
(32, '24/2/2023', 1, 0),
(33, '24/2/2023', 1, 0),
(34, '24/2/2023', 1, 0),
(35, '24/2/2023', 1, 0),
(36, '24/2/2023', 1, 10),
(37, '24/2/2023', 3, 10),
(38, '24/2/2023', 1, NULL),
(39, '26/2/2023', 1, 15),
(40, '14/3/2023', 3, 15),
(41, '16/3/2023', 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formadepago`
--

CREATE TABLE `formadepago` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(20) DEFAULT NULL,
  `interes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `formadepago`
--

INSERT INTO `formadepago` (`id`, `descripcion`, `interes`) VALUES
(1, 'Tarjeta', 15),
(3, 'Contado', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`) VALUES
(4, 'Pepsi2L', 230),
(5, 'Coca2L', 250),
(6, 'Quilmes1L', 350),
(7, 'Manaos2L', 200);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detallefactura`
--
ALTER TABLE `detallefactura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productoId` (`productoId`),
  ADD KEY `facturaId` (`facturaId`) USING BTREE;

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `formaPagoId` (`formaPagoId`);

--
-- Indices de la tabla `formadepago`
--
ALTER TABLE `formadepago`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detallefactura`
--
ALTER TABLE `detallefactura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `formadepago`
--
ALTER TABLE `formadepago`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detallefactura`
--
ALTER TABLE `detallefactura`
  ADD CONSTRAINT `detallefactura_ibfk_1` FOREIGN KEY (`productoId`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `detallefactura_ibfk_2` FOREIGN KEY (`facturaId`) REFERENCES `factura` (`id`);

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `factura_ibfk_1` FOREIGN KEY (`formaPagoId`) REFERENCES `formadepago` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
