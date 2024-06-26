import {React, useState} from 'react';
import {Fab, Tooltip, Box, Modal, styled, Stack, Avatar,TextField, Typography, ButtonGroup, Button} from '@mui/material/'
import {Add as AddIcon, DateRange, DisplaySettings} from '@mui/icons-material/'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';



const StyledModal = styled(Modal)({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled(Box)({
    display:"flex",
    alignItems: "center",
    gap:"10px",
    marginBottom:"20px"
})

const Add = () => {

    const [open, setOpen] = useState(false);
    return(
       <>
       <Tooltip onClick={e => setOpen(true)}
       title="Add Posts" 
       sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}>
        <Fab color='primary' aria-label='add'>
             <AddIcon/>
        </Fab>
       </Tooltip>

       <StyledModal
  open={open}
  onClose= {e => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={500} height={350} bgcolor={"backgraound.default"} color={"text.primary"} p={3} borderRadius={5}>
      <Typography varient='h6' color="gray" textAlign="center">Create Posts</Typography>

      <UserBox>
        <Avatar
        src="/img/avatar.jpg"
        sx={{width:30, height:30}}
        />
      <Typography fontWeight={500} varient="span" pl={1}>Pamela</Typography>

      </UserBox>

      <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />

        <Stack direction="row" gap={1} mt={2} mb={3}>
          <EmojiEmotionsIcon color='primary'/>
          <ImageIcon color='secondary'/>
          <VideoCameraBackIcon color='success'/>
          <PersonAddIcon color='error'/>
        </Stack>

        <ButtonGroup 
        fullWidth
        variant="contained" aria-label="Basic button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
  </Box>
</StyledModal>
       </>
    )
}

export default Add;