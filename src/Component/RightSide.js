import React from "react";
import "./RightSide.css";
import SuggestedData from "./Suggested.json";

const RightSide = () => {
  return (
    <div className="RightSideHome">
      <div className="TopProfileRight">
        <div className="LeftRightProfile">
          <div className="ImageDivRightSide">
            <img
              className="ImageRightSideProfile"
              src="https://th.bing.com/th/id/OIP.aAgZYBAeTrZ1YbpSlvIP9AHaEK?w=301&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="profileimagerightcroner"
            />
          </div>
          <div className="UserNameBlock">
            <div className="UserNameRightSide">griffinn_69</div>
            <div className="UserFullName">Adarsh Dhawale</div>
          </div>
        </div>
        <div className="SwitchButton">switch</div>
      </div>

      <div className="BottomRightSide">
        <div className="SuggestedBlock">
          <div className="SuggestedForYou">Suggested for you</div>
          <div className="SeeAll">See All</div>
        </div>
      </div>

      <div className="MainRIGHT">
        {SuggestedData?.Suggested?.length > 0 ? (
          SuggestedData.Suggested.map((item) => (
            <div className="FollowBlockRightSide" key={item.id}>
              <div className="TopProfileRight">
                <div className="LeftRightProfile">
                  <div className="ImageDivRightSide">
                    <img
                      className="ImageRightSideProfile"
                      src={item.profilepic}
                      alt={`${item.name}'s profile picture`}
                    />
                  </div>
                  <div className="UserNameBlock">
                    <div className="UserNameRightSide">{item.name}</div>
                    <div className="UserFullName">Suggested for you</div>
                  </div>
                </div>
                <div className="SwitchButton">Follow</div>
              </div>
            </div>
          ))
        ) : (
          <div>No Suggestions Available</div>
        )}
      </div>
      
    </div>
  );
};

export default RightSide;
