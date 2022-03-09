import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const MusicCard = (props) => {
    return (
        <div className='card'>
            <Card sx={{maxWidth: 250, minWidth: 250}}>
                <CardActionArea>
                    <CardMedia 
                    component='img'
                    height='140'
                    img="http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png"
                    alt="album image"
                >
                </CardMedia>
                <CardContent>
                    <Typography variant='body1'>
                        {}
                    </Typography>
                    <Typography variant='body2'>
                    Nom de l'album :""
                    </Typography>
                    <Typography variant='body2'>
                    Nom de l'artiste : ""
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small'>Ajouter au panier</Button>
                </CardActions>
                
            </Card>
        </div>
    );
};

export default MusicCard;