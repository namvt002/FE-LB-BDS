import React, { useEffect } from 'react';
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
import { getData } from 'src/_helper/httpProvider';
import { API_BASE_URL } from 'src/config/configUrl';
import { useParams } from 'react-router-dom';
import { fCurrency } from 'src/utils/formatNumber';

export default function ProductDetail() {
  const [open, setOpen] = React.useState(false);
  const [imgActive, setImgActive] = React.useState(0);
  const params = useParams();
  const [datas, setDatas] = React.useState([]);
  const [dataImage, setListImage] = React.useState([]);
  const [imgSrc, setImgSrc] = React.useState('');
  const [dataTinCungChuDe, setDataTinCungChuDe] = React.useState([]);


  useEffect(() => {
    (async () => {
      try {
        const res = await getData(API_BASE_URL + `/book/${params.id}`);
        setDatas(res.data);
        setListImage(res.data.sp_hinhanh);
        const rs = await getData(API_BASE_URL + `/books/danhmuc/${res.data.sp_iddm}`);
        setDataTinCungChuDe(rs.data)
        setImgSrc(
          `http://localhost:4000/public/${res.data?.sp_hinhanh[0]?.ha_hinh}`,
        );
      } catch (e) {
        console.log(e);
      }
    })();
  }, [params.id]);




  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleClickCloseDialog = () => {
    setOpen(false);
  };

  const setImgThumbSrc = (imgSrc, index) => {
    setImgActive(index);
    setImgSrc(`http://localhost:4000/public/${imgSrc}`);
  };

  return (
    <>
      <Box className="wrapper-product-detail">
        <Box
          sx={{ width: '100%', display: { xs: 'none', sm: 'inline-block' } }}
        >
          <div className="breadcrumb_background">
            <div className="title_full">
              <div className="container a-center">
                <Typography
                  sx={{ display: { sm: 'none', md: 'inline-block' } }}
                  className="title_page"
                >
                  Tp. Hồ Chí Minh
                </Typography>
              </div>
            </div>
          </div>
        </Box>
        {dataImage.length > 0 && (
          <DialogListImage
            listProduct={dataImage}
            open={open}
            handleClickCloseDialog={handleClickCloseDialog}
          />
        )}
        <Container
          sx={{
            pt: { xs: 0, sm: 5 },
            top: '160px',
            position: { xs: 'absolute', sm: 'unset' },
          }}
        >
          <Typography
            sx={{ display: { xs: 'inline-block', sm: 'none' } }}
            variant="h5"
            className="product-title"
          >
            TP. HỒ CHÍ MINH
          </Typography>
          <Breadcrumbs
            sx={{ mb: 2 }}
            aria-label="breadcrumb"
            className="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="#">
              Trang chủ
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Tp. Hồ Chí Minh
            </Link>
            <Link underline="hover" color="inherit" className="active" href="#">
              {datas.sp_ten}
            </Link>
          </Breadcrumbs>
          <Grid
            className="product-info"
            container
            direction={{ xs: 'column', md: 'row' }}
            alignItems={{ xs: 'center', md: 'flex-start' }}
            spacing={{ xs: 2, md: 4 }}
            sx={{ my: 3 }}
          >
            <Grid item xs={12} md={6}>
              <img
                style={{
                  width: '40rem',
                  height: '30rem',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                onClick={handleClickOpenDialog}
                className="rounded"
                src={imgSrc}
                alt=""
              />
              <Grid container className="product-list-image">
                {dataImage.map((product, index) => {
                  const active = index === imgActive ? 'active' : '';
                  return (
                    <Grid item key={index}>
                      <img
                        width="100px"
                        className={`rouned ${active}`}
                        onClick={() => {
                          setImgThumbSrc(product?.ha_hinh, index);
                        }}
                        src={'http://localhost:4000/public/' + product.ha_hinh}
                        alt=""
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h5" className="product-title">
                {datas.sp_ten}
              </Typography>
              <Typography variant="p">
                Thuộc Quận/huyện:{' '}
                <span className="product-details">{datas.sp_diachi}</span>
              </Typography>
              <br />
              <Typography variant="p">
                Kiểu dự án:{' '}
                <span className="product-details">{datas.dm_ten}</span>
              </Typography>
              <br />
              <Typography variant="p">
                Trạng thái:{' '}
                <span className="product-details">{datas.tl_ten}</span>
              </Typography>
              <br />
              <Typography variant="p" className="product-price">
                {fCurrency(datas.sp_gia)}
              </Typography>

              <div className="contactphone">
                <a className="mobile" href="tel:0123456789">
                  <span className="icon"></span>
                  <div className="mb">
                    <span itemprop="telephone" data-mobile="0123456789">
                      0123 456 789
                    </span>
                    <small>Liên hệ ngay</small>
                  </div>
                </a>
              </div>
            </Grid>
          </Grid>
          <Box className="product-detail-info">
            <Typography variant="h6" className="title">
              Đặc điểm dự án
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={7}>
                <ul className="product-specical-info">
                  <li>
                    <span>Loại tin rao:</span>
                    {datas.tl_ten}
                  </li>
                  <li>
                    <span>Địa chỉ:</span>
                    {datas.sp_diachi}
                  </li>
                  <li>
                    <span>Diện tích:</span>
                    {datas.sp_dientich}
                  </li>
                  <li>
                    <span>Phòng ngủ:</span>
                    {datas.sp_phongngu}
                  </li>
                  <li>
                    <span>Phòng WC:</span>
                    {datas.sp_phongwc}
                  </li>
                  <li>
                    <span>Hướng nhà (dự án):</span>
                    {datas.sp_huongnha}
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} md={5}>
                <ul className="product-specical-info info-user">
                  <li>
                    <Avatar
                      alt="Nguyễn Tú Đại"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 56, height: 56, mb: 1 }}
                    />
                  </li>
                  <li>
                    <span>Tên liên lạc</span>
                    {datas.tg_ten}
                  </li>
                  <li>
                    <span>Số điện thoại</span>
                    {datas.tg_phone}
                  </li>
                  <li>
                    <span>Email</span>
                    {datas.tg_email}
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Box>
          <Box className="product-detail-info">
            <Typography variant="h6" className="title">
              Chi tiết dự án
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sx={{ my: 2 }}>
                <div dangerouslySetInnerHTML={{ __html: datas.sp_mota }}></div>
              </Grid>
            </Grid>
          </Box>
          <Box className="list-product-new" sx={{ mt: 3 }}>
            <Stack className="h-title-menu" direction="row" alignItems="center">
              <Box className="h-title" sx={{ flexGrow: 1 }}>
                <Typography variant="h5">
                  <span className="h5-title">TIN RAO</span> CÙNG CHỦ ĐỀ
                </Typography>
                <Typography variant="p" className="p-title">
                  Những tin rao cùng chủ đề bạn đang xem
                </Typography>
              </Box>
              <Box></Box>
            </Stack>
            <Grid container spacing={2} sx={{ mt: 2 }}>
							{
								dataTinCungChuDe.map((product, index) => {
									if (index < 1) {
										return (
											<Grid key={index} item xs={12} md={6} lg={4}>
												<Box sx={{ width: '100%' }}>
													<Product product={product}></Product>
												</Box>
											</Grid>
										)
									}else{
                    return (
                      <></>
                    )
                  }
								})
							}
						</Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
