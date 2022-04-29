import { Box, Fab, IconButton, Modal, Typography, styled, Avatar, TextField, Stack } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Sentiment from '@mui/icons-material/SentimentSatisfiedAlt';
// import styled from '@emotion/styled/types/base';
import lobo from '../assets/img/avatar/lobo_.jpg'

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom: "20px"
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return(
    <>
      <Tooltip onClick={e=>setOpen(true)} title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(48%)", md:30}}}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="antiquewhite" p={3} borderRadius={5}>
          <Typography variant="h6" color="darkslategrey" textAlign="center">
            Publicación nueva
          </Typography>
          <UserBox>
            <Avatar src={lobo} sx={{width: 30, height:30}} />
            <Typography fontWeight={500} variant="span">Mr. Lobo</Typography>
          </UserBox>
          <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="Ingrerse un comentario"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={3}>
        <EmojiPeopleIcon color="error"/>
        <EmojiEmotionsIcon color="secondary" />
        <Sentiment color="success"/>
        </Stack>
        </Box>
      </StyledModal>
    </>    
  )
}
export default Add;