import "./MiddleSide.css";
import React from "react";
import storyData from "../story.json";
import Post from "../Component/post/Post"




const MiddleSide = () => {
  
  return (
    <div className="MiddleHomeSide">
      <div className="MobileTopBar">
        <div className="InstaLogo">
          <img className="InstaLogoMobile" src="https://th.bing.com/th/id/OIP.gl5Ne0D6qPnFHaDHPWJU2AHaEK?w=304&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        </div>
      </div>

      <div className="POSTAREA">
        <div className="StoryBlock">
          {storyData.story.map((item) => {
            return (
              <div className="StoryParticular" key={item.id}>
                <div className="ImageDiv">
                  <img
                    className="statusimg"
                    src={item.img}
                    alt={item.name} // Added alt attribute
                  />
                </div>
                <div className="ProfileName">{item.name}</div>
              </div>
            );
          })}
        </div>
        <div className="PostSection">
          <Post/>
          <Post/>

        </div>
      </div>
    </div>
  );
};

export default MiddleSide;
