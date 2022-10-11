import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


import './index.scss';
import { API_BASE_URL } from 'src/config/configUrl';
import { getData } from 'src/_helper/httpProvider';

const Search_2 = () => {
    const listSearch = [
        {name: 'Biệt thự', image: '/images/collection_1.png',seo: 'biet-thu'},
        {name: 'Nhà vườn', image: '/images/collection_2.png',seo: 'biet-thu'},
        {name: 'Nhà phố', image: '/images/collection_3.png',seo: 'biet-thu'},
        {name: 'Chung cư', image: '/images/collection_4.png',seo: 'biet-thu'},
        {name: 'Căn hộ', image: '/images/collection_5.png',seo: 'biet-thu'}
    ];

    const [datas, setDatas] = React.useState([]);
    React.useEffect(() => {
        (async () => {
          try {
            const res = await getData(
              API_BASE_URL + `/danhmuc`,
            );
            setDatas(res.data);
          } catch (e) {
            console.log(e);
          }
        })();
      }, []);


    return (
        <>
            <Stack sx={{mt: 4}} direction="row" justifyContent="center">
                {
                    datas.map((obj, index) => {
                        return (
                            <Link to={`/danh-muc/${obj?.dm_id}`} className="_1-search-advanced">
                                <Box className="thumbnail">
                                    <img src={`http://localhost:4000/public/${obj.dm_hinhanh[0].adm_hinh}`} alt="" />
                                </Box>
                                <Typography sx={{textDecoration: "none"}} className="typography" variant="p">{obj.dm_ten}</Typography>
                            </Link>
                        )
                    })
                }
            </Stack>
        </>
    )
}

export default Search_2