import React from 'react';
import { Box, Typography} from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import {ImageList, ImageListItem} from '@mui/material/';
import {List, ListItem, Divider, ListItemText, ListItemAvatar} from '@mui/material/';

const Rightbar = () => {
    return (
        <Box
        flex={2} 
        p={2}
        sx={{display:{xs:'none', sm:'block'}}}>
            <Box position="fixed" width={300}>
                <Typography varient="h6" fontWeight={100}>Online Friends</Typography>

                <AvatarGroup max={4}>
                     <Avatar alt="Remy Sharp" src="/img/4.jpg" />
                     <Avatar alt="Travis Howard" src="/img/2.jpg" />
                     <Avatar alt="Cindy Baker" src="/img/3.jpg" />
                     <Avatar alt="Agnes Walker" src="/img/4.jpg" />
                     <Avatar alt="Trevor Henderson" src="/img/4.jpg" />
                </AvatarGroup>

                <Typography varient="h6" fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="/img/avatar2.jpg" alt="avatar" />
                    </ImageListItem>

                    <ImageListItem>
                        <img src="/img/avatar3.jpg" alt="avatar" />
                    </ImageListItem>

                    <ImageListItem>
                        <img src="/img/avatar.jpg" alt="avatar" />
                    </ImageListItem>

                </ImageList>

                <Typography varient="h6" fontWeight={100} mt={2}>Latest Conversations</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/img/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/img/4.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/img/avatar2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Box>
        </Box>
    )
}

export default Rightbar