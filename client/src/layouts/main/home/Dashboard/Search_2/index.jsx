import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


import './index.scss';

const Search_2 = () => {
    const listSearch = [
        {name: 'Biệt thự', image: '/images/collection_1.png',seo: 'biet-thu'},
        {name: 'Nhà vườn', image: '/images/collection_2.png',seo: 'biet-thu'},
        {name: 'Nhà phố', image: '/images/collection_3.png',seo: 'biet-thu'},
        {name: 'Chung cư', image: '/images/collection_4.png',seo: 'biet-thu'},
        {name: 'Căn hộ', image: '/images/collection_5.png',seo: 'biet-thu'}
    ];


    return (
        <>
            <Stack sx={{mt: 4}} direction="row" justifyContent="center">
                {
                    listSearch.map((obj, index) => {
                        return (
                            <Link to={`/danh-muc/${obj?.seo}`} className="_1-search-advanced">
                                <Box className="thumbnail">
                                    <img src={obj.image} alt="" />
                                </Box>
                                <Typography sx={{textDecoration: "none"}} className="typography" variant="p">{obj.name}</Typography>
                            </Link>
                        )
                    })
                }
            </Stack>
        </>
    )
}

export default Search_2