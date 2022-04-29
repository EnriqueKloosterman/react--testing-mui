import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import React from "react";

import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";

import lobo from "../assets/img/avatar/lobo_.jpg";
import { FavoriteBorder } from "@mui/icons-material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box backgroundColor="lightgray" flex={4} p={2}>
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" /*red[500]*/ }} aria-label="recipe">
              KD
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Lobo"
          subheader="September 14, 2016"
        />
        <CardMedia component="img" height="20%" image={lobo} alt="Lobo" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            El grandioso cazarecompenzas Kzarniano Lobo
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Post />
    </Box>
  );
};

export default Feed;
