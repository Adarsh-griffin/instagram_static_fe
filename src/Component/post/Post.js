import React from "react";
import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import Postdata from "../post.json";
import StoryData from "../../story.json";

const Post = () => {
  return (
    <div className="Post">
      {Postdata.Post.map((item) => {
        const storyImage = StoryData.story.find((s) => s.postid == item.id);
        console.log("STORY I,G", storyImage.img);

        return (
          <div className="PostContainer" key={item.id}>
            <div className="PostInfo">
              <img className="PostInfoImg" src={storyImage?.img} />
              <div className="PostInfouserName">{item.name}</div>
              <div className="PostInfoTime">. {item.time} </div>
            </div>
            <div className="PostImg">
              <img className="PostImage" src={item.postimage} alt="post" />
            </div>
            <div className="IconsBlock">
              <div className="LeftIcon">
                <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
                <ChatBubbleOutlineIcon sx={{ fontSize: "30px" }} />
                <SendIcon sx={{ fontSize: "30px" }} />
              </div>
              <div>
                <BookmarkBorderIcon sx={{ fontSize: "30px" }} />
              </div>
            </div>

            <div className="LikeSection">
              <div className="ImagesLike">
                <img
                  className="likeimg"
                  src="https://th.bing.com/th/id/OIP.1KyOvA96EuWPGa3c7HJBEwHaNK?pid=ImgDet&w=184&h=327&c=7&dpr=1.3"
                />
                <img
                  className="likeimg2"
                  src="https://th.bing.com/th/id/OIP.1KyOvA96EuWPGa3c7HJBEwHaNK?pid=ImgDet&w=184&h=327&c=7&dpr=1.3"
                />
              </div>
              <div className="NoofLikes">{item.NoofLikes} Likes</div>
            </div>
            <div className="PostAbout">
              <div className="Username">{item.name}</div>
              <div className="comment"> {item.comment} </div>
            </div>
            <div className="NOOFCOMMENTS">View all 69 comments</div>
            <div className="ADDCOMMENT">Add a comment...</div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
