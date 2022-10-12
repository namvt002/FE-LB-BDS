-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 12, 2022 at 03:33 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bds`
--

-- --------------------------------------------------------

--
-- Table structure for table `anh_bai_viet`
--

CREATE TABLE `anh_bai_viet` (
  `abv_id` int(11) NOT NULL,
  `abv_hinh` varchar(255) NOT NULL,
  `abv_iddv` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `anh_danh_muc`
--

CREATE TABLE `anh_danh_muc` (
  `adm_id` int(11) NOT NULL,
  `adm_hinh` varchar(300) NOT NULL,
  `adm_iddm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `anh_danh_muc`
--

INSERT INTO `anh_danh_muc` (`adm_id`, `adm_hinh`, `adm_iddm`) VALUES
(1, 'dm_hinhanh-1665480673584.png', 1),
(2, 'dm_hinhanh-1665480673585.webp', 1),
(3, 'dm_hinhanh-1665480730679.png', 2),
(4, 'dm_hinhanh-1665480730679.webp', 2),
(5, 'dm_hinhanh-1665480762277.png', 3),
(6, 'dm_hinhanh-1665480762277.webp', 3),
(7, 'dm_hinhanh-1665480787177.png', 4),
(8, 'dm_hinhanh-1665480787179.webp', 4),
(9, 'dm_hinhanh-1665480815680.png', 5),
(10, 'dm_hinhanh-1665480815680.webp', 5);

-- --------------------------------------------------------

--
-- Table structure for table `binh_luan`
--

CREATE TABLE `binh_luan` (
  `bl_id` int(11) NOT NULL,
  `bl_noidung` text NOT NULL,
  `bl_danhgia` int(11) DEFAULT NULL,
  `bl_thoigian` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `bl_trangthai` int(11) DEFAULT NULL,
  `kh_id` int(11) NOT NULL,
  `sp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `danh_muc`
--

CREATE TABLE `danh_muc` (
  `dm_id` int(11) NOT NULL,
  `dm_ten` varchar(250) NOT NULL,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `danh_muc`
--

INSERT INTO `danh_muc` (`dm_id`, `dm_ten`, `active`) VALUES
(1, 'Căn hộ', 1),
(2, 'Chung cư', 1),
(3, 'Nhà vườn', 1),
(4, 'Biệt thự', 1),
(5, 'Nhà phố', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hinh_anh`
--

CREATE TABLE `hinh_anh` (
  `ha_id` int(11) NOT NULL,
  `ha_hinh` varchar(250) NOT NULL,
  `ha_idsp` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hinh_anh`
--

INSERT INTO `hinh_anh` (`ha_id`, `ha_hinh`, `ha_idsp`) VALUES
(1, 'sp_hinhanh-1665481182685.webp', 1),
(2, 'sp_hinhanh-1665481182686.jpg', 1),
(3, 'sp_hinhanh-1665481182687.jpg', 1),
(4, 'sp_hinhanh-1665481182688.jpg', 1),
(5, 'sp_hinhanh-1665481529579.webp', 2),
(6, 'sp_hinhanh-1665481529581.jpg', 2),
(7, 'sp_hinhanh-1665481529585.jpg', 2),
(8, 'sp_hinhanh-1665481529587.jpg', 2),
(9, 'sp_hinhanh-1665482033735.webp', 3),
(10, 'sp_hinhanh-1665482033737.webp', 3),
(11, 'sp_hinhanh-1665482033741.webp', 3),
(12, 'sp_hinhanh-1665482033742.webp', 3),
(13, 'sp_hinhanh-1665482246626.png', 4),
(14, 'sp_hinhanh-1665482246639.jpg', 4),
(15, 'sp_hinhanh-1665482246642.jpg', 4),
(16, 'sp_hinhanh-1665482246645.jpg', 4),
(17, 'sp_hinhanh-1665482424429.png', 5),
(18, 'sp_hinhanh-1665482424432.jpg', 5),
(19, 'sp_hinhanh-1665482424433.jpg', 5),
(20, 'sp_hinhanh-1665482424434.jpg', 5);

-- --------------------------------------------------------

--
-- Table structure for table `nhan_vien`
--

CREATE TABLE `nhan_vien` (
  `nv_id` int(11) NOT NULL,
  `nv_ten` varchar(250) NOT NULL,
  `nv_email` varchar(250) NOT NULL,
  `nv_matkhau` varchar(100) NOT NULL,
  `nv_sdt` varchar(12) NOT NULL,
  `nv_namsinh` date NOT NULL,
  `nv_gioitinh` int(11) NOT NULL,
  `nv_trangthai` int(11) NOT NULL,
  `nv_hinhanh` varchar(250) NOT NULL,
  `q_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `quyen`
--

CREATE TABLE `quyen` (
  `q_id` int(11) NOT NULL,
  `q_ten` varchar(250) NOT NULL,
  `q_vaitro` varchar(250) DEFAULT NULL,
  `q_mota` text DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quyen`
--

INSERT INTO `quyen` (`q_id`, `q_ten`, `q_vaitro`, `q_mota`, `active`) VALUES
(1, 'USER', 'Người dùng', '', 1),
(2, 'ADMIN', 'Người quản lý', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `san_pham`
--

CREATE TABLE `san_pham` (
  `sp_id` int(11) NOT NULL,
  `sp_masp` varchar(255) NOT NULL,
  `sp_ten` varchar(150) NOT NULL,
  `sp_mota` longtext DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `sp_phongngu` int(11) DEFAULT NULL,
  `sp_phongwc` int(11) DEFAULT NULL,
  `sp_idtl` int(11) NOT NULL,
  `sp_idtg` int(11) NOT NULL,
  `sp_dientich` int(11) NOT NULL,
  `sp_huongnha` varchar(200) NOT NULL,
  `sp_diachi` varchar(500) NOT NULL,
  `sp_gia` float NOT NULL,
  `sp_iddm` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `san_pham`
--

INSERT INTO `san_pham` (`sp_id`, `sp_masp`, `sp_ten`, `sp_mota`, `active`, `sp_phongngu`, `sp_phongwc`, `sp_idtl`, `sp_idtg`, `sp_dientich`, `sp_huongnha`, `sp_diachi`, `sp_gia`, `sp_iddm`) VALUES
(1, '9963547852168', 'Cho thuê căn hộ, chung cư cao cấp', '<p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Căn hộ cao cấp Eurowindow River Park chính thức được tung ra thị trường. Chính sách siêu khủng gửi tặng khách hàng:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">1. Tặng 01 chỉ vàng cho 30 khách hàng đầu tiên đặt cọc đủ 50 triệu kể từ ngày 01/10.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">2. Tặng voucher nội thất 120 triệu/căn hộ 2PN; 150 triệu/căn hộ 3PN.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">3. Ngân hàng Techcombank hỗ trợ 70% giá trị căn hộ trong 25 năm. Miễn lãi và ân hạn nợ gốc trong vòng 12 tháng.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">4. Chiết khấu 4% GTCH cho khách hàng không sử dụng vốn vay từ ngân hàng.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">5. Chiết khấu 10% GTCH cho khách hàng thanh toán ngay 95% khi ký HĐMB.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Liên hệ: 0967 065 652 (Ms. Hiệu, quản lý kinh doanh).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Thông tin về căn hộ:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tên dự án: Eurowindow River Park.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Chủ đầu tư: Tập đoàn Eurowindow Holdings.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Vị trí dự án: Đông Hội, Đông Trù, Đông Anh, Hà Nội.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tổng diện tích dự án: 4,2ha.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Mật độ xây dựng: 40%.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Loại hình phát triển: Biệt thự, liền kề, shophouse và căn hộ cao cấp.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Quy mô dự án: Gồm 4 tòa chung cư, 65 lô biệt thự liền kề, 138 căn Shophouse, 99 căn office - tel.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Số lượng căn hộ: 2058 căn hộ chung cư cao cấp.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Cơ cấu diện tích căn hộ: 67m2 - 73m2 - 82m2 - 96m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đơn thị quản lý và phát triển: Eurowindow Holdings.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Bàn giao: Quý IV năm 2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Giá bán căn hộ: Từ 20 tr/m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tiện ích dự án:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Dự án Eurowindow River Park với hệ thống dịch vụ tiện ích đẳng cấp cao với bể bơi bốn mùa trong ngoài trời, trung tâm thương mại, khu dịch vụ Fitness spa và chăm sóc sắc đẹp, phòng tập gym, hệ thống nhà hàng, khu vui chơi dành cho mọi lứa tuổi, hệ thống nhà trẻ mầm non và trường liên cấp quốc tế,.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Mặt bằng và giá bán căn hộ:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Giá bán căn hộ dao động từ 20tr - 22tr/m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 67,6m2: 2PN 2WC: Giá từ 1,2 tỷ - 1,35 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 71,1m2 77,6m2: 2PN 2WC: Giá từ 1,5 tỷ - 1,6 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 81,2m2: 3PN 2WC: Giá từ 1,7tỷ - 1,8 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 96,4m2: 3PN 2WC: Giá từ 2 tỷ - 2,2 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tiến độ thanh toán linh hoạt:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đặt cọc: 50 triệu.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 1: 15% GTCH: Ký HĐMB (bao gồm 50tr đặt cọc).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 2: 15% GTCH: 30/11/2018.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 3: 10% GTCH: 30/01/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 4: 10% GTCH: 30/03/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 5: 10% GTCH: 30/05/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 6: 10% GTCH: 30/07/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 7: 25% GTCH: Nhận bàn giao căn hộ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 8: 5% GTCH: Bàn giao sổ hồng.</span></p>', 1, 3, 2, 1, 1, 175, 'Đông Nam', 'Yên Xá Phúc La Hà Đông Hà Nội', 24000000, 1),
(2, '98441616165998', 'Bán chung cư Sunshine Riverside Tây Hồ', '<p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Căn hộ cao cấp Eurowindow River Park chính thức được tung ra thị trường. Chính sách siêu khủng gửi tặng khách hàng:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">1. Tặng 01 chỉ vàng cho 30 khách hàng đầu tiên đặt cọc đủ 50 triệu kể từ ngày 01/10.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">2. Tặng voucher nội thất 120 triệu/căn hộ 2PN; 150 triệu/căn hộ 3PN.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">3. Ngân hàng Techcombank hỗ trợ 70% giá trị căn hộ trong 25 năm. Miễn lãi và ân hạn nợ gốc trong vòng 12 tháng.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">4. Chiết khấu 4% GTCH cho khách hàng không sử dụng vốn vay từ ngân hàng.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">5. Chiết khấu 10% GTCH cho khách hàng thanh toán ngay 95% khi ký HĐMB.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Liên hệ: 0967 065 652 (Ms. Hiệu, quản lý kinh doanh).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Thông tin về căn hộ:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tên dự án: Eurowindow River Park.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Chủ đầu tư: Tập đoàn Eurowindow Holdings.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Vị trí dự án: Đông Hội, Đông Trù, Đông Anh, Hà Nội.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tổng diện tích dự án: 4,2ha.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Mật độ xây dựng: 40%.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Loại hình phát triển: Biệt thự, liền kề, shophouse và căn hộ cao cấp.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Quy mô dự án: Gồm 4 tòa chung cư, 65 lô biệt thự liền kề, 138 căn Shophouse, 99 căn office - tel.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Số lượng căn hộ: 2058 căn hộ chung cư cao cấp.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Cơ cấu diện tích căn hộ: 67m2 - 73m2 - 82m2 - 96m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đơn thị quản lý và phát triển: Eurowindow Holdings.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Bàn giao: Quý IV năm 2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Giá bán căn hộ: Từ 20 tr/m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tiện ích dự án:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Dự án Eurowindow River Park với hệ thống dịch vụ tiện ích đẳng cấp cao với bể bơi bốn mùa trong ngoài trời, trung tâm thương mại, khu dịch vụ Fitness spa và chăm sóc sắc đẹp, phòng tập gym, hệ thống nhà hàng, khu vui chơi dành cho mọi lứa tuổi, hệ thống nhà trẻ mầm non và trường liên cấp quốc tế,.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Mặt bằng và giá bán căn hộ:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Giá bán căn hộ dao động từ 20tr - 22tr/m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 67,6m2: 2PN 2WC: Giá từ 1,2 tỷ - 1,35 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 71,1m2 77,6m2: 2PN 2WC: Giá từ 1,5 tỷ - 1,6 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 81,2m2: 3PN 2WC: Giá từ 1,7tỷ - 1,8 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 96,4m2: 3PN 2WC: Giá từ 2 tỷ - 2,2 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tiến độ thanh toán linh hoạt:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đặt cọc: 50 triệu.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 1: 15% GTCH: Ký HĐMB (bao gồm 50tr đặt cọc).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 2: 15% GTCH: 30/11/2018.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 3: 10% GTCH: 30/01/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 4: 10% GTCH: 30/03/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 5: 10% GTCH: 30/05/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 6: 10% GTCH: 30/07/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 7: 25% GTCH: Nhận bàn giao căn hộ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 8: 5% GTCH: Bàn giao sổ hồng.</span></p>', 1, 2, 2, 1, 2, 65, 'Đông Nam', 'Âu Cơ Tứ Liên Tây Hồ Hà Nội', 2600000000, 2),
(3, '9412049851098', 'Cho thuê biệt thự nhà vườn hiện đại', '<p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">&nbsp;Chính sách tháng 10/2022 siêu hấp dẫn:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Tặng chuyến du lịch 250 triệu (trừ trực tiếp vào giá).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Tặng thẻ học trường mầm non quốc tế 50 triệu.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Hỗ trợ vay vốn 65% GTCH với lãi suất 0%, ân hạn nợ gốc tới 31/03/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Chiết khấu 3% đối với KH thanh toán sớm 95%.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Chiết khấu 1% từ căn thứ 2 cho khách hàng và người thân mua từ căn thứ 02 trở lên.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Hiện tại dự án đã cất nóc, đang hoàn thiện bên trong.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Dự kiến bàn giao quý I/2019, ngân hàng Sacombank, HD Bank bảo lãnh tiến độ.</span></p><p><br></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">I. Thông tin dự án:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">1. Chủ đầu tư: Tập đoàn Sunshine Group.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">2. Vị trí dự án: Phú Thượng, Tây Hồ, Hà Nội, nằm trong quần thể khu Ciputra.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- View nhìn Ciputra, Sông Hồng, Hồ Tây, Cầu Nhật Tân, công viên, bể bơi, trường học, nội khu.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">3. Quy mô: 3 tòa: CT1 - CT3 (31 tầng), CT2 (34 tầng).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- 3 tầng khối đế (TTTM, phòng tập, phòng chiếu phim, phòng khám... ).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Loại căn hộ:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">2 phòng ngủ: 58 - 67 - 82 m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">3 phòng ngủ: 93 - 90 - 99 m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Bàn giao đầy đủ đồ nội thất liền tường của các nhãn hiệu nổi tiếng (điều hòa, bếp từ, bình nóng lạnh, tủ bếp, thiết bị vệ sinh... ).</span></p><p><br></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">II. Tiện ích.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Dịch vụ chuyển đồ, dọn phòng,</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Bể bơi ngoài trời &amp; bể bơi 4 mùa.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Dãy shophouse (liền kề) kinh doanh buôn bán.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Trung tâm thương mại.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Chuỗi nhà hàng, cafe.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Gym, yoga...</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Phòng khám đa khoa.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Phòng chiếu phim.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Trường học liên cấp.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Dịch vụ cung cấp tiêu chuẩn 5 sao: Đưa đón trẻ, giúp việc theo giờ, chăm sóc vật nuôi cây cảnh, giặt là, đưa đón sân bay, đặt vé máy bay....</span></p>', 1, 3, 2, 1, 3, 175, 'Đông Nam', 'Phường 15 Bình Thạnh Hồ Chí Minh', 48000000, 3),
(4, '9887499256465', 'Biệt thự Sunshine Group', '<p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Chính sách tháng 10/2018 siêu hấp dẫn:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Tặng chuyến du lịch 250 triệu (trừ trực tiếp vào giá).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Tặng thẻ học trường mầm non quốc tế 50 triệu.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Hỗ trợ vay vốn 65% GTCH với lãi suất 0%, ân hạn nợ gốc tới 31/03/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Chiết khấu 3% đối với KH thanh toán sớm 95%.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Chiết khấu 1% từ căn thứ 2 cho khách hàng và người thân mua từ căn thứ 02 trở lên.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Hiện tại dự án đã cất nóc, đang hoàn thiện bên trong.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Dự kiến bàn giao quý I/2019, ngân hàng Sacombank, HD Bank bảo lãnh tiến độ.</span></p><p><br></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">I. Thông tin dự án:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">1. Chủ đầu tư: Tập đoàn Sunshine Group.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">2. Vị trí dự án: Phú Thượng, Tây Hồ, Hà Nội, nằm trong quần thể khu Ciputra.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- View nhìn Ciputra, Sông Hồng, Hồ Tây, Cầu Nhật Tân, công viên, bể bơi, trường học, nội khu.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">3. Quy mô: 3 tòa: CT1 - CT3 (31 tầng), CT2 (34 tầng).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- 3 tầng khối đế (TTTM, phòng tập, phòng chiếu phim, phòng khám... ).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Loại căn hộ:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">2 phòng ngủ: 58 - 67 - 82 m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">3 phòng ngủ: 93 - 90 - 99 m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Bàn giao đầy đủ đồ nội thất liền tường của các nhãn hiệu nổi tiếng (điều hòa, bếp từ, bình nóng lạnh, tủ bếp, thiết bị vệ sinh... ).</span></p><p><br></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">II. Tiện ích.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Dịch vụ chuyển đồ, dọn phòng,</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Bể bơi ngoài trời &amp; bể bơi 4 mùa.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Dãy shophouse (liền kề) kinh doanh buôn bán.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Trung tâm thương mại.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Chuỗi nhà hàng, cafe.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Gym, yoga...</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Phòng khám đa khoa.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Phòng chiếu phim.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Trường học liên cấp.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">+ Dịch vụ cung cấp tiêu chuẩn 5 sao: Đưa đón trẻ, giúp việc theo giờ, chăm sóc vật nuôi cây cảnh, giặt là, đưa đón sân bay, đặt vé máy bay....</span></p>', 1, 5, 4, 1, 1, 268, 'Nam', 'Quảng An Tây Hồ Hà Nội', 15000000000, 4),
(5, '894165984561', 'Cho thuê căn hộ phố, biệt thự cao cấp', '<p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Căn hộ cao cấp Eurowindow River Park chính thức được tung ra thị trường. Chính sách siêu khủng gửi tặng khách hàng:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">1. Tặng 01 chỉ vàng cho 30 khách hàng đầu tiên đặt cọc đủ 50 triệu kể từ ngày 01/10.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">2. Tặng voucher nội thất 120 triệu/căn hộ 2PN; 150 triệu/căn hộ 3PN.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">3. Ngân hàng Techcombank hỗ trợ 70% giá trị căn hộ trong 25 năm. Miễn lãi và ân hạn nợ gốc trong vòng 12 tháng.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">4. Chiết khấu 4% GTCH cho khách hàng không sử dụng vốn vay từ ngân hàng.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">5. Chiết khấu 10% GTCH cho khách hàng thanh toán ngay 95% khi ký HĐMB.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Liên hệ: 0967 065 652 (Ms. Hiệu, quản lý kinh doanh).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Thông tin về căn hộ:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tên dự án: Eurowindow River Park.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Chủ đầu tư: Tập đoàn Eurowindow Holdings.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Vị trí dự án: Đông Hội, Đông Trù, Đông Anh, Hà Nội.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tổng diện tích dự án: 4,2ha.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Mật độ xây dựng: 40%.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Loại hình phát triển: Biệt thự, liền kề, shophouse và căn hộ cao cấp.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Quy mô dự án: Gồm 4 tòa chung cư, 65 lô biệt thự liền kề, 138 căn Shophouse, 99 căn office - tel.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Số lượng căn hộ: 2058 căn hộ chung cư cao cấp.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Cơ cấu diện tích căn hộ: 67m2 - 73m2 - 82m2 - 96m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đơn thị quản lý và phát triển: Eurowindow Holdings.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Bàn giao: Quý IV năm 2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Giá bán căn hộ: Từ 20 tr/m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tiện ích dự án:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Dự án Eurowindow River Park với hệ thống dịch vụ tiện ích đẳng cấp cao với bể bơi bốn mùa trong ngoài trời, trung tâm thương mại, khu dịch vụ Fitness spa và chăm sóc sắc đẹp, phòng tập gym, hệ thống nhà hàng, khu vui chơi dành cho mọi lứa tuổi, hệ thống nhà trẻ mầm non và trường liên cấp quốc tế,.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Mặt bằng và giá bán căn hộ:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Giá bán căn hộ dao động từ 20tr - 22tr/m2.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 67,6m2: 2PN 2WC: Giá từ 1,2 tỷ - 1,35 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 71,1m2 77,6m2: 2PN 2WC: Giá từ 1,5 tỷ - 1,6 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 81,2m2: 3PN 2WC: Giá từ 1,7tỷ - 1,8 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">- Căn hộ 96,4m2: 3PN 2WC: Giá từ 2 tỷ - 2,2 tỷ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Tiến độ thanh toán linh hoạt:</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đặt cọc: 50 triệu.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 1: 15% GTCH: Ký HĐMB (bao gồm 50tr đặt cọc).</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 2: 15% GTCH: 30/11/2018.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 3: 10% GTCH: 30/01/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 4: 10% GTCH: 30/03/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 5: 10% GTCH: 30/05/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 6: 10% GTCH: 30/07/2019.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 7: 25% GTCH: Nhận bàn giao căn hộ.</span></p><p><span style=\"font-size: 14px; color: rgb(137, 137, 137);\">Đợt 8: 5% GTCH: Bàn giao sổ hồng.</span></p>', 1, 3, 2, 2, 3, 96, 'Đông Bắc', 'Phường 15 Bình Thạnh Hồ Chí Minh', 36000000, 5);

-- --------------------------------------------------------

--
-- Table structure for table `tac_gia`
--

CREATE TABLE `tac_gia` (
  `tg_id` int(11) NOT NULL,
  `tg_ten` varchar(250) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `tg_email` varchar(300) NOT NULL,
  `tg_phone` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tac_gia`
--

INSERT INTO `tac_gia` (`tg_id`, `tg_ten`, `active`, `tg_email`, `tg_phone`) VALUES
(1, 'Trần Việt Trung', 1, 'viettrung0601@gmail.com', '0793994478'),
(2, 'Nguyễn Văn Nhẫn', 1, 'nhan.dev@gmail.com', '0763665589'),
(3, 'Huỳnh Kim Ánh', 1, 'kimanh2610@gmail.com', '0763254688');

-- --------------------------------------------------------

--
-- Table structure for table `the_loai`
--

CREATE TABLE `the_loai` (
  `tl_id` int(11) NOT NULL,
  `tl_ten` varchar(150) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `the_loai`
--

INSERT INTO `the_loai` (`tl_id`, `tl_ten`, `active`) VALUES
(1, 'Bán', 1),
(2, 'Cho thuê', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `credential` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `role_id` int(11) NOT NULL DEFAULT 1,
  `verify` tinyint(1) DEFAULT 0,
  `active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `email`, `fullname`, `credential`, `phone`, `gender`, `birthday`, `role_id`, `verify`, `active`) VALUES
(111, '114872046152355360109', 'viettrung0601@gmail.com', 'Trần Việt Trung', '$2a$08$nP0zspLNwgIFWJD2eUqurOMWJPoGu.EqhGc3ijCbib3MaghEKmeSG', '0794351150', 'male', '2000-01-01', 2, 1, 1),
(126, NULL, 'titustran0601@gmail.com', 'Trần Việt Trung', '$2a$08$nP0zspLNwgIFWJD2eUqurOMWJPoGu.EqhGc3ijCbib3MaghEKmeSG', '0793994478', 'male', '2000-01-10', 2, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anh_bai_viet`
--
ALTER TABLE `anh_bai_viet`
  ADD PRIMARY KEY (`abv_id`);

--
-- Indexes for table `anh_danh_muc`
--
ALTER TABLE `anh_danh_muc`
  ADD PRIMARY KEY (`adm_id`);

--
-- Indexes for table `binh_luan`
--
ALTER TABLE `binh_luan`
  ADD PRIMARY KEY (`bl_id`);

--
-- Indexes for table `danh_muc`
--
ALTER TABLE `danh_muc`
  ADD PRIMARY KEY (`dm_id`);

--
-- Indexes for table `hinh_anh`
--
ALTER TABLE `hinh_anh`
  ADD PRIMARY KEY (`ha_id`);

--
-- Indexes for table `nhan_vien`
--
ALTER TABLE `nhan_vien`
  ADD PRIMARY KEY (`nv_id`);

--
-- Indexes for table `quyen`
--
ALTER TABLE `quyen`
  ADD PRIMARY KEY (`q_id`);

--
-- Indexes for table `san_pham`
--
ALTER TABLE `san_pham`
  ADD PRIMARY KEY (`sp_id`);

--
-- Indexes for table `tac_gia`
--
ALTER TABLE `tac_gia`
  ADD PRIMARY KEY (`tg_id`);

--
-- Indexes for table `the_loai`
--
ALTER TABLE `the_loai`
  ADD PRIMARY KEY (`tl_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anh_bai_viet`
--
ALTER TABLE `anh_bai_viet`
  MODIFY `abv_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `anh_danh_muc`
--
ALTER TABLE `anh_danh_muc`
  MODIFY `adm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `binh_luan`
--
ALTER TABLE `binh_luan`
  MODIFY `bl_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `danh_muc`
--
ALTER TABLE `danh_muc`
  MODIFY `dm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `hinh_anh`
--
ALTER TABLE `hinh_anh`
  MODIFY `ha_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `nhan_vien`
--
ALTER TABLE `nhan_vien`
  MODIFY `nv_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quyen`
--
ALTER TABLE `quyen`
  MODIFY `q_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `san_pham`
--
ALTER TABLE `san_pham`
  MODIFY `sp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tac_gia`
--
ALTER TABLE `tac_gia`
  MODIFY `tg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `the_loai`
--
ALTER TABLE `the_loai`
  MODIFY `tl_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
