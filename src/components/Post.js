import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography
} from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import lobo from '../assets/img/avatar/lobo_.jpg';
import lobo2 from "../assets/img/avatar/lobo-2.jpg";
import { FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <div>
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
        <CardMedia component="img" height="20%" image={lobo2} alt="Lobo" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Mas de el grandioso cazarecompenzas Kzarniano Lobo
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
    </div>
  );
};

export default Post;
