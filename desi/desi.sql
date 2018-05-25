-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2018 at 09:59 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `desi`
--

-- --------------------------------------------------------

--
-- Table structure for table `profit`
--

CREATE TABLE `profit` (
  `id` int(10) NOT NULL,
  `cgold` varchar(3) NOT NULL,
  `crbm` varchar(1000) NOT NULL,
  `cgir` varchar(10) NOT NULL,
  `rgold` varchar(10) NOT NULL,
  `rrbm` varchar(10) NOT NULL,
  `rgir` varchar(10) NOT NULL,
  `oreo` varchar(30) NOT NULL,
  `choc` varchar(15) NOT NULL,
  `mag` varchar(44) NOT NULL,
  `lassi` varchar(20) NOT NULL,
  `dahi` varchar(20) NOT NULL,
  `paneer` varchar(20) NOT NULL,
  `profit` varchar(200) NOT NULL,
  `ice` varchar(20) NOT NULL,
  `milk` varchar(20) NOT NULL,
  `bi` varchar(20) NOT NULL,
  `total` varchar(20) NOT NULL,
  `date` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `profit`
--

INSERT INTO `profit` (`id`, `cgold`, `crbm`, `cgir`, `rgold`, `rrbm`, `rgir`, `oreo`, `choc`, `mag`, `lassi`, `dahi`, `paneer`, `profit`, `ice`, `milk`, `bi`, `total`, `date`) VALUES
(34, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0', ''),
(35, '1', '0', '0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '39', '20', '8', '11', '39', '2018-05-25'),
(36, '1', '0', '0', '1', '2', '0', '2', '0', '0', '0', '1', '1', '70', '20', '18', '32', '70', '2018-05-26'),
(37, '1', '1', '1', '0', '0', '0', '1', '1', '1', '0', '2', '1', '98', '30', '29', '39', '98', '2018-05-27'),
(38, '0', '6', '0', '0', '4', '4', '1', '2', '1', '3', '0', '0', '151', '38', '80', '33', '151', '2018-05-28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `profit`
--
ALTER TABLE `profit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `profit`
--
ALTER TABLE `profit`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
