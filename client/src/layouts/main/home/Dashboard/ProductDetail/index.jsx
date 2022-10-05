import React from 'react'
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import './index.scss';
import Product from '../Product';
import DialogListImage from '../DialogListImage';


import product_img_thumb1 from '../../../../public/images/product_img_thumb1.png';
import product_img_thumb2 from '../../../../public/images/product_img_thumb2.png';
import product_img_thumb3 from '../../../../public/images/product_img_thumb3.png';
import product_img_thumb4 from '../../../../public/images/product_img_thumb4.png';
import product_img_thumb5 from '../../../../public/images/product_img_thumb5.png';
import product_img_thumb6 from '../../../../public/images/product_img_thumb6.png';

const listProduct = [
	{ id: 1, title: 'Cho thuê căn hộ, biệt thự cao cấp', address: 'Phường 15 Bình Thạnh HỒ CHÍ MINH', price: '36.000.000', notes: ['cho thuê'], detail: { info_1: 3, info_2: 2, info_3: '175m2' }, image: product_img_thumb1 },
	{ id: 1, title: 'Biệt thự Sunshine Group', address: 'Quảng An Tây Hồ Hà Nội', price: '15.000.000.000', notes: ['bán', 'hot'], detail: { info_1: 3, info_2: 2, info_3: '175m2' }, image: product_img_thumb2 },
	{ id: 1, title: 'Bán biệt thự N03 Sài Đồng', address: 'Sài Đồng Long Biên Hà Nội', price: '18.700.000.000', notes: ['cho thuê'], detail: { info_1: 3, info_2: 2, info_3: '175m2' }, image: product_img_thumb3 },
	{ id: 1, title: 'Cho thuê biệt thự hiện đại', address: 'Phường 15 Bình Thạnh Hồ Chí Minh', price: '48.000.000', notes: ['bán', 'hot'], detail: { info_1: 3, info_2: 2, info_3: '175m2' }, image: product_img_thumb4 },
	{ id: 1, title: 'Bán biệt thự hiện đại mới xây', address: 'Xuân Thủy Cầu Giấy Hà Nội', price: '12.500.000.000', notes: ['cho thuê'], detail: { info_1: 3, info_2: 2, info_3: '175m2' }, image: product_img_thumb5 },
	{ id: 1, title: 'Bán biệt thự khu Jamona Golden Silk', address: 'Sài Đồng Long Biên Hà Nội', price: '14.000.000.000', notes: ['bán'], detail: { info_1: 3, info_2: 2, info_3: '175m2' }, image: product_img_thumb6 }
]

export default function ProductDetail() {
	const [open, setOpen] = React.useState(false);
	const [imgActive, setImgActive] = React.useState(0);
	const [imgSrc, setImgSrc] = React.useState(listProduct[0].image);

	const handleClickOpenDialog = () => {
		setOpen(true);
	};

	const handleClickCloseDialog = () => {
		setOpen(false);
	};

	const setImgThumbSrc = (imgSrc, index) => {
		setImgActive(index);
		setImgSrc(imgSrc);
	}

	return (
		<>
			<Box className="wrapper-product-detail">
				<Box sx={{ width: '100%', display: { xs: 'none', sm: 'inline-block' } }}>
					<div className="breadcrumb_background">
						<div className="title_full">
							<div className="container a-center">
								<Typography sx={{ display: { sm: 'none', md: 'inline-block' } }} className="title_page">Tp. Hồ Chí Minh</Typography>
							</div>
						</div>
					</div>
				</Box>
				<DialogListImage listProduct={listProduct} open={open} handleClickCloseDialog={handleClickCloseDialog}></DialogListImage>
				<Container sx={{ pt: { xs: 0, sm: 5 }, top: '160px', position: { xs: 'absolute', sm: 'unset' } }}>
					<Typography sx={{ display: { xs: 'inline-block', sm: 'none' } }} variant="h5" className="product-title">TP. HỒ CHÍ MINH</Typography>
					<Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb" className="breadcrumb">
						<Link underline="hover" color="inherit" href="#">Trang chủ</Link>
						<Link underline="hover" color="inherit" href="#">Tp. Hồ Chí Minh</Link>
						<Link underline="hover" color="inherit" className="active" href="#">Cho thuê căn hộ, biệt thự cao cấp</Link>
					</Breadcrumbs>
					<Grid className="product-info" container direction={{ xs: 'column', md: 'row' }} alignItems={{ xs: 'center', md: 'flex-start' }} spacing={{ xs: 2, md: 4 }} sx={{ my: 3 }}>
						<Grid item xs={12} md={6}>
							<img onClick={handleClickOpenDialog} className="rounded" src={imgSrc} alt="" />
							<Grid container className="product-list-image">
								{listProduct.map((product, index) => {
									const active = index === imgActive ? 'active' : '';
									return (
										<Grid item key={index}>
											<img width="100px" className={`rouned ${active}`} onClick={() => {setImgThumbSrc(product.image, index)}} src={product.image} alt="" />
										</Grid >
									);
								})}
							</Grid >
						</Grid >
						<Grid item xs={12} md={5}>
							<Typography variant="h5" className="product-title">Cho thuê căn hộ, biệt thự cao cấp</Typography>
							<Typography variant="p">Thuộc Quận/huyện: <span className="product-details">Quận 1, Tp. Hồ Chí Minh</span></Typography><br />
							<Typography variant="p">Kiểu dự án: <span className="product-details">Căn hộ</span></Typography><br />
							<Typography variant="p">Trạng thái: <span className="product-details">Đang bán(cho thuê)</span></Typography><br />
							<Typography variant="p" className="product-price">36.000.000</Typography>

							<div className="contactphone">
								<a className="mobile" href="tel:0123456789">
									<span className="icon"></span>
									<div className="mb">
										<span itemprop="telephone" data-mobile="0123456789">0123 456 789</span>
										<small>Liên hệ ngay</small>
									</div>
								</a>
							</div>
						</Grid >
					</Grid >
					<Box className="product-detail-info">
						<Typography variant="h6" className="title">Đặc điểm dự án</Typography>
						<Grid container spacing={4}>
							<Grid item xs={12} md={7}>
								<ul className="product-specical-info">
									<li><span>Loại tin rao:</span>Cho thuê</li>
									<li><span>Địa chỉ:</span>Phường 15 Bình Thạnh Hồ Chí Minh</li>
									<li><span>Diện tích:</span>175m2</li>
									<li><span>Phòng ngủ:</span>3</li>
									<li><span>Phòng WC:</span>2</li>
									<li><span>Hướng nhà (dự án):</span>Đông Nam</li>
								</ul>
							</Grid>
							<Grid item xs={12} md={5}>
								<ul className="product-specical-info info-user">
									<li>
										<Avatar alt="Nguyễn Tú Đại" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56, mb: 1 }} />
									</li>
									<li><span>Tên liên lạc</span>Nguyễn Tú Đại</li>
									<li><span>Số điện thoại</span>0123 456 789</li>
									<li><span>Email</span>nguyentudai@gmail.com</li>
								</ul>
							</Grid>
						</Grid>
					</Box>
					<Box className="product-detail-info">
						<Typography variant="h6" className="title">Chi tiết dự án</Typography>
						<Grid container spacing={4}>
							<Grid item xs={12} sx={{ my: 2 }}>
								<p className="document-detail-info">Căn hộ cao cấp Eurowindow River Park chính thức được tung ra thị trường. Chính sách siêu khủng gửi tặng khách hàng:<br />
									1. Tặng 01 chỉ vàng cho 30 khách hàng đầu tiên đặt cọc đủ 50 triệu kể từ ngày 01/10.<br />
									2. Tặng voucher nội thất 120 triệu/căn hộ 2PN; 150 triệu/căn hộ 3PN.<br />
									3. Ngân hàng Techcombank hỗ trợ 70% giá trị căn hộ trong 25 năm. Miễn lãi và ân hạn nợ gốc trong vòng 12 tháng.<br />
									4. Chiết khấu 4% GTCH cho khách hàng không sử dụng vốn vay từ ngân hàng.<br />
									5. Chiết khấu 10% GTCH cho khách hàng thanh toán ngay 95% khi ký HĐMB.<br />
									Liên hệ: 0967 065 652 (Ms. Hiệu, quản lý kinh doanh).<br />
									Thông tin về căn hộ:<br />
									Tên dự án: Eurowindow River Park.<br />
									Chủ đầu tư: Tập đoàn Eurowindow Holdings.<br />
									Vị trí dự án: Đông Hội, Đông Trù, Đông Anh, Hà Nội.<br />
									Tổng diện tích dự án: 4,2ha.<br />
									Mật độ xây dựng: 40%.<br />
									Loại hình phát triển: Biệt thự, liền kề, shophouse và căn hộ cao cấp.<br />
									Quy mô dự án: Gồm 4 tòa chung cư, 65 lô biệt thự liền kề, 138 căn Shophouse, 99 căn office - tel.<br />
									Số lượng căn hộ: 2058 căn hộ chung cư cao cấp.<br />
									Cơ cấu diện tích căn hộ: 67m2 - 73m2 - 82m2 - 96m2.<br />
									Đơn thị quản lý và phát triển: Eurowindow Holdings.<br />
									Bàn giao: Quý IV năm 2019.<br />
									Giá bán căn hộ: Từ 20 tr/m2.<br />
									Tiện ích dự án:<br />
									Dự án Eurowindow River Park với hệ thống dịch vụ tiện ích đẳng cấp cao với bể bơi bốn mùa trong ngoài trời, trung tâm thương mại, khu dịch vụ Fitness spa và chăm sóc sắc đẹp, phòng tập gym, hệ thống nhà hàng, khu vui chơi dành cho mọi lứa tuổi, hệ thống nhà trẻ mầm non và trường liên cấp quốc tế,.<br />
									Mặt bằng và giá bán căn hộ:<br />
									Giá bán căn hộ dao động từ 20tr - 22tr/m2.<br />
									- Căn hộ 67,6m2: 2PN 2WC: Giá từ 1,2 tỷ - 1,35 tỷ.<br />
									- Căn hộ 71,1m2 77,6m2: 2PN 2WC: Giá từ 1,5 tỷ - 1,6 tỷ.<br />
									- Căn hộ 81,2m2: 3PN 2WC: Giá từ 1,7tỷ - 1,8 tỷ.<br />
									- Căn hộ 96,4m2: 3PN 2WC: Giá từ 2 tỷ - 2,2 tỷ.<br />
									Tiến độ thanh toán linh hoạt:<br />
									Đặt cọc: 50 triệu.<br />
									Đợt 1: 15% GTCH: Ký HĐMB (bao gồm 50tr đặt cọc).<br />
									Đợt 2: 15% GTCH: 30/11/2018.<br />
									Đợt 3: 10% GTCH: 30/01/2019.<br />
									Đợt 4: 10% GTCH: 30/03/2019.<br />
									Đợt 5: 10% GTCH: 30/05/2019.<br />
									Đợt 6: 10% GTCH: 30/07/2019.<br />
									Đợt 7: 25% GTCH: Nhận bàn giao căn hộ.<br />
									Đợt 8: 5% GTCH: Bàn giao sổ hồng.</p>
							</Grid>
						</Grid>
					</Box>
					<Box className="list-product-new" sx={{ mt: 3 }}>
						<Stack className="h-title-menu" direction="row" alignItems="center">
							<Box className="h-title" sx={{ flexGrow: 1 }}>
								<Typography variant="h5"><span className="h5-title">CÙNG</span> NGƯỜI ĐĂNG</Typography>
								<Typography variant="p" className="p-title">Những dự án khác cùng người đăng</Typography>
							</Box>
							<Box></Box>
						</Stack>
						<Grid container spacing={2} sx={{ mt: 2 }}>
							{
								listProduct.map((product, index) => {
									if (index < 3) {
										return (
											<Grid key={index} item xs={12} md={6} lg={4}>
												<Box sx={{ width: '100%' }}>
													<Product product={product}></Product>
												</Box>
											</Grid>
										)
									}
								})
							}
						</Grid>
					</Box>
					<Box className="list-product-new" sx={{ mt: 3 }}>
						<Stack className="h-title-menu" direction="row" alignItems="center">
							<Box className="h-title" sx={{ flexGrow: 1 }}>
								<Typography variant="h5"><span className="h5-title">TIN RAO</span> CÙNG CHỦ ĐỀ</Typography>
								<Typography variant="p" className="p-title">Những tin rao cùng chủ đề bạn đang xem</Typography>
							</Box>
							<Box></Box>
						</Stack>
						<Grid container spacing={2} sx={{ mt: 2 }}>
							{
								listProduct.map((product, index) => {
									if (index < 1) {
										return (
											<Grid key={index} item xs={12} md={6} lg={4}>
												<Box sx={{ width: '100%' }}>
													<Product product={product}></Product>
												</Box>
											</Grid>
										)
									}
								})
							}
						</Grid>
					</Box>
				</Container>
			</Box>
		</>

	)
}
