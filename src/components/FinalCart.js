
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Shopcart from './Shopcart';

const FinalCart = () => {
    return (
        <div className='finalcart'>
            <Shopcart/>
            <div className='form'>
                <Box
                component="form"
                sx={{display:'flex', flexDirection:"column", justifyContent:'center', maxWidth:650}}>
                    <TextField required label="Nom" defaultValue="Nom" id="outlined-required" sx={{minWidth:300, maxWidth:650, mb:3 }}>
                    </TextField>
                    <TextField required label="Prénom" defaultValue="Prénom" id="outlined-required" sx={{minWidth:300, maxWidth:650, mb:3  }}>
                    </TextField>
                    <TextField required label="Adresse" defaultValue="Adresse" id="outlined-required" sx={{minWidth:300, maxWidth:650, mb:3  }}>
                    </TextField>
                </Box>
                <Button>Achetez</Button>
            
            </div>
            
        </div>
    );
};

export default FinalCart;