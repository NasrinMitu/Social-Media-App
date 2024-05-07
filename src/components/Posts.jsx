import React from 'react'
import {Box} from '@mui/material/'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Posts = () => {
    return (
        <Box >
        <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Pamela Lillian"
        subheader="May 6, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image="/img/avatar.jpg"
        alt="Pamela Lillian"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
        demonstrate the visual form of a document or a typeface without relying on meaningful content. 
        Lorem ipsum may be used as a placeholder before the final copy is available.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />

        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
        </Box>
    )
}

export default Posts;