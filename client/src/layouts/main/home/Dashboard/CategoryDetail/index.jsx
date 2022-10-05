import React from 'react'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Product from '../Product';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import thumbnail_category from '../../../../public/images/thumbnail_category.png';
import thumbnail_category2 from '../../../../public/images/thumbnail_category2.png';


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


export default function CategoryDetail() {

	const [sort, setSort] = React.useState(0);
	const [openDrawer, setOpenDrawer] = React.useState(false);

	const handleChange = (event) => {
		setSort(event.target.value);
	};

	const toggleDrawer = (_boolean) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setOpenDrawer(_boolean);
	};

	const searchOption = () => {
		return (
			<Box className="search-products">
				<Box>
					<Typography className="title" variant="h6">Tin liên quan</Typography>
					<ul className="news-category search-checkbox">
						<li><Checkbox size="small" name="category" /> Biệt Thự</li>
						<li><Checkbox size="small" name="category" /> Căn hộ</li>
					</ul>
				</Box>
				<Box>
					<Typography className="title" variant="h6">Chọn mức giá</Typography>
					<ul className="news-category search-checkbox">
						<li><Checkbox size="small" name="price" /> Giá dưới 100.000.000đ</li>
						<li><Checkbox size="small" name="price" /> 100.000.000đ - 200.000.000đ</li>
						<li><Checkbox size="small" name="price" /> 200.000.000đ - 300.000.000đ</li>
						<li><Checkbox size="small" name="price" /> 300.000.000đ - 500.000.000đ</li>
						<li><Checkbox size="small" name="price" /> 500.000.000đ - 1.000.000.000đ</li>
						<li><Checkbox size="small" name="price" /> Giá trên 1.000.000.000đ</li>
					</ul>
				</Box>
				<Box>
					<Typography className="title" variant="h6">Chọn diện tích</Typography>
					<ul className="news-category search-checkbox">
						<li><Checkbox size="small" name="size" /> Từ 20 - 50 m2</li>
						<li><Checkbox size="small" name="size" /> 50 - 90 m2</li>
						<li><Checkbox size="small" name="size" /> 90 - 120 m2</li>
						<li><Checkbox size="small" name="size" /> 20 - 160 m2</li>
						<li><Checkbox size="small" name="size" /> Trên 160 m2</li>
						<li><Checkbox size="small" name="size" /> Dưới 20 m2</li>
					</ul>
				</Box>
				<Box>
					<Typography className="title" variant="h6">Loại tin rao</Typography>
					<ul className="news-category search-checkbox">
						<li><Checkbox size="small" name="type" /> Nhà đất - Bán</li>
						<li><Checkbox size="small" name="type" /> Nhà đất - Thuê</li>
					</ul>
				</Box>
				<Box>
					<Typography className="title" variant="h6">Danh mục tin tức</Typography>
					<ul className="news-category">
						<li><Link to="#" className="tag-a">Trang chủ</Link></li>
						<li><Link to="#" className="tag-a">Tất cả tin rao</Link><KeyboardArrowDownIcon /> </li>
						<li><Link to="#" className="tag-a">Tin tức</Link><KeyboardArrowDownIcon /> </li>
						<li><Link to="#" className="tag-a">Giới thiệu</Link> </li>
						<li><Link to="#" className="tag-a">Liên hệ</Link></li>
					</ul>
				</Box>
				<Box sx={{ textAlign: 'center' }} >
					<img style={{ width: '200px' }} alt="" src={thumbnail_category2} />
				</Box>
			</Box>
		)
	}

	return (
		<Box className="wrapper-product-detail wrapper-news">
			<Box sx={{ width: '100%', display: { xs: 'none', sm: 'inline-block' } }}>
				<div className="breadcrumb_background">
					<div className="title_full">
						<div className="container a-center">
							<Typography sx={{ display: { sm: 'none', md: 'inline-block' } }} className="title_page">Tin Thị trường</Typography>
						</div>
					</div>
				</div>
			</Box>
			<Container sx={{ pt: { xs: 0, sm: 5 }, top: '160px', position: { xs: 'absolute', sm: 'unset' } }}>
				<Typography sx={{ display: { xs: 'inline-block', sm: 'none' } }} variant="h5" className="product-title">TP. HỒ CHÍ MINH</Typography>
				<Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb" className="breadcrumb">
					<Link to="#" className="tag-a">Trang chủ</Link>
					<Link to="#" className="tag-a active">Biệt thự</Link>
				</Breadcrumbs>
				<Grid className="news-write-info" container direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 5 }} sx={{ my: 3 }}>
					<Grid item xs={12} md={3} order={{ xs: 2, md: 1 }} sx={{display: {xs: 'none', md: 'inline-block'}}}>
						<Box className="search-products">
							<Box>
								<Typography className="title" variant="h6">Tin liên quan</Typography>
								<ul className="news-category search-checkbox">
									<li><Checkbox size="small" name="category" /> Biệt Thự</li>
									<li><Checkbox size="small" name="category" /> Căn hộ</li>
								</ul>
							</Box>
							<Box>
								<Typography className="title" variant="h6">Chọn mức giá</Typography>
								<ul className="news-category search-checkbox">
									<li><Checkbox size="small" name="price" /> Giá dưới 100.000.000đ</li>
									<li><Checkbox size="small" name="price" /> 100.000.000đ - 200.000.000đ</li>
									<li><Checkbox size="small" name="price" /> 200.000.000đ - 300.000.000đ</li>
									<li><Checkbox size="small" name="price" /> 300.000.000đ - 500.000.000đ</li>
									<li><Checkbox size="small" name="price" /> 500.000.000đ - 1.000.000.000đ</li>
									<li><Checkbox size="small" name="price" /> Giá trên 1.000.000.000đ</li>
								</ul>
							</Box>
							<Box>
								<Typography className="title" variant="h6">Chọn diện tích</Typography>
								<ul className="news-category search-checkbox">
									<li><Checkbox size="small" name="size" /> Từ 20 - 50 m2</li>
									<li><Checkbox size="small" name="size" /> 50 - 90 m2</li>
									<li><Checkbox size="small" name="size" /> 90 - 120 m2</li>
									<li><Checkbox size="small" name="size" /> 20 - 160 m2</li>
									<li><Checkbox size="small" name="size" /> Trên 160 m2</li>
									<li><Checkbox size="small" name="size" /> Dưới 20 m2</li>
								</ul>
							</Box>
							<Box>
								<Typography className="title" variant="h6">Loại tin rao</Typography>
								<ul className="news-category search-checkbox">
									<li><Checkbox size="small" name="type" /> Nhà đất - Bán</li>
									<li><Checkbox size="small" name="type" /> Nhà đất - Thuê</li>
								</ul>
							</Box>
							<Box>
								<Typography className="title" variant="h6">Danh mục tin tức</Typography>
								<ul className="news-category">
									<li><Link to="#" className="tag-a">Trang chủ</Link></li>
									<li><Link to="#" className="tag-a">Tất cả tin rao</Link><KeyboardArrowDownIcon /> </li>
									<li><Link to="#" className="tag-a">Tin tức</Link><KeyboardArrowDownIcon /> </li>
									<li><Link to="#" className="tag-a">Giới thiệu</Link> </li>
									<li><Link to="#" className="tag-a">Liên hệ</Link></li>
								</ul>
							</Box>
							<Box sx={{ textAlign: 'center' }} >
								<img style={{ width: '200px' }} alt="" src={thumbnail_category2} />
							</Box>
						</Box>
					</Grid >
					<Grid item xs={12} md={9} order={{ xs: 1, md: 2 }}>
						<Box className="search-result">
							<img className="rounded" width="100%" src={thumbnail_category} alt="" />
							<Stack sx={{ display: { xs: 'none', md: 'flex' }, mt: 2 }} direction="row" spacing={2} alignItems="center">
								<small>Ưu tiên xem:</small>
								<small><Checkbox size="small" name="sort" value={1} /> Tin rao mới</small>
								<small><Checkbox size="small" name="sort" value={2} /> Tin rao cũ</small>
								<small><Checkbox size="small" name="sort" value={3} /> Giá tăng dần</small>
								<small><Checkbox size="small" name="sort" value={4} /> Giá giảm dần</small>
							</Stack>

							<Select sx={{ display: { xs: 'inline-block', md: 'none' }, mt: 2 }} labelId="demo-select-small" size="small" value={sort} label="Sort" onChange={handleChange} >
								<MenuItem value={0}> <em>Sắp xếp theo</em> </MenuItem>
								<MenuItem value={1}>Tin rao mới</MenuItem>
								<MenuItem value={2}>Tin rao cũ</MenuItem>
								<MenuItem value={3}>Giá tăng dần</MenuItem>
								<MenuItem value={4}>Giá giảm dần</MenuItem>
							</Select>
							<Divider sx={{ my: 2 }} light />
							<Grid container spacing={2}>
								{
									listProduct.map((product, index) => {
										return (
											<Grid key={index} item xs={12}>
												<Box sx={{ width: '100%' }}>
													<Product flexDirection="row" product={product}></Product>
												</Box>
											</Grid>
										)
									})
								}
							</Grid>
						</Box>
					</Grid>
					<Grid tem xs={12}>
						<Button sx={{display: {xs: 'inline-block', md: 'none'}}} className="btn btn-open-drawer" onClick={toggleDrawer(true)}><PlaylistAddCheckIcon sx={{fontSize: '25px'}}></PlaylistAddCheckIcon></Button>
						<Drawer
							anchor="right"
							open={openDrawer}
							onClose={toggleDrawer(false)}
						>
							<Box className="search-products">
								<Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mt: 1}}><Button onClick={toggleDrawer(false)}><CloseIcon></CloseIcon></Button></Box>
								<Box>
									<Typography className="title" variant="h6">Tin liên quan</Typography>
									<ul className="news-category search-checkbox">
										<li><Checkbox size="small" name="category" /> Biệt Thự</li>
										<li><Checkbox size="small" name="category" /> Căn hộ</li>
									</ul>
								</Box>
								<Box>
									<Typography className="title" variant="h6">Chọn mức giá</Typography>
									<ul className="news-category search-checkbox">
										<li><Checkbox size="small" name="price" /> Giá dưới 100.000.000đ</li>
										<li><Checkbox size="small" name="price" /> 100.000.000đ - 200.000.000đ</li>
										<li><Checkbox size="small" name="price" /> 200.000.000đ - 300.000.000đ</li>
										<li><Checkbox size="small" name="price" /> 300.000.000đ - 500.000.000đ</li>
										<li><Checkbox size="small" name="price" /> 500.000.000đ - 1.000.000.000đ</li>
										<li><Checkbox size="small" name="price" /> Giá trên 1.000.000.000đ</li>
									</ul>
								</Box>
								<Box>
									<Typography className="title" variant="h6">Chọn diện tích</Typography>
									<ul className="news-category search-checkbox">
										<li><Checkbox size="small" name="size" /> Từ 20 - 50 m2</li>
										<li><Checkbox size="small" name="size" /> 50 - 90 m2</li>
										<li><Checkbox size="small" name="size" /> 90 - 120 m2</li>
										<li><Checkbox size="small" name="size" /> 20 - 160 m2</li>
										<li><Checkbox size="small" name="size" /> Trên 160 m2</li>
										<li><Checkbox size="small" name="size" /> Dưới 20 m2</li>
									</ul>
								</Box>
								<Box>
									<Typography className="title" variant="h6">Loại tin rao</Typography>
									<ul className="news-category search-checkbox">
										<li><Checkbox size="small" name="type" /> Nhà đất - Bán</li>
										<li><Checkbox size="small" name="type" /> Nhà đất - Thuê</li>
									</ul>
								</Box>
								<Box>
									<Typography className="title" variant="h6">Danh mục tin tức</Typography>
									<ul className="news-category">
										<li><Link to="#" className="tag-a">Trang chủ</Link></li>
										<li><Link to="#" className="tag-a">Tất cả tin rao</Link><KeyboardArrowDownIcon /> </li>
										<li><Link to="#" className="tag-a">Tin tức</Link><KeyboardArrowDownIcon /> </li>
										<li><Link to="#" className="tag-a">Giới thiệu</Link> </li>
										<li><Link to="#" className="tag-a">Liên hệ</Link></li>
									</ul>
								</Box>
								<Box sx={{ textAlign: 'center' }} >
									<img style={{ width: '200px' }} alt="" src={thumbnail_category2} />
								</Box>
							</Box>
						</Drawer>
					</Grid>
				</Grid >
			</Container>
		</Box>
	)
}
