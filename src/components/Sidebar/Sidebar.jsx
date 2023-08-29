import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sbWrapper">
        <ul className="sbList">
            <li className="sbItems">
              <img className="sbItemImage" src="./assets/images/homepage.png"/>
              <span className="sbItemText">Homepage</span>
            </li>
            <li className="sbItems">
              <img className="sbItemImage" src="./assets/images/friend.png"/>
              <span className="sbItemText">My Page</span>
            </li>
            <li className="sbItems">
              <img className="sbItemImage" src="./assets/images/notifications.png"/>
              <span className="sbItemText">Messages</span>
            </li>
            <li className="sbItems">
              <img className="sbItemImage" src="./assets/images/homepage.png"/>
              <span className="sbItemText">Groups</span>
            </li>
        </ul>
        <hr className="line"/>
        <h2 className="followingTitle">Following</h2>
        <ul className="followingList">
            <li className="followingStatus">
                <div className="followingContainer">
                    <img className="followingAvatar" src="./assets/images/friend.png"/>
                    <span className="FollowingName">Nicolas Cage</span>
                </div>
            </li>
            <li className="followingStatus">
                <div className="followingContainer">
                    <img className="followingAvatar" src="./assets/images/friend.png"/>
                    <span className="FollowingName">Nicolas Cage</span>
                </div>
            </li>
            <li className="followingStatus">
                <div className="followingContainer">
                    <img className="followingAvatar" src="./assets/images/friend.png"/>
                    <span className="FollowingName">Nicolas Cage</span>
                </div>
            </li>
            <li className="followingStatus">
                <div className="followingContainer">
                    <img className="followingAvatar" src="./assets/images/friend.png"/>
                    <span className="FollowingName">Nicolas Cage</span>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}
