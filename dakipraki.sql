-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2021 at 10:05 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dakipraki`
--

-- --------------------------------------------------------

--
-- Table structure for table `candidatos`
--

CREATE TABLE `candidatos` (
  `id` int(11) NOT NULL,
  `encomenda_id` int(11) NOT NULL,
  `candidato_id` int(11) NOT NULL,
  `aprovado` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `candidatos`
--

INSERT INTO `candidatos` (`id`, `encomenda_id`, `candidato_id`, `aprovado`, `createdAt`, `updatedAt`) VALUES
(1, 1, 6, 1, '2021-11-22 08:47:07', '2021-11-22 08:59:06'),
(2, 2, 6, 0, '2021-11-22 08:47:42', '2021-11-22 08:47:42');

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`id`, `descricao`, `createdAt`, `updatedAt`) VALUES
(1, 'Descrição A', '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(2, 'Descrição B', '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(3, 'Descrição C', '2021-11-18 09:42:23', '2021-11-18 09:42:23');

-- --------------------------------------------------------

--
-- Table structure for table `distritos`
--

CREATE TABLE `distritos` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `provincia_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `distritos`
--

INSERT INTO `distritos` (`id`, `nome`, `codigo`, `provincia_id`, `createdAt`, `updatedAt`) VALUES
(1, 'KaMpfumo', '1101', 11, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(2, 'Nlhamankulu', '1102', 11, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(3, 'KaMaxaquene', '1103', 11, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(4, 'KaMavota', '1104', 11, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(5, 'KaMubukwana', '1105', 11, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(6, 'Khatembe', '1106', 11, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(7, 'Kanyaka', '1107', 11, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(8, 'C. Matola', '1001', 10, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(9, 'Boane', '1002', 10, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(10, 'Magude', '1003', 10, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(11, 'Manhiça', '1004', 10, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(12, 'Marracuene', '1005', 10, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(13, 'Matutuine', '1006', 10, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(14, 'Moamba', '1007', 10, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(15, 'Namaacha', '1008', 10, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(16, 'C. Xai-xai', '0901', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(17, 'Bilene - Macia', '0902', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(18, 'Chibuto', '0903', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(19, 'Chicualacuala', '0904', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(20, 'Chigubo', '0905', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(21, 'Chókwè', '0906', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(22, 'Guijá', '0907', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(23, 'Mabalane', '0908', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(24, 'Manjacaze', '0909', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(25, 'Massangena', '0910', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(26, 'Massingir', '0911', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(27, 'Xai-xai', '0912', 9, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(28, 'C. Inhambane', '0801', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(29, 'Funhal Ouro', '0802', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(30, 'Govuro', '803', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(31, 'Homoine', '0804', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(32, 'Inharrime', '0805', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(33, 'Inhassoro', '0806', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(34, 'Jangamo', '0807', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(35, 'Mabote', '0808', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(36, 'Massinga', '0809', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(37, 'C. Maxixe', '0810', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(38, 'Morrubene', '0811', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(39, 'Panda', '0812', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(40, 'Vilankulo', '0813', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(41, 'Zavala', '0814', 8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(42, 'C. Beira', '0701', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(43, 'Búzi', '0702', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(44, 'Caia', '0703', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(45, 'Chemba', '0704', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(46, 'Cheringoma', '0705', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(47, 'Chibabava', '0706', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(48, 'Dondo', '0707', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(49, 'Gorongosa', '0708', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(50, 'Machanga', '0709', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(51, 'Maringué', '0710', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(52, 'Marromeu', '0711', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(53, 'Muanza', '0712', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(54, 'Nhamatanda', '0713', 7, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(55, 'Bárue', '0602', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(56, 'C. Chimoio', '0601', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(57, 'Gondola', '0603', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(58, 'Guro', '0604', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(59, 'Machaze', '0605', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(60, 'Macossa', '0606', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(61, 'Manica', '0607', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(62, 'Mossurize', '0608', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(63, 'Sussundenga', '0609', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(64, 'Tambara', '0610', 6, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(65, 'Tete', '0501', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(66, 'Angónia', '0502', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(67, 'Cahora-Bassa', '0503', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(68, 'Changara', '0504', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(69, 'Chifunde', '0505', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(70, 'Chiuta', '0506', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(71, 'Macanga', '0507', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(72, 'Magoé', '0508', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(73, 'Marávia', '0509', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(74, 'Moatize', '0510', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(75, 'Mutarara', '0511', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(76, 'Tsangano', '0512', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(77, 'Zumbo', '0513', 5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(78, 'Quelimane', '0401', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(79, 'Alto Molócue', '0402', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(80, 'Chinde', '0403', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(81, 'Gile', '0404', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(82, 'Gorué', '0405', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(83, 'Ile', '0406', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(84, 'Inhassungue', '0407', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(85, 'Lugela', '0408', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(86, 'Manganja da Costa', '0409', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(87, 'Milange', '0410', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(88, 'Mocuba', '0411', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(89, 'Mopeia', '0412', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(90, 'Morrumbala', '0413', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(91, 'Namacurra', '0414', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(92, 'Namaroi', '0415', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(93, 'Nicoadala', '0416', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(94, 'Pebane', '0417', 4, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(95, 'Nampula', '0301', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(96, 'Angoche', '0302', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(97, 'Eráti', '0303', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(98, 'Ilha de Moçambique', '0304', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(99, 'Lalaua', '0305', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(100, 'Malema', '0306', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(101, 'Meconta', '0307', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(102, 'Mecubúri', '0308', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(103, 'Memba', '0309', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(104, 'Mogincual', '0310', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(105, 'Mogovolas', '0311', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(106, 'Moma', '0312', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(107, 'Monapo', '0313', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(108, 'Mossuril', '0314', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(109, 'Muecate', '0315', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(110, 'Murrupula', '0316', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(111, 'Nacala-porto', '0317', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(112, 'Nacala-velha', '0318', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(113, 'Nacarôa', '0319', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(114, 'Rapale-Nampula', '0320', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(115, 'Ribaué', '0321', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(116, 'Pemba', '0201', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(117, 'Ancuabe', '0202', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(118, 'Balama', '0203', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(119, 'Chiúre', '0204', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(120, 'Ibo', '0205', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(121, 'Macomia', '0206', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(122, 'Mecúfi', '0207', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(123, 'Meluco', '0208', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(124, 'Mocímboa da Praia', '0209', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(125, 'Montepuez', '0210', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(126, 'Mueda', '0211', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(127, 'Mudumbe', '0212', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(128, 'Namuno', '0213', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(129, 'Nangade', '0214', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(130, 'Palma', '0215', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(131, 'Pemba-Metuge', '0216', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(132, 'Quissanga', '0217', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(133, 'Cidade de Lichinga', '0101', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(134, 'Cuamba', '0102', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(135, 'Lago', '0103', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(136, 'Lichinga', '0104', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(137, 'Majune', '0105', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(138, 'Mandimba', '0106', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(139, 'Marrupa', '0107', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(140, 'Maúa', '0108', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(141, 'Mavago', '0109', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(142, 'Mecanhelas', '0110', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(143, 'Mecula', '0111', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(144, 'Metarica', '0112', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(145, 'Muembe', '0113', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(146, 'N\'Gauma', '0114', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(147, 'Nipepe', '0115', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(148, 'Sanga', '0116', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23');

-- --------------------------------------------------------

--
-- Table structure for table `encomenda`
--

CREATE TABLE `encomenda` (
  `id` int(11) NOT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `peso` float DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `endereco_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `pessoa_id` int(11) NOT NULL,
  `receptor_id` int(11) NOT NULL,
  `descricao` text NOT NULL,
  `atribuida` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `provinciaProv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `encomenda`
--

INSERT INTO `encomenda` (`id`, `codigo`, `peso`, `preco`, `endereco_id`, `categoria_id`, `pessoa_id`, `receptor_id`, `descricao`, `atribuida`, `createdAt`, `updatedAt`, `provinciaProv`) VALUES
(1, '105293', 0.5, 745.5, 3, 1, 1, 5, 'Descrição 2', 0, '2021-11-22 08:06:23', '2021-11-22 08:06:23', 11),
(2, '2102', 0.5, 745.5, 8, 1, 2, 11, 'Descrição 2', 0, '2021-11-22 08:45:00', '2021-11-22 08:45:00', 11);

-- --------------------------------------------------------

--
-- Table structure for table `endereco`
--

CREATE TABLE `endereco` (
  `id` int(11) NOT NULL,
  `avenida` varchar(255) DEFAULT NULL,
  `rua` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `distrito_id` int(11) NOT NULL,
  `provincia_id` int(11) NOT NULL,
  `encomenda` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `endereco`
--

INSERT INTO `endereco` (`id`, `avenida`, `rua`, `bairro`, `distrito_id`, `provincia_id`, `encomenda`, `createdAt`, `updatedAt`) VALUES
(3, NULL, NULL, 'Bairro 2', 56, 4, 1, '2021-11-22 08:06:23', '2021-11-22 08:06:23'),
(5, NULL, NULL, 'Bairro 1', 79, 4, 0, '2021-11-22 08:37:23', '2021-11-22 08:37:23'),
(8, NULL, NULL, 'Bairro 2', 86, 4, 1, '2021-11-22 08:44:59', '2021-11-22 08:44:59');

-- --------------------------------------------------------

--
-- Table structure for table `pessoa`
--

CREATE TABLE `pessoa` (
  `id` int(11) NOT NULL,
  `nome` varchar(200) DEFAULT NULL,
  `apelido` varchar(200) DEFAULT NULL,
  `contato` varchar(15) NOT NULL,
  `sexo` varchar(255) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `senha` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pessoa`
--

INSERT INTO `pessoa` (`id`, `nome`, `apelido`, `contato`, `sexo`, `email`, `senha`, `createdAt`, `updatedAt`) VALUES
(1, 'Encomendate1', 'Pessoa', '+258846461323', 'Masculino', 'encomendante1@gmail.com', '$2b$10$oQuURtGhC2CdG2buE.7Tfu0pwyhtu1cHB4vrRGcyJh6X6ylYKoKwy', '2021-11-17 11:02:04', '2021-11-17 11:02:04'),
(2, 'Encomendate2', 'Pessoa', '+258877054598', 'Masculino', 'encomendante2@gmail.com', '$2b$10$siXmQiyeRo2GP97fuGUBxePwdu/oxxuCo2N1iuBtynojq2aRkK72e', '2021-11-17 11:03:20', '2021-11-17 11:03:20'),
(3, 'Encomendate3', 'Pessoa', '+258823456789', 'Masculino', 'encomendante3@gmail.com', '$2b$10$i7xHBNoHBRh9SId/zVemmuTm70kKcuy/ROIeDbdLz9qA.b6kwqMca', '2021-11-17 11:03:58', '2021-11-17 11:03:58'),
(5, 'Ana', 'Mazile', '847654321', NULL, NULL, '$2b$10$Tpycll7TQi1TuspLWZxCEO5bWz.lMKJ7RSd3RaANLmOYBt.L5.pQC', '2021-11-22 08:06:23', '2021-11-22 08:06:23'),
(6, 'Viajante1', 'Vante', '+258833456789', 'Feminino', 'viajante1@gmail.com', '$2b$10$F0Pb8j7v06NTEQ4IUmjMnOpB8wXlVO0RovODB2xo5vgxjuqhY1GzW', '2021-11-22 08:11:57', '2021-11-22 08:11:57'),
(7, 'Viajante2', 'Manze', '+258853456789', 'Masculino', 'viajante2@gmail.com', '$2b$10$8WKeHW4V9wBOXiwnABndkuH3XrSWZXSPQyOuigbjLywTcxfRHe0By', '2021-11-22 08:13:43', '2021-11-22 08:13:43'),
(8, 'Viajante3', 'Bande', '+258863456789', 'Feminino', 'viajante3@gmail.com', '$2b$10$dAXbnEzG4MRiuR53GoYUNOUnZXd8gKrBLIPDaLfFK720baMPQanPi', '2021-11-22 08:13:53', '2021-11-22 08:13:53'),
(11, 'Anabela', 'Marta', '847654323', NULL, NULL, '$2b$10$3mWxfb53hkMW91ZlLn8kQ.9qVaIM6LHDSaX9oaeqD8SScfETAPP5W', '2021-11-22 08:44:59', '2021-11-22 08:44:59');

-- --------------------------------------------------------

--
-- Table structure for table `precos`
--

CREATE TABLE `precos` (
  `id` int(11) NOT NULL,
  `peso` float NOT NULL,
  `sul` float NOT NULL,
  `centro` float NOT NULL,
  `norte` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `precos`
--

INSERT INTO `precos` (`id`, `peso`, `sul`, `centro`, `norte`, `createdAt`, `updatedAt`) VALUES
(1, 0.5, 593.25, 672, 745.5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(2, 1, 655.2, 730.8, 814.8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(3, 1.5, 714, 798, 882, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(4, 2, 777, 850.5, 951.3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(5, 2.5, 840, 913.5, 1018.5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(6, 3, 896.7, 976.5, 1087.8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(7, 3.5, 955.5, 1033.2, 1155, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(8, 4, 1018.5, 1092, 1224.3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(9, 4.5, 1077.3, 1155, 1291.5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(10, 5, 1138.2, 1218, 1360.8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(11, 5.5, 1197, 1274.7, 1428, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(12, 6, 1260, 1333.5, 1495.2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(13, 6.5, 1323, 1396.5, 1564.2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(14, 7, 1379.7, 1459.5, 1633.8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(15, 7.5, 1438.5, 1516.2, 1701, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(16, 8, 1501.5, 1575, 1770.3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(17, 8.5, 1560, 1638.5, 1837.5, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(18, 9, 1621.2, 1696.8, 1906.8, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(19, 9.5, 1680, 1837.5, 1974, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(20, 10, 1753.5, 1974, 2043.3, '2021-11-18 09:42:23', '2021-11-18 09:42:23');

-- --------------------------------------------------------

--
-- Table structure for table `provincia`
--

CREATE TABLE `provincia` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `codigo` varchar(255) NOT NULL,
  `zona` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `provincia`
--

INSERT INTO `provincia` (`id`, `nome`, `codigo`, `zona`, `createdAt`, `updatedAt`) VALUES
(1, 'Niassa', '01', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(2, 'C. Delgado', '02', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(3, 'Nampula', '03', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(4, 'Zambézia', '04', 3, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(5, 'Tete', '05', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(6, 'Manica', '06', 2, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(7, 'Sofala', '07', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(8, 'Inhambane', '08', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(9, 'Gaza', '09', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(10, 'Maputo', '10', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23'),
(11, 'C. Maputo', '11', 1, '2021-11-18 09:42:23', '2021-11-18 09:42:23');

-- --------------------------------------------------------

--
-- Table structure for table `receptor`
--

CREATE TABLE `receptor` (
  `id` int(11) NOT NULL,
  `pessoa_id` int(11) NOT NULL,
  `encomendante` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `receptor`
--

INSERT INTO `receptor` (`id`, `pessoa_id`, `encomendante`, `createdAt`, `updatedAt`) VALUES
(2, 5, 1, '2021-11-22 08:06:23', '2021-11-22 08:06:23'),
(3, 11, 2, '2021-11-22 08:45:00', '2021-11-22 08:45:00');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20211005070322-create-provincia.js'),
('20211005070348-create-distritos.js'),
('20211022055158-create-categoria.js'),
('20211117134515-create-precos.js');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `dataNascimento` date DEFAULT NULL,
  `tipoDocumento` int(11) DEFAULT NULL,
  `nrDocumento` varchar(255) DEFAULT NULL,
  `codigo` varchar(255) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT 0,
  `endereco_id` int(11) DEFAULT NULL,
  `pessoa_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `dataNascimento`, `tipoDocumento`, `nrDocumento`, `codigo`, `estado`, `endereco_id`, `pessoa_id`, `createdAt`, `updatedAt`) VALUES
(1, '1998-11-03', 1, '123456789012A', NULL, 1, 1, 1, '2021-11-17 11:02:04', '2021-11-17 11:04:47'),
(2, '1998-11-03', 1, '123498765421A', NULL, 1, 2, 2, '2021-11-17 11:03:20', '2021-11-17 11:04:27'),
(3, '1998-11-03', 1, '876541234567A', NULL, 1, 3, 3, '2021-11-17 11:03:58', '2021-11-17 11:03:58'),
(4, '1998-11-12', 1, '0123487659014B', NULL, 1, 4, 6, '2021-11-22 08:11:57', '2021-11-22 08:11:57'),
(5, '1991-11-19', 1, '456789012346E', NULL, 1, 5, 7, '2021-11-22 08:13:43', '2021-11-22 08:13:43'),
(6, '2000-11-25', 1, '23981043986D', NULL, 1, 6, 8, '2021-11-22 08:13:53', '2021-11-22 08:13:53');

-- --------------------------------------------------------

--
-- Table structure for table `viagem`
--

CREATE TABLE `viagem` (
  `id` int(11) NOT NULL,
  `data_ida` date NOT NULL,
  `endereco_id` int(11) NOT NULL,
  `pessoa_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `viagem`
--

INSERT INTO `viagem` (`id`, `data_ida`, `endereco_id`, `pessoa_id`, `createdAt`, `updatedAt`) VALUES
(2, '2020-10-24', 5, 6, '2021-11-22 08:37:23', '2021-11-22 08:37:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `candidatos`
--
ALTER TABLE `candidatos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `descricao` (`descricao`),
  ADD UNIQUE KEY `descricao_2` (`descricao`);

--
-- Indexes for table `distritos`
--
ALTER TABLE `distritos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome` (`nome`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD UNIQUE KEY `nome_2` (`nome`),
  ADD UNIQUE KEY `codigo_2` (`codigo`);

--
-- Indexes for table `encomenda`
--
ALTER TABLE `encomenda`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pessoa`
--
ALTER TABLE `pessoa`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `contato` (`contato`),
  ADD UNIQUE KEY `contato_2` (`contato`),
  ADD UNIQUE KEY `contato_3` (`contato`),
  ADD UNIQUE KEY `contato_4` (`contato`),
  ADD UNIQUE KEY `contato_5` (`contato`),
  ADD UNIQUE KEY `contato_6` (`contato`),
  ADD UNIQUE KEY `contato_7` (`contato`),
  ADD UNIQUE KEY `contato_8` (`contato`),
  ADD UNIQUE KEY `contato_9` (`contato`),
  ADD UNIQUE KEY `contato_10` (`contato`),
  ADD UNIQUE KEY `contato_11` (`contato`),
  ADD UNIQUE KEY `contato_12` (`contato`),
  ADD UNIQUE KEY `contato_13` (`contato`),
  ADD UNIQUE KEY `contato_14` (`contato`),
  ADD UNIQUE KEY `contato_15` (`contato`),
  ADD UNIQUE KEY `contato_16` (`contato`),
  ADD UNIQUE KEY `contato_17` (`contato`),
  ADD UNIQUE KEY `contato_18` (`contato`),
  ADD UNIQUE KEY `contato_19` (`contato`),
  ADD UNIQUE KEY `contato_20` (`contato`),
  ADD UNIQUE KEY `contato_21` (`contato`),
  ADD UNIQUE KEY `contato_22` (`contato`),
  ADD UNIQUE KEY `contato_23` (`contato`),
  ADD UNIQUE KEY `contato_24` (`contato`),
  ADD UNIQUE KEY `contato_25` (`contato`),
  ADD UNIQUE KEY `contato_26` (`contato`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `email_9` (`email`),
  ADD UNIQUE KEY `email_10` (`email`),
  ADD UNIQUE KEY `email_11` (`email`),
  ADD UNIQUE KEY `email_12` (`email`),
  ADD UNIQUE KEY `email_13` (`email`),
  ADD UNIQUE KEY `email_14` (`email`),
  ADD UNIQUE KEY `email_15` (`email`),
  ADD UNIQUE KEY `email_16` (`email`),
  ADD UNIQUE KEY `email_17` (`email`),
  ADD UNIQUE KEY `email_18` (`email`),
  ADD UNIQUE KEY `email_19` (`email`),
  ADD UNIQUE KEY `email_20` (`email`),
  ADD UNIQUE KEY `email_21` (`email`),
  ADD UNIQUE KEY `email_22` (`email`),
  ADD UNIQUE KEY `email_23` (`email`),
  ADD UNIQUE KEY `email_24` (`email`),
  ADD UNIQUE KEY `email_25` (`email`),
  ADD UNIQUE KEY `email_26` (`email`),
  ADD UNIQUE KEY `email_27` (`email`);

--
-- Indexes for table `precos`
--
ALTER TABLE `precos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `peso` (`peso`),
  ADD UNIQUE KEY `peso_2` (`peso`);

--
-- Indexes for table `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome` (`nome`),
  ADD UNIQUE KEY `codigo` (`codigo`),
  ADD UNIQUE KEY `nome_2` (`nome`),
  ADD UNIQUE KEY `codigo_2` (`codigo`);

--
-- Indexes for table `receptor`
--
ALTER TABLE `receptor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nrDocumento` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_2` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_3` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_4` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_5` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_6` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_7` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_8` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_9` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_10` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_11` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_12` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_13` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_14` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_15` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_16` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_17` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_18` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_19` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_20` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_21` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_22` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_23` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_24` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_25` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_26` (`nrDocumento`),
  ADD UNIQUE KEY `nrDocumento_27` (`nrDocumento`);

--
-- Indexes for table `viagem`
--
ALTER TABLE `viagem`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `candidatos`
--
ALTER TABLE `candidatos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `distritos`
--
ALTER TABLE `distritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=297;

--
-- AUTO_INCREMENT for table `encomenda`
--
ALTER TABLE `encomenda`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `endereco`
--
ALTER TABLE `endereco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `pessoa`
--
ALTER TABLE `pessoa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `precos`
--
ALTER TABLE `precos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `provincia`
--
ALTER TABLE `provincia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `receptor`
--
ALTER TABLE `receptor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `viagem`
--
ALTER TABLE `viagem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
