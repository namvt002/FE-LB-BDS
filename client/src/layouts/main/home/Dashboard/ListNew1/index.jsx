import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import './index.scss';

import New1 from '../News/New_1';
import New2 from '../News/New_2';
import { getData } from 'src/_helper/httpProvider';
import { API_BASE_URL } from 'src/config/configUrl';

const list_news = [
    {seo:'tin-tuc-hot',title: 'Những lí do đầy thu hút của dự án chung cư New City', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: '/images/banner_project_1.png'},
    {seo:'tin-tuc-hot',title: 'Tình hình thị trường bất động sản năm 2018 sẽ diễn ra như thế nào', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: '/images/banner_project_2.png'},
    {seo:'tin-tuc-hot',title: 'Chủ đầu tư Tân Hoàng Minh Group', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: '/images/banner_project_3.png'},
    {seo:'tin-tuc-hot',title: 'Dự án Topaz Elite được giới đầu tư kỳ vọng tại Hồ Chí Minh', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: '/images/banner_project_4.png'},
    {seo:'tin-tuc-hot',title: 'Dự án phố nhà Thương Mại Vinhomes Thanh Hóa', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: '/images/banner_project_5.png'},
    {seo:'tin-tuc-hot',title: 'Cuộc sống thượng lưu tại khu biệt thự Paradise Cam Ranh', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: '/images/banner_project_1.png'},
]

export default function ListNew1() {

    const [datas, setDatas] = React.useState([]);
    React.useEffect(() => {
        (async () => {
          try {
            const res = await getData(
              API_BASE_URL + `/blogs`,
            );
            setDatas(res.data);
            console.log(res.data,"blog ne data ne");
          } catch (e) {
            console.log(e);
          }
        })();
      }, []);
    return (
       <Box className="list-product-especical list-news">
            <Container sx={{py: 5}}>
                <Stack className="h-title-menu" direction="row">
                    <Box className="h-title" sx={{ mt: 3}}>
                        <Typography variant="h5"><span className="h5-title">TIN </span>BẤT ĐỘNG SẢN MỚI</Typography>
                        <Typography variant="p" className="p-title">Cập nhật nhanh chóng thông tin thị trường bất động sản</Typography>
                    </Box>
                </Stack>
                <Grid container spacing={2} sx={{mt: 2}}>
                    <Grid item xs={12} md={6}>
                       {datas.length > 0 && <New1 new={datas[0]}></New1>}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {
                            datas.map((value, index) => {
                                return index !== 0 && <New2 new={value}></New2>
                            })
                        }
                    </Grid>
                </Grid>
            </Container>
       </Box>
    );
}
