import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import './index.scss';
import './list-product.scss';
import Product from '../Product';

const product_img_thumb1 = '/images/product_img_thumb1.png';
const product_img_thumb2 = '/images/product_img_thumb2.png';
const product_img_thumb3 = '/images/product_img_thumb3.png';
const product_img_thumb4 = '/images/product_img_thumb4.png';
const product_img_thumb5 = '/images/product_img_thumb5.png';
const product_img_thumb6 = '/images/product_img_thumb6.png';

const menu_items = [
    'Biệt thự',
    'Căn hộ',
    'Chugn cư',
    'Nhà vườn',
];

const list_product = [
    {id: 1, title: 'Cho thuê căn hộ, biệt thự cao cấp', address: 'Phường 15 Bình Thạnh HỒ CHÍ MINH', price: '36.000.000', notes: ['cho thuê'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb1 },
    {id: 1, title: 'Biệt thự Sunshine Group', address: 'Quảng An Tây Hồ Hà Nội', price: '15.000.000.000', notes: ['bán', 'hot'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb2 },
    {id: 1, title: 'Bán biệt thự N03 Sài Đồng', address: 'Sài Đồng Long Biên Hà Nội', price: '18.700.000.000', notes: ['cho thuê'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb3 },
    {id: 1, title: 'Cho thuê biệt thự hiện đại', address: 'Phường 15 Bình Thạnh Hồ Chí Minh', price: '48.000.000', notes: ['bán', 'hot'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb4 },
    {id: 1, title: 'Bán biệt thự hiện đại mới xây', address: 'Xuân Thủy Cầu Giấy Hà Nội', price: '12.500.000.000', notes: ['cho thuê'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb5 },
    {id: 1, title: 'Bán biệt thự khu Jamona Golden Silk', address: 'Sài Đồng Long Biên Hà Nội', price: '14.000.000.000', notes: ['bán'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb6 }
]

export default function ListProductNews() {
    const [toggleMenu, setToggleMenu] = useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(toggleMenu);
    const handleClickListItem = (event) => {
    setToggleMenu(event.currentTarget);
    };

    const handleMenuItemClick = ( event, index ) => {
        setSelectedIndex(index);
        setToggleMenu(null);
    };

    const handleClose = () => {
        setToggleMenu(null);
    };

    return (
       <Box className="wrap-list-product-new">
            <Container sx={{py: 5}}>
                <Stack className="h-title-menu" direction="row" alignItems="center">
                    <Box className="h-title" sx={{flexGrow: 1 }}>
                        <Typography variant="h5"><span className="h5-title">DỰ ÁN</span> MỚI NHẤT</Typography>
                        <Typography variant="p" className="p-title">Dự án mới nhất này có đang ở gần bạn ?</Typography>
                    </Box>
                    <Box className="h-menu">
                    <Box sx={{display: {xs: 'none', md: 'inline-block'}}}>
                            <ul>
                                <li><Link className="tag-a selected">BIỆT THỰ</Link></li>
                                <li><Link className="tag-a">CĂN HỘ</Link></li>
                                <li><Link className="tag-a">CHUNG cư</Link></li>
                                <li><Link className="tag-a">NHÀ VƯỜN</Link></li>
                            </ul>
                        </Box>
                        <MenuIcon
                            aria-controls="h-menu"
                            onClick={handleClickListItem}  
                            className="icon-menu" 
                            sx={{display: {xs: 'inline-block', md: 'none'}}}
                        ></MenuIcon>
                    </Box>
                </Stack>
                <Menu
                    sx={{display: {xs: 'inline-block', md: 'none'}}}
                    className="xs-h-menu"
                    id="h-menu"
                    anchorEl={toggleMenu}
                    open={open}
                    onClose={handleClose}
                >
                    {menu_items.map((item, index) => (
                    <MenuItem
                        key={item}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {item}
                    </MenuItem>
                    ))}
                </Menu>
                <Grid container spacing={2} sx={{mt: 5}}>
                    {
                        list_product.map((product, index) => {
                            return (
                                <Grid key={index} item xs={12} md={6} lg={4}>
                                    <Box sx={{width: '100%'}}>
                                        <Product product={product}></Product>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
       </Box>
    );
}
