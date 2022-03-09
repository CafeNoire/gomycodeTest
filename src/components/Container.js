import React from 'react';

import MusicCard from './MusicCard';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

const Container = (props) => {
    

    return (
        <>
            <div className='container'>
                <MusicCard />
            </div>
            <div className='previous-next'>
                <Box sx={{textAlign:"center" ,pt:5, minWidth:500}}>
                    <IconButton>
                        <ArrowBackIosNewOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <ArrowForwardIosOutlinedIcon/>
                    </IconButton>
                </Box>
            
            </div>
        </>

    );
};

export default Container;