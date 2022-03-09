import { Card, CardContent, IconButton, Typography } from '@mui/material';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import React from 'react';

const Shopcart = () => {
    return (
        <div className='shopcart'>
            <Card sx={{maxWidth: 650, minWidth: 300}}>
                <CardContent>
                    <Typography>
                        <IconButton>
                            <MusicVideoOutlinedIcon/>
                        </IconButton>
                    </Typography>
                    <Typography variant='body2'>
                        Titre de la chanson ""
                    </Typography>
                    <Typography>
                        Prix DZD
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    );
};

export default Shopcart;