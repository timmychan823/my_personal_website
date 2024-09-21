import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';

export default function MediaCard(props) {

    const { cardImage, titleOfCardImage, titleOfDescription, paragraghOfDescription, link } = props
    let choppedParagraghOfDescription = paragraghOfDescription
    if (paragraghOfDescription.length >= 247) {
        choppedParagraghOfDescription = paragraghOfDescription.substring(0, 247) + "..."
        console.log(choppedParagraghOfDescription.length)
        console.log(choppedParagraghOfDescription)
    }
    return (
        <Card sx={{ position: "relative", width: 345, height: 400, marginBottom: "20px", marginRight: "20px", display: "inline-block", bgcolor: "#0099ff" }}>

            <Tooltip title={titleOfCardImage} followCursor>
                <CardMedia
                    component="img"
                    sx={{ height: 192 }}
                    image={cardImage}
                // title={titleOfCardImage}
                />
            </Tooltip>

            <CardContent sx={{ minHeight: 160, maxHeight: 160, overflow: "hidden" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {/* Flower Classification */}
                    {titleOfDescription}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text-secondary', overflow: "hidden", textOverflow: "ellipsis" }} >
                    {/* This is a machine learning project which aims to explore the capabilities of different machine learning architectures eg. AlexNet, ResNet, VGG, vision transformer and swin transformer on classifying flowers into correct categories. */}
                    {choppedParagraghOfDescription}
                </Typography>
            </CardContent>
            <CardActions sx={{ position: "absolute", left: 0, bottom: 0 }}>
                <Button sx={{ color: "blue", textDecoration: "underline" }} size="small" href={link}>Learn More</Button>
            </CardActions>

        </Card>
    );
}
