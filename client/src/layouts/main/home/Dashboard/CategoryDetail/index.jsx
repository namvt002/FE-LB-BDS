import React from 'react'
import { Link, useSearchParams  } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FormGroup, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Radio from '@mui/material/Radio';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Product from '../Product';
// import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
// import CloseIcon from '@mui/icons-material/Close';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Checkbox from '@mui/material/Checkbox';
import './index.scss';
import { getData } from 'src/_helper/httpProvider';
import { API_BASE_URL } from 'src/config/configUrl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const thumbnail_category = 'http://localhost:3000/images/thumbnail_category.png';



export default function CategoryDetail() {
	const [searchParams] = useSearchParams();
	let _danhmuc = searchParams.get('danhmuc'); 
	const [datas, setDatas] = React.useState([]);
	const [_load, setLoad] = React.useState(0);
	const [dataDanhMuc, setDataDanhMuc] = React.useState([]);
	const [checked, setChecked] = React.useState([]);
	const [page, setPage] = React.useState(1);
	const [selectedValue, setSelectedValue] = React.useState({
		radioPrice: '',
		radioSize: '',
		radioSort: '',
		radioType: '',
		// radioDanhMuc: []
	});
    React.useEffect(() => {
        (async () => {
          try {
			let {radioPrice, radioSize, radioSort, radioType} = selectedValue;
			radioPrice 	= radioPrice.split('-');
			radioSize 	= radioSize.split('-');

			let _fromPrice = '', _toPrice='', _fromSize = '', _toSize = '';

			if(radioPrice.length > 1){
				if (radioPrice[0] !== '*' ) _fromPrice = radioPrice[0];
				if (radioPrice[1] !== '*' ) _toPrice = radioPrice[1];
			}

			if(radioSize.length > 1){
				if (radioSize[0] !== '*' ) _fromSize = radioSize[0];
				if (radioSize[1] !== '*' ) _toSize = radioSize[1];
			}
			let arrDanhMuc = []
			checked?.map((data)=>{
				 arrDanhMuc.push(Number(data))
				 return arrDanhMuc
			})
			if(!_danhmuc) _danhmuc = arrDanhMuc;

			
            const res = await getData(
              API_BASE_URL + `/sanpham/tatca?category=${_danhmuc}&&_fromPrice=${_fromPrice}&&_toPrice=${_toPrice}&&_fromSize=${_fromSize}&&_toSize=${_toSize}&&sort=${radioSort}&&type=${radioType}&&pageURL=${page}`,
            );
			const resDanhMuc = await getData(API_BASE_URL + `/danhmuc`);
			setDataDanhMuc(resDanhMuc.data)
            setDatas(res.data);
			console.log(res.data);
          } catch (e) {
            console.log(e);
          }
        })();
      }, [_danhmuc,page, _load,selectedValue.radioDanhMuc, selectedValue.radioPrice, selectedValue.radioSize, selectedValue.radioSort, selectedValue.radioType]);

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

	const handleCheckBox = (event) => {
		var updatedList = [...checked];
		if (event.target.checked) {
		  updatedList = [...checked, event.target.value];
		} else {
		  updatedList.splice(checked.indexOf(event.target.value), 1);
		}
		setChecked(updatedList);
	}

	return (
		<>
			<Box className="wrapper-product-detail wrapper-news">
				<Box sx={{ width: '100%', display: { xs: 'none', sm: 'inline-block' } }}>
					<div className="breadcrumb_background">
						<div className="title_full">
							<div className="container a-center">
								<Typography sx={{ display: { sm: 'none', md: 'inline-block' } }} className="title_page">Tin Th??? tr?????ng</Typography>
							</div>
						</div>
					</div>
				</Box>
				<Container sx={{ pt: { xs: 0, sm: 5 }, top: '160px', position: { xs: 'absolute', sm: 'unset' } }}>
					<Typography sx={{ display: { xs: 'inline-block', sm: 'none' } }} variant="h5" className="product-title">TP. H??? CH?? MINH</Typography>
					<Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb" className="breadcrumb">
						<Link to="/" className="tag-a">Trang ch???</Link>
						{/* <Link to="#" className="tag-a active"></Link> */}
					</Breadcrumbs>
					<Grid className="news-write-info" container direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 5 }} sx={{ my: 3 }}>
						<Grid item xs={12} md={3} order={{ xs: 2, md: 1 }} sx={{display: {xs: 'none', md: 'inline-block'}}}>
							<Box className="search-products">
								<Box>
									{!_danhmuc && (
										<>
											<Typography className="title" variant="h6">Tin li??n quan</Typography>

										<ul className="news-category search-Radio">
										{
											dataDanhMuc.map((danhmuc, index) => {
												return (
													<>
														<li>
															<FormGroup>
																<FormControlLabel value={danhmuc.dm_id} control={
																			<Checkbox  size="small" name="price[]" 
																				onChange={(e)=>{
																					handleCheckBox(e)
																					setLoad(e=>e+1);
																				}}
																			/>
																} label={danhmuc.dm_ten} />
															</FormGroup>
															
														</li>
													</>
													
												)
											})
										}
									</ul>
									</>
									)}
								</Box>
								<Box>
									<Typography className="title" variant="h6">Ch???n m???c gi??</Typography>
									<ul className="news-category search-Radio">
										<RadioGroup
											aria-labelledby="demo-error-radios"
											name="radio-price"
											value={selectedValue.radioPrice}
											onChange={(e)=>{
												setSelectedValue(pre => ({...pre, radioPrice: e.target.value}))
											}}
										>
											<li><FormControlLabel value="*-100000000" control={<Radio size="small" name="price" />} label=" Gi?? d?????i 100.000.000??" /></li>
											<li>
												<FormControlLabel value="100000000-200000000" control={<Radio size="small" name="price" />} label="100.000.000?? - 200.000.000??" />
											</li>
											<li>
												<FormControlLabel value="200000000-300000000" control={<Radio size="small" name="price" />} label="200.000.000?? - 300.000.000??" />
											</li>
											<li>
												<FormControlLabel value="300000000-500000000" control={<Radio size="small"  name="price" />} label="300.000.000?? - 500.000.000??" />
											</li>
											<li>
												<FormControlLabel value="500000000-1000000000" control={<Radio size="small"  name="price"/>} label="500.000.000?? - 1.000.000.000??" />
											</li>
											<li>
												<FormControlLabel value="1000000000-*" control={<Radio size="small" name="price" />} label="Gi?? tr??n 1.000.000.000??" />
											</li>
										</RadioGroup>
									</ul>
								</Box>
								<Box>
									<Typography className="title" variant="h6">Ch???n di???n t??ch</Typography>
									<ul className="news-category search-Radio">
										<RadioGroup
											aria-labelledby="demo-error-radios"
											name="radio-size"
											value={selectedValue.radioSize}
											onChange={(e)=>{
												setSelectedValue(pre => ({...pre, radioSize: e.target.value}))
											}}
										>
											<li><FormControlLabel value="20-50" control={<Radio size="small" name="size" />} label=" T??? 20 - 50 m2" /></li>
											<li>
												<FormControlLabel value="50-90" control={<Radio size="small" name="size" />} label=" 50 - 90 m2" />
											</li>
											<li>
												<FormControlLabel value="90-120" control={<Radio size="small" name="size" />} label="90 - 120 m2" />
											</li>
											<li>
												<FormControlLabel value="120-160" control={<Radio size="small"  name="size" />} label=" 120 - 160 m2" />
											</li>
											<li>
												<FormControlLabel value="160-*" control={<Radio size="small"  name="size"/>} label=" Tr??n 160 m2" />
											</li>
										</RadioGroup>
									</ul>
								</Box>
								<Box>
									<Typography className="title" variant="h6">Lo???i tin rao</Typography>
									<ul className="news-category search-Radio">
										<RadioGroup
											aria-labelledby="demo-error-radios"
											name="radio-type"
											value={selectedValue.radioType}
											onChange={(e)=>{
												setSelectedValue(pre => ({...pre, radioType: e.target.value}))
											}}
										>
											<li>
												<FormControlLabel value="1" control={<Radio size="small"  name="type"/>} label=" Nh?? ?????t - B??n" />
											</li>
											<li>
												<FormControlLabel value="2" control={<Radio size="small"  name="type"/>} label=" Nh?? ?????t - Thu??" />
											</li>
										</RadioGroup>
									</ul>
								</Box>
								<Box>
									<Typography className="title" variant="h6">Danh m???c tin t???c</Typography>
									<ul className="news-category">
										<li className="li-category-intro"><Link to="/" className="tag-a">Trang ch???</Link></li>
										<li className="li-category-intro"><Link to="/tat-ca-san-pham" className="tag-a">T???t c??? s???n ph???m</Link></li>
										<li className="li-category-intro"><Link to="/gioi-thieu" className="tag-a">Gi???i thi???u</Link> </li>
									</ul>
								</Box>
							</Box>
						</Grid >
						<Grid item xs={12} md={9} order={{ xs: 1, md: 2 }}>
							<Box className="search-result">
								<img className="rounded" width="100%" src={thumbnail_category} alt="" />
								<Stack sx={{ display: { xs: 'none', md: 'flex' }, mt: 2 }} direction="row" spacing={2} alignItems="center">
									<small>??u ti??n xem:</small>
									{/* <small><Radio size="small" name="sort" value={3} /> Gi?? t??ng d???n</small>
									<small><Radio size="small" name="sort" value={4} /> Gi?? gi???m d???n</small> */}
									<RadioGroup
										aria-labelledby="demo-error-radios"
										name="radio-sort"
										value={selectedValue.radioSort}
										onChange={(e)=>{
											setSelectedValue(pre => ({...pre, radioSort: e.target.value}))
										}}
										sx={{display: "inline-block"}}
									>
											<small>
												<FormControlLabel value="ASC" control={<Radio size="small" name="sort" />} label=" Gi?? t??ng d???n " />
											</small>
											<small>
												<FormControlLabel value="DESC" control={<Radio size="small"  name="type"/>} label=" Gi?? gi???m d???n" />
											</small>
									</RadioGroup>
								</Stack>

								<Select sx={{ display: { xs: 'inline-block', md: 'none' }, mt: 2 }} labelId="demo-select-small" size="small" value={sort} label="Sort" onChange={handleChange} >
									<MenuItem value={0}> <em>S???p x???p theo</em> </MenuItem>
									<MenuItem value={3}>Gi?? t??ng d???n</MenuItem>
									<MenuItem value={4}>Gi?? gi???m d???n</MenuItem>
								</Select>
								<Divider sx={{ my: 2 }} light />
                				<Grid container spacing={2} sx={{mt: 5, backgroundColor: "#f6f7f9" }}>
								{/* backgroundColor: "#f6f7f9" */}
									{
										datas.map((product, index) => {
											return (
												<Grid key={index} item xs={12} md={6} lg={4}>
													<Box sx={{ width: '100%'}}>
														<Product product={product}></Product>
													</Box>
												</Grid>
											)
										})
									}
								</Grid>
							</Box>
							<Box mt={4} display='flex' justifyContent='center'>
								<Button variant='contained' onClick={() => setPage(e => e + 1)}>Xem th??m</Button>
							</Box>
						</Grid>
						<Grid tem xs={12}>
							<Button sx={{display: {xs: 'inline-block', md: 'none'}}} className="btn btn-open-drawer" onClick={toggleDrawer(true)}><PlaylistAddCheckIcon sx={{fontSize: '25px'}}></PlaylistAddCheckIcon></Button>
							{/* <Drawer
								anchor="right"
								open={openDrawer}
								onClose={toggleDrawer(false)}
							>
								<Box className="search-products">
									<Box sx={{width: '100%', display: 'flex', justifyContent: 'flex-end', mt: 1}}><Button onClick={toggleDrawer(false)}><CloseIcon></CloseIcon></Button></Box>
									<Box>
										<Typography className="title" variant="h6">Tin li??n quan</Typography>
										<ul className="news-category search-Radio">
											<li><Radio size="small" name="category" /> Bi???t Th???</li>
											<li><Radio size="small" name="category" /> C??n h???</li>
										</ul>
									</Box>
									<Box>
										<Typography className="title" variant="h6">Ch???n m???c gi??</Typography>
										<ul className="news-category search-Radio">
											<li><Radio size="small" name="price" /> Gi?? d?????i 100.000.000??</li>
											<li><Radio size="small" name="price" /> 100.000.000?? - 200.000.000??</li>
											<li><Radio size="small" name="price" /> 200.000.000?? - 300.000.000??</li>
											<li><Radio size="small" name="price" /> 300.000.000?? - 500.000.000??</li>
											<li><Radio size="small" name="price" /> 500.000.000?? - 1.000.000.000??</li>
											<li><Radio size="small" name="price" /> Gi?? tr??n 1.000.000.000??</li>
										</ul>
									</Box>
									<Box>
										<Typography className="title" variant="h6">Ch???n di???n t??ch</Typography>
										<ul className="news-category search-Radio">
											<li><Radio size="small" name="size" /> T??? 20 - 50 m2</li>
											<li><Radio size="small" name="size" /> 50 - 90 m2</li>
											<li><Radio size="small" name="size" /> 90 - 120 m2</li>
											<li><Radio size="small" name="size" /> 20 - 160 m2</li>
											<li><Radio size="small" name="size" /> Tr??n 160 m2</li>
											<li><Radio size="small" name="size" /> D?????i 20 m2</li>
										</ul>
									</Box>
									<Box>
										<Typography className="title" variant="h6">Lo???i tin rao</Typography>
										<ul className="news-category search-Radio">
											<li><Radio size="small" name="type" /> Nh?? ?????t - B??n</li>
											<li><Radio size="small" name="type" /> Nh?? ?????t - Thu??</li>
										</ul>
									</Box>
									<Box>
										<Typography className="title" variant="h6">Danh m???c tin t???c</Typography>
										<ul className="news-category">
											<li><Link to="#" className="tag-a">Trang ch???</Link></li>
											<li><Link to="#" className="tag-a">T???t c??? tin rao</Link><KeyboardArrowDownIcon /> </li>
											<li><Link to="#" className="tag-a">Tin t???c</Link><KeyboardArrowDownIcon /> </li>
											<li><Link to="#" className="tag-a">Gi???i thi???u</Link> </li>
											<li><Link to="#" className="tag-a">Li??n h???</Link></li>
										</ul>
									</Box>
									<Box sx={{ textAlign: 'center' }} >
										<img style={{ width: '200px' }} alt="" src={thumbnail_category2} />
									</Box>
								</Box>
							</Drawer> */}
						</Grid>
					</Grid >
				</Container>
			</Box>
		</>
	)
}
