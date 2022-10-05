import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Pannellum } from "pannellum-react";
import myImage from "../../../../public/images/download";
import './index.scss';

export default function DialogListImage({ open, handleClickCloseDialog, listProduct }) {
    const [imgActive, setImgActive] = React.useState(0);
    const firstProduct = myImage;
    const [imgSrc, setImgSrc] = React.useState(firstProduct.image);

    const setImgThumbSrc = (imgSrc, index) => {
        setImgActive(index);
        setImgSrc(imgSrc);
    }

    return (
        <React.Fragment>
            
            <Dialog
                fullWidth={true}
                maxWidth="md"
                open={open}
                className="dialog-product-image-list"
                sx={{height: '100%'}}
            >
                <DialogTitle>Cho thuê căn hộ, biệt thự cao cấp</DialogTitle>
                <DialogContent>
                    <DialogContentText className="dialog-content">
                        <Box sx={{position: 'relative'}}>
                                <Pannellum
                                    width="100%"
                                    height="500px"
                                    image={
                                        imgSrc
                                    }
                                    pitch={10}
                                    yaw={180}
                                    hfov={110}
                                    autoLoad
                                    showZoomCtrl={false}
                                >
                                </Pannellum>
                            {/* <img className="img-thumb" alt="" src={imgSrc}></img> */}
                            <Box className="list-img">
                                {listProduct.map((product, index) => {
                                    const active = index === imgActive ? 'active' : '';
                                    return (
                                        <img key={index} onClick={() => {setImgThumbSrc(product.image, index)}} className={active} src={product.image} alt="" />
                                    );
                                })}
                            </Box>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClickCloseDialog}>Đóng</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
