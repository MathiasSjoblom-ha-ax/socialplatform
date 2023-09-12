import {React, useEffect, useState} from 'react'
import "./Post.css"
import SvgLike from '../../Svgicons/Like'
import {format} from "timeago.js"

export default function Post({post}) {


const [like, setLike] = useState(post.like);
const [liked, setLiked] = useState(false);
const [user, setUser] = useState({});

//Hämta användare med ID
useEffect(() => {
  const fetchUsers = async () => {
      try {
          const response = await fetch(`/users?userId=${post.userId}`);
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setUser(data);
          {/* console.log(data); */}
      } catch (error) {
          console.error("Error fetching users:", error);
      }
  }
  fetchUsers();
}, [post.userId]);

//Gilla post
const likeFunction = () => {
  setLike(liked ? like-1 : like+1) //Om redan gillad sänk med ett annars öka med ett
  if(liked) { //Ändra liked status true -> false eller false -> true
    setLiked(false);
  } else {
    setLiked(true);
  }
}

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="topPart">
                <img className="postAvatar" src={user.avatar || "./assets/images/Avatar.png"}/>
                <span className="postName">{user.username}</span>
                <span className="postDate">{format(post.createdAt)}</span> {/* Timeago library för att hämta skapad tid av post */}
            </div>
            <div className="middlePart"></div>
                <img className="postImage" src={"./assets/images/"+post.image}/>
                <span className="postText">{post.description}</span>
            <div className="bottomPart">
                    {/* <img className="likeIcon" src="./assets/images/like.png" onClick={likeFunction}/> */}
                    <SvgLike onClick={likeFunction}/>
                    <span className="likeCount">{post.likes.length}</span>
                    <span className="commentCount"> 0 comments</span>
            </div>
        </div>
        <hr className="efterLine"/>
    </div>
  )
}
