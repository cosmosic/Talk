import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import StyledBadge from "./StyledBadge";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";

const CallLogElement = ({
  id,
  name,
  image,
  msg,
  time,
  unread,
  online,
  incoming,
  outgoing,
  missed,
}) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone color="green" />
          </IconButton>
          <Stack spacing={2} alignItems="center">
            <Typography sx={{ fontWeight: 600 }} variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}></Badge>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = ({
  id,
  name,
  image,
  msg,
  time,
  unread,
  online,
  incoming,
  outgoing,
  missed,
}) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.name.fullName()}
                />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.name.fullName()} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:24</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack  direction={"row"} alignItems={"center"}>
          <IconButton>
            <Phone color="green" />
          </IconButton>
          <IconButton>
            <VideoCamera color="green" />
          </IconButton>
          </Stack>

          <Stack spacing={2} alignItems="center">
            <Typography sx={{ fontWeight: 600 }} variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}></Badge>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export { CallLogElement, CallElement };
