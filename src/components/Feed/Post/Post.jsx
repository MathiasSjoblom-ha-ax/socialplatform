import {React, useEffect, useState} from 'react'
import "./Post.css"
import SvgLike from '../../Svgicons/Like';
import {Users} from "../../../testData";

export default function Post({post}) {

const [like, setLike] = useState(post.like);
const [liked, setLiked] = useState(false);

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
                <img className="postAvatar" src="./assets/images/Avatar.png"/>
                <span className="postName">{Users.filter(user=>user.id === post.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="middlePart"></div>
                <img className="postImage" src={post.image}/>
                <span className="postText">{post.description}</span>
            <div className="bottomPart">
                    {/* <img className="likeIcon" src="./assets/images/like.png" onClick={likeFunction}/> */}
                    <SvgLike onClick={likeFunction}/>
                    <span className="likeCount">{like}</span>
                    <span className="commentCount"> 0 comments</span>
            </div>
        </div>
        <hr className="efterLine"/>
    </div>
  )
}
