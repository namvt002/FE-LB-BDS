import React from 'react'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './index.scss';
import { API_BASE_URL } from 'src/config/configUrl';
import { useParams } from 'react-router-dom';
import { getData } from 'src/_helper/httpProvider';


const product_img_thumb1 = '../../../../public/images/product_img_thumb1.png';
const product_img_thumb2 = '../../../../public/images/product_img_thumb2.png';
const product_img_thumb3 = '../../../../public/images/product_img_thumb3.png';
const product_img_thumb4 = '../../../../public/images/product_img_thumb4.png';
const product_img_thumb5 = '../../../../public/images/product_img_thumb5.png';

const listNews = [
	{ id: 1, title: 'Loạn tên gọi các dự án chung cư cao cấp, siêu sang', image: product_img_thumb1 },
	{ id: 1, title: 'Chia nhỏ căn hộ, cho thuê ngắn hạn lợi ít hại nhiều', image: product_img_thumb2 },
	{ id: 1, title: 'Hàng loạt rào cản kìm hãm nguồn cung căn hộ giá rẻ', image: product_img_thumb3 },
	{ id: 1, title: 'Ít cửa sáng cho thị trường căn hộ Tp.HCM', image: product_img_thumb4 },
	{ id: 1, title: 'Thúc đẩy nhà giá rẻ phát triển cần có chính sách mạnh mẽ hơn', image: product_img_thumb5 },
]

export default function NewsDetail() {
	const params = useParams();
  	const [datas, setDatas] = React.useState([]);
	React.useEffect(() => {
		(async () => {
		  try {
			const res = await getData(API_BASE_URL + `/blog/${params.id}`);
			setDatas(res.data);
		  } catch (e) {
			console.log(e);
		  }
		})();
	  }, [params.id]);
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
				<Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb" className="breadcrumb">
					<Link to="#" className="tag-a">Trang chủ</Link>
					<Link to="#" className="tag-a">Tin Tức</Link>
					<Link to="#" className="tag-a active">{datas.bv_ten}</Link>
				</Breadcrumbs>
				<Grid className="news-write-info" container direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 5 }} sx={{ my: 3 }}>
					<Grid item xs={12} md={3} order={{ xs: 2, md: 1 }}>
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
						<Box>
							<Typography className="title" variant="h6">Tin liên quan</Typography>
							<ul className="news-category">
								{
									listNews.map((news, index) => {
										return (
											<li key={index} className="once-new">
												<Link to="#"><img src={news.image} alt="" /></Link>
												<Link to="#" className="tag-a title">{news.title}</Link>
											</li>
										)
									})
								}
							</ul>
						</Box>
					</Grid >
					<Grid item xs={12} md={9} order={{ xs: 1, md: 2 }}>
						<Box className="news-details">
							<Typography className="title" variant="h7"><Link to="#" className="tag-a">{datas.bv_ten}</Link></Typography>
							<Box className="line-time-info">
								<span><CalendarMonthIcon sx={{ position: 'relative', top: '5px' }}></CalendarMonthIcon> {datas.ngaytao}</span>
								
							</Box>
							<Box className="news-content">
								<div id="editor-react-quiz" dangerouslySetInnerHTML={{ __html: datas.bv_mota }}></div>
							</Box>
							{/* <Box className="news-comments">
								<Typography className="title" variant="h5">Viết bình luận của bạn:</Typography>
								<form action="" method="POST">
									<Grid container spacing={{xs: 1, md: 3}}>
										<Grid item xs={12} md={6}>
											<input type="text" name="user-name" placeholder="Họ và tên" />
										</Grid>
										<Grid item xs={12} md={6}>
											<input type="text" name="email" placeholder="Email" />
										</Grid>
										<Grid item xs={12} md={12}>
											<textarea name="comment" id="" placeholder="Viết bình luận" cols="30" rows="10"></textarea>
										</Grid> 
										<Grid item xs={12} md={12}>
											<button>Gửi bình luận</button>
										</Grid> 
									</Grid>
								</form>
							</Box> */}
						</Box>
					</Grid >
				</Grid >
			</Container>
		</Box>
	)
}
