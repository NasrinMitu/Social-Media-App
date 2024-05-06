import {React, useState} from 'react'
import {AppBar, Menu, MenuItem, Avatar, Badge, InputBase, styled, Box, Toolbar, Typography} from '@mui/material/'
import YardIcon from '@mui/icons-material/Yard';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';



const StyledToolbar = styled(Toolbar)(
    {
        display:'flex',
        justifyContent:'space-between'
    }
)

const Search = styled('div') (({theme}) => ({ 
    backgroundColor: 'white',
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"


})) 

// Need to ask about the theme from Mohsin vaiya. 

const Icons = styled(Box) (({theme}) => ({ 
    display:'none',
    gap:'20px',
    alignItems:'center',

    [theme.breakpoints.up("sm")]:{
        display:"flex",
    }
})); 

const UserBox = styled(Box) (({theme}) => ({ 
    display:'flex',
    gap:'10px',
    alignItems:'center',

    [theme.breakpoints.up("sm")]:{
        display:"none",
    }
})) 


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography varient='h6' sx={{display:{xs:'none', sm:'block'}}}>SOCIAL MEDIA</Typography>
                <YardIcon sx={{display:{xs:'block', sm:'none'}}}/>
                <Search><InputBase placeholder='search...'/></Search>
                <Icons>
                <Badge badgeContent={4} color="error">
                <Mail />
                 </Badge>

                 <Badge badgeContent={4} color="error">
                <Notifications />
                 </Badge>
                 <Avatar sx={{width:30,height:30}} src="/img/avatar.jpg" onClick={e=> setOpen(true)} />
                
                </Icons>  

                <UserBox onClick={e=> setOpen(true)}>

                    <Avatar sx={{width:30,height:30}} src="/img/avatar.jpg"/>
                    <Typography varient="span">Mitu</Typography>
                </UserBox>         
            </StyledToolbar>  

            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        // onClose={handleClose}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>

    )
}

export default Navbar