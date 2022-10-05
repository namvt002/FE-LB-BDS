import React from 'react'
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Avatar from '@mui/material/Avatar';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import './index.scss';

import product_img_thumb1 from '../../../../public/images/product_img_thumb1.png';
import product_img_thumb2 from '../../../../public/images/product_img_thumb2.png';
import product_img_thumb3 from '../../../../public/images/product_img_thumb3.png';
import product_img_thumb4 from '../../../../public/images/product_img_thumb4.png';
import product_img_thumb5 from '../../../../public/images/product_img_thumb5.png';

const listNews = [
	{ id: 1, title: 'Loạn tên gọi các dự án chung cư cao cấp, siêu sang', image: product_img_thumb1 },
	{ id: 1, title: 'Chia nhỏ căn hộ, cho thuê ngắn hạn lợi ít hại nhiều', image: product_img_thumb2 },
	{ id: 1, title: 'Hàng loạt rào cản kìm hãm nguồn cung căn hộ giá rẻ', image: product_img_thumb3 },
	{ id: 1, title: 'Ít cửa sáng cho thị trường căn hộ Tp.HCM', image: product_img_thumb4 },
	{ id: 1, title: 'Thúc đẩy nhà giá rẻ phát triển cần có chính sách mạnh mẽ hơn', image: product_img_thumb5 },
]

export default function NewsDetail() {
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
					<Link to="#" className="tag-a">Tin Tức</Link>
					<Link to="#" className="tag-a active">Loạn tên gọi các dự án chung cư cao cấp, siêu sang</Link>
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
							<Typography className="title" variant="h7"><Link to="#" className="tag-a">Loạn tên gọi các dự án chung cư cao cấp, siêu sang</Link></Typography>
							<Box className="line-time-info">
								<span><CalendarMonthIcon sx={{ position: 'relative', top: '-2px' }}></CalendarMonthIcon> 25/01/2022</span>
								<span><TurnedInIcon sx={{ fontSize: 18, position: 'relative', top: '-1px' }} />&nbsp;2&nbsp; Bình luận</span>
								<span><Avatar alt="Nguyễn Tú Đại" src="/static/images/avatar/1.jpg" sx={{ width: 32, height: 32 }} /></span>
								<span>Đào Qúy Thương</span>
							</Box>
							<Box className="news-content">
								<p>Theo Hiệp hội Bất động sản Tp.HCM (HoREA), trên thị trường bất động sản hiện đang xuất hiện tình trạng loạn danh xưng chung cư cao cấp, căn hộ hạng sang, căn hộ siêu sang. HoREA cho rằng, cần chấn chỉnh tình trạng này bởi đây chỉ là thủ thuật câu khách, quảng bá sản phẩm của chủ đầu tư.</p>
								<p>Ngày 22/10, ông Lê Hoàng Châu, Chủ tịch HoREA đã có văn bản gửi các cơ quan chức năng. Theo đó, Chủ tịch HoREA cho biết, thị trường bất động sản đã xuất hiện tràn lan danh xưng chung cư cao cấp, căn hộ hạng sang, căn hộ siêu sang, gắn với các cụm từ nước ngoài như "Luxury", "Premier", "Hi-end", "Royal"... Đây chỉ là một thủ thuật câu khách, quảng bá sản phẩm của chủ đầu tư. Trong khi trên thực tế, chỉ có một số dự án bất động sản đạt chuẩn cao cấp, hoặc đạt chuẩn khu đô thị kiểu mẫu.</p>
								<p>Thậm chí, không ít dự án bất động sản, chung cư cao tầng, căn hộ được chủ đầu tư gắn mác dự án cao cấp, căn hộ hạng sang trong khi chưa hề được Sở Xây dựng hoặc đơn vị đánh giá độc lập công nhận. Theo quy định tại Khoản 13 Điều 6 Luật Nhà ở 2014 thì hành vi cung cấp thông tin sai lệch của các chủ đầu tư này đã vi phạm các hành vi bị nghiêm cấm.</p>
								<p align="center"><img alt="" className="rounded" data-thumb="large" original-height="300" original-width="420" src={product_img_thumb1} /></p>
								<p>Được biết, Bộ Xây dựng đã có 2 Thông tư về phân hạng nhà chung cư trong 10 năm qua. Mặc dù đã có quy định việc phân hạng và công nhận phân hạng nhà chung cư, song đến nay chưa có chủ đầu tư dự án hoặc ban quản trị nhà chung cư nào lập hồ sơ đề xuất phân hạng nhà chung cư. Bởi vậy, rất cần xem xét lại tính thiết thực của các văn bản pháp luật vì chưa đáp ứng được thực tế, đòi hỏi của thị trường bất động sản và người tiêu dùng về sự minh bạch, trung thực và cạnh tranh lành mạnh. &nbsp;</p>
								<p>Theo văn bản HoREA gửi các cơ quan chức năng, việc phân hạng chung cư sẽ minh bạch trong trường hợp dự án đã xây dựng xong vì khi đó đã có căn hộ thực tế, người mua nhà khó bị lừa. Nhưng đối với căn hộ hình thành trong tương lai được quảng cáo dưới mác chung cư cao cấp, căn hộ hạng sang, người mua nhà rất dễ mua nhầm sản phẩm không đúng như quảng cáo.</p>
								<p>HoREA đề xuất cần sửa đổi, bổ sung Thông tư 31/2016 theo hướng sau khi chung cư đã hoàn thành xây dựng và nghiệm thu mới công nhận hạng nhà chung cư cao cấp để đảm bảo tính minh bạch, cạnh tranh lành mạnh và bảo vệ lợi ích chính đáng của người mua nhà.</p>
								<p>Các dự án nhà chung cư hình thành trong tương lai chỉ được quảng cáo, tiếp thị để huy động vốn với danh xưng dự án chung cư cao cấp trong trường hợp đã có văn bản công nhận đạt tiêu chí này do Sở Xây dựng cấp.</p>
								<p id="ctl23_ctl00_divSummary">Theo Hiệp hội Bất động sản Tp.HCM (HoREA), trên thị trường bất động sản hiện đang xuất hiện tình trạng loạn danh xưng chung cư cao cấp, căn hộ hạng sang, căn hộ siêu sang. HoREA cho rằng, cần chấn chỉnh tình trạng này bởi đây chỉ là thủ thuật câu khách, quảng bá sản phẩm của chủ đầu tư.</p>
								<p>Ngày 22/10, ông Lê Hoàng Châu, Chủ tịch HoREA đã có văn bản gửi các cơ quan chức năng. Theo đó, Chủ tịch HoREA cho biết, thị trường bất động sản đã xuất hiện tràn lan danh xưng chung cư cao cấp, căn hộ hạng sang, căn hộ siêu sang, gắn với các cụm từ nước ngoài như "Luxury", "Premier", "Hi-end", "Royal"... Đây chỉ là một thủ thuật câu khách, quảng bá sản phẩm của chủ đầu tư. Trong khi trên thực tế, chỉ có một số dự án bất động sản đạt chuẩn cao cấp, hoặc đạt chuẩn khu đô thị kiểu mẫu.</p>
								<p>Thậm chí, không ít dự án bất động sản, chung cư cao tầng, căn hộ được chủ đầu tư gắn mác dự án cao cấp, căn hộ hạng sang trong khi chưa hề được Sở Xây dựng hoặc đơn vị đánh giá độc lập công nhận. Theo quy định tại Khoản 13 Điều 6 Luật Nhà ở 2014 thì hành vi cung cấp thông tin sai lệch của các chủ đầu tư này đã vi phạm các hành vi bị nghiêm cấm.</p>
								<p align="center"><img alt="" className="rounded" data-thumb="large" original-height="300" original-width="420" src={product_img_thumb2} /></p>
								<p>Được biết, Bộ Xây dựng đã có 2 Thông tư về phân hạng nhà chung cư trong 10 năm qua. Mặc dù đã có quy định việc phân hạng và công nhận phân hạng nhà chung cư, song đến nay chưa có chủ đầu tư dự án hoặc ban quản trị nhà chung cư nào lập hồ sơ đề xuất phân hạng nhà chung cư. Bởi vậy, rất cần xem xét lại tính thiết thực của các văn bản pháp luật vì chưa đáp ứng được thực tế, đòi hỏi của thị trường bất động sản và người tiêu dùng về sự minh bạch, trung thực và cạnh tranh lành mạnh. &nbsp;</p>
								<p>Theo văn bản HoREA gửi các cơ quan chức năng, việc phân hạng chung cư sẽ minh bạch trong trường hợp dự án đã xây dựng xong vì khi đó đã có căn hộ thực tế, người mua nhà khó bị lừa. Nhưng đối với căn hộ hình thành trong tương lai được quảng cáo dưới mác chung cư cao cấp, căn hộ hạng sang, người mua nhà rất dễ mua nhầm sản phẩm không đúng như quảng cáo.</p>
								<p>HoREA đề xuất cần sửa đổi, bổ sung Thông tư 31/2016 theo hướng sau khi chung cư đã hoàn thành xây dựng và nghiệm thu mới công nhận hạng nhà chung cư cao cấp để đảm bảo tính minh bạch, cạnh tranh lành mạnh và bảo vệ lợi ích chính đáng của người mua nhà.</p>
								<p>Các dự án nhà chung cư hình thành trong tương lai chỉ được quảng cáo, tiếp thị để huy động vốn với danh xưng dự án chung cư cao cấp trong trường hợp đã có văn bản công nhận đạt tiêu chí này do Sở Xây dựng cấp.</p>
							</Box>
							<Box className="news-comments">
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
							</Box>
						</Box>
					</Grid >
				</Grid >
			</Container>
		</Box>
	)
}
