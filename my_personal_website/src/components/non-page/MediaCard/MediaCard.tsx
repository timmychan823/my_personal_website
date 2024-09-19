import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345, marginRight: "10px", display: "inline-block", bgcolor: "#964B00" }}>
            <CardMedia
                component="img"
                sx={{ height: 192 }}
                image='images/image_0005.jpg'
                title="Flower Classification"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Flower Classification
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This is a machine learning project which aims to explore the capabilities of different machine learning architectures eg. AlexNet, ResNet, VGG, vision transformer and swin transformer on classifying flowers into correct categories.
                </Typography>
            </CardContent>
            <CardActions>
                <a href="https://github.com/Chanchinhung/COMP3340Project">Learn More</a>
            </CardActions>
        </Card>
    );
}
