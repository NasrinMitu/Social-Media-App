import React from 'react'
import {Box, ListItemText, List, ListItem, ListItemButton, ListItemIcon, } from '@mui/material/';
import {Home} from '@mui/icons-material/';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Sidebar = () => {
    return (
        <Box 
        flex={1} 
        p={2}
        sx={{display:{xs:'none', sm:'block'}}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton components="a" href="#home">
              <ListItemIcon>
              <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton components="a" href="#home">
              <ListItemIcon>
              <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton components="a" href="#groups">
              <ListItemIcon>
              <GroupsIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton components="a" href="#marketplace">
              <ListItemIcon>
              <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton components="a" href="#friends">
              <ListItemIcon>
              <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton components="a" href="#settings">
              <ListItemIcon>
              <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton components="a" href="#profile">
              <ListItemIcon>
              <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    )
}

export default Sidebar