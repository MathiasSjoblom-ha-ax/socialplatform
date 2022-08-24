import React from 'react'
import "./Profile.css"
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import Adbar from '../../components/Adbar/Adbar'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

export default function Profile() {
  return (
    <div>
        <NavigationBar/>
        <div className='profileContainer'>
            <Sidebar/>
            <div className='profileMid'>
                <div className='profileMidTop'>
                    <div className='profileImages'>
                        <img className="profileCover" src="./assets/images/Post.png"/>
                        <img className="profileAvatar" src="./assets/images/Avatar.png"/>
                        <div className='profileButtons'>
                            <div class="dropdown">
                                <button class="dropbtn">More</button>
                                <div class="dropdown-content">
                                    <a href="#">Report</a>
                                    <a href="#">Block</a>
                                    <a href="#">Share Profile</a>
                                </div>
                            </div>
                            <button className='followButton'>Follow</button>
                        </div>
                    </div>
                    <div className='profileDescription'>
                        <h4 className='profileName'>Nicolas Cage</h4>
                        <div className='profileDescriptionText'>Hello and welcome to my profile</div>
                        <div className='profileFollowStats'>
                            <div className='profileFollowerCount'>
                                <span className='followersText'>Followers:</span>
                                <span className='followersCount'>0</span>
                            </div>
                            <div className='profileFollowingCount'>
                                <span className='followingText'>Following:</span>
                                <span className='followingCount'>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profileBot'>
                    <Feed/>
                    <Adbar/>
                </div>
            </div>
        </div>
    </div>
  )
}
