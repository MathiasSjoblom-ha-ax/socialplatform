import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from "react-router"
import "./Profile.css"
import Feed from '../../components/Feed/Feed'
import Sidebar from '../../components/Sidebar/Sidebar'
import Adbar from '../../components/Adbar/Adbar'
import NavigationBar from '../../components/NavigationBar/NavigationBar'

export default function Profile() {
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`/users?username=${username}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
      }, [username]);

  return (
    <div>
        <NavigationBar/>
        <div className='profileContainer'>
            <Sidebar user={user}/>
            <div className='profileMid'>
                <div className='profileMidTop'>
                    <div className='profileImages'>
                        <img className="profileBanner" src={user.banner || "../assets/images/Post.png"}/>
                        <img className="profileAvatar" src={user.avatar || "../assets/images/Avatar.png"}/>
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
                        <h4 className='profileName'>{user.username}</h4>
                        <div className='profileDescriptionText'>{user.description}</div>
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
                    <Feed username={username}/>
                    <Adbar/>
                </div>
            </div>
        </div>
    </div>
  )
}
