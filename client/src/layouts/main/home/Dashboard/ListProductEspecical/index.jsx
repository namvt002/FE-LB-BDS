// import React from 'react';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import Container from '@mui/material/Container';
// import { Typography } from '@mui/material';

// import './index.scss';



// const list_product = [
//     {title: 'Căn hộ', number: 2, image: '/images/banner_project_1.png'},
//     {title: 'Chung cư', number: 3, image: '/images/banner_project_2.png'},
//     {title: 'Nhà vườn', number: 1, image: '/images/banner_project_3.png'},
//     {title: 'Biệt thự', number: 2, image: '/images/banner_project_4.png'},
//     {title: 'Nhà phố', number: 3, image: '/images/banner_project_5.png'},
// ]

// export default function ListProductEspecical() {

//     return (
//        <Box className="list-product-especical">
//             <Container sx={{py: 5}}>
//                 <Stack className="h-title-menu" direction="row" justifyContent="center">
//                     <Box className="h-title" sx={{ mt: 3 }}>
//                         <Typography variant="h5"><span className="h5-title">MẪU DỰ ÁN </span>TIÊU BIỂU</Typography>
//                         <Typography variant="p" className="p-title">Sự khác biệt mang tên phong cách</Typography>
//                     </Box>
//                 </Stack>
//                 <Grid className="list-item" container spacing={2} sx={{mt: 2}}>
//                     {
//                         list_product.map((product, index) => {
//                             const col_md = index === 0 ? 8 : 4;
//                             return (
//                                 <Grid className="_item" key={index} item xs={12} sm={col_md}>
//                                     <div className="wrap_banner">
//                                         <img src={product.image} data-lazyload="//bizweb.dktcdn.net/100/336/794/themes/692935/assets/banner_project_1.png?1638695199389" alt={product.title}/>
//                                         <div class="wr_title">
//                                             <div class="wrap_title_ed">
//                                                 <h2 class="h2"><Link href="#" className="tag-a" title={product.title}>{product.title}</Link></h2>
//                                                 <p>{product.number}&nbsp;Dự án</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Grid>
//                             )
//                         })
//                     }
//                 </Grid>
//             </Container>
//        </Box>
//     );
// }
