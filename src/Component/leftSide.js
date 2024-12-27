import "./leftSide.css";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import instagramLogo from "../assests/instagram-name-logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddBoxIcon from "@mui/icons-material/AddBox";
import profileimage from "../assests/profile-img.jpg";
import GestureIcon from "@mui/icons-material/Gesture";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { responsiveFontSizes } from "@mui/material";
import { Brightness1 } from "@mui/icons-material";

const LeftSide = () => {
  return (
    <div className="leftSidePart">
      <div className="logoPart">
        <img className="logoimg" src={instagramLogo} alt="Instagram" />
      </div>
      <div className="navLinkPart">
        <div className="navLinks">
          <HomeIcon sx={{ fontSizes: "35px", margin: "0 20px 0 0"}} />
          <div className="navName"> Home </div>
        </div>
        <div className="navLinks">
          <ExploreIcon sx={{ fontSizes: "35px", margin: "0 20px 0 0" }} />
          <div className="navName"> Explore </div>
        </div>
        <div className="navLinks">
          <LiveTvIcon sx={{ fontSizes: "35px", margin: "0 20px 0 0" }} />
          <div className="navName">Reels </div>
        </div>
        <div className="navLinks">
          <ChatIcon sx={{ fontSizes: "35px", margin: "0 20px 0 0" }} />
          <div className="navName"> Messages </div>
        </div>
        <div className="navLinks">
          <FavoriteBorderIcon
            sx={{ fontSizes: "35px", margin: "0 20px 0 0" }}
          />
          <div className="navName"> Notifications </div>
        </div>
        <div className="navLinks">
          <AddBoxIcon sx={{ fontSizes: "35px", margin: "0 20px 0 0" }} />
          <div className="navName"> Create </div>
        </div>
        <div className="navLinks">
          <img className="profileimg" src={profileimage} alt="profileimage" />
          <div className="navName"> Profile </div>
        </div>
        <div className="bellowparts">
          <div className="navLinks">
            <GestureIcon sx={{ fontSizes: "35px", margin: "0 20px 0 0" }} />
            <div className="navName"> Threads </div>
          </div>
          <div className="navLinks">
            <DensityMediumIcon
              sx={{ fontSizes: "35px", margin: "0 20px 0 0" }}
            />
            <div className="navName"> More </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
