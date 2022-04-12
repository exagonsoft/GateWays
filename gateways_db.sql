-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2022 at 01:58 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gateways_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `gate_ways`
--

CREATE TABLE `gate_ways` (
  `id` int(11) NOT NULL,
  `ipaddress` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `serialnumber` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gate_ways`
--

INSERT INTO `gate_ways` (`id`, `ipaddress`, `name`, `serialnumber`) VALUES
(1, '192.168.137.1', 'ExagonSoft Central', 'X3VO5L'),
(4, '192.168.137.5', 'Exagon 1st plant', '6O63R'),
(5, '1.1.1.1', 'Exagon', 'EL6336'),
(6, '192.168.137.21', 'ExagonSoft Mian', 'RRV5V5');

-- --------------------------------------------------------

--
-- Table structure for table `peripherals`
--

CREATE TABLE `peripherals` (
  `id` int(11) NOT NULL,
  `cratedate` varchar(255) DEFAULT NULL,
  `gatewayid` int(11) NOT NULL,
  `idnumber` int(11) NOT NULL,
  `status` bit(1) DEFAULT NULL,
  `vendor` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `peripherals`
--

INSERT INTO `peripherals` (`id`, `cratedate`, `gatewayid`, `idnumber`, `status`, `vendor`) VALUES
(1, '12/3/2022', 4, 1697102, b'1', 'Exacore'),
(2, '12/3/2022', 4, 885869, b'0', 'Exacore Van'),
(5, '13/3/2022', 6, 704310, b'1', 'Exacore'),
(6, '13/3/2022', 1, 7150410, b'1', 'ExaCore'),
(7, '13/3/2022', 1, 4310928, b'0', 'Accios'),
(8, '13/3/2022', 1, 680362, b'1', 'Binniling'),
(9, '13/3/2022', 1, 853184, b'0', 'Kisersa'),
(10, '13/3/2022', 1, 1052812, b'0', 'Kinnlink'),
(11, '13/3/2022', 1, 1041341, b'1', 'Lumina'),
(12, '13/3/2022', 1, 9491097, b'0', 'SprinField'),
(13, '13/3/2022', 1, 127055, b'0', 'Lumina'),
(14, '13/3/2022', 1, 3102262, b'1', 'MiSSaCord'),
(15, '13/3/2022', 1, 662261, b'0', 'Geneva'),
(16, '13/3/2022', 5, 855263, b'1', 'ExaCore'),
(17, '13/3/2022', 6, 3104681, b'0', 'Cambria');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gate_ways`
--
ALTER TABLE `gate_ways`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `peripherals`
--
ALTER TABLE `peripherals`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gate_ways`
--
ALTER TABLE `gate_ways`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `peripherals`
--
ALTER TABLE `peripherals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;


--
-- Metadata
--
USE `phpmyadmin`;

--
-- Metadata for table gate_ways
--

--
-- Metadata for table peripherals
--

--
-- Metadata for database gateways_db
--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
