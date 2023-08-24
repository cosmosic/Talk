import React, { useState } from 'react'
// import ChatElement from '../../components/ChatElement';
import { Divider, Stack, Typography, Box, IconButton, Link, useTheme } from '@mui/material';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import Search from "../../components/search/Search";
import SearchIconWrapper from "../../components/search/SearchIconWrapper";
import StyledInputBase from "../../components/search/StyledInputBase";
import { CallLogElement } from '../../components/CallElement';
import { CallLogs } from '../../data';
import StartCall from '../../sections/main/StartCall';

const Call = () => {
    const theme = useTheme();
    const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
    <Stack direction={"row"} spacing={""} sx={{ width: "100%" }}>
      {/* Left side */}
      <Box
        sx={{
          height: "100vh",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background,
          width: 320,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Typography variant="h5">Call Logs</Typography>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709ce6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography variant="subtite2" component={Link}>
              Start New Conversation
            </Typography>
            <IconButton
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              <Plus style={{ color: theme.palette.primary.main }} />
            </IconButton >
          </Stack>
          <Divider />
          <Stack
            spacing={3}
            direction="column"
            sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.5}>
               
                {/* Call history */}
                {CallLogs.map((el) => <CallLogElement {...el}  />)}
                
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>

      {/* Right side */}

      {/* Reuse conversation component */}
    </Stack>
   {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog} />}
  </>
  )
}

export default Call