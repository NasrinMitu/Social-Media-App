import React from 'react'
import {AppBar, InputBase, styled, Box, Toolbar, Typography} from '@mui/material/'
import YardIcon from '@mui/icons-material/Yard';

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
    backgroundColor: 'white',
    // padding: ''
})) 


const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography varient='h6' sx={{display:{xs:'none', sm:'block'}}}>SOCIAL MEDIA</Typography>
                <YardIcon sx={{display:{xs:'block', sm:'none'}}}/>
                <Search><InputBase placeholder='search...'/></Search>
                <Icons>icons</Icons>           
            </StyledToolbar>
        </AppBar>

    )
}

export default Navbar