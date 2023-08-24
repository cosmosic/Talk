import { Dialog, DialogContent, DialogTitle, Slide, Stack } from "@mui/material";
import { MagnifyingGlass} from "phosphor-react";
import React from "react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { CallElement } from "../../components/CallElement";
import Search from "../../components/search/Search";
import SearchIconWrapper from "../../components/search/SearchIconWrapper";
import StyledInputBase from "../../components/search/StyledInputBase";
import { MembersList } from "../../data";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{ p: 4 }}
    >
      {/*  */}
      <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
      {/*  */}
      <DialogContent>
      <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
          <Stack sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass color="#709ce6" />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search..." />
            </Search>
          </Stack>
          
          <Stack
            spacing={3}
            direction="column"
            sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
          >
            <SimpleBarStyle timeout={500} clickOnTrack={false}>
              <Stack spacing={2.5}>
               
                {/* Call history */}
                {MembersList.map((el) => <CallElement {... el} />)}
                
                
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default StartCall;
