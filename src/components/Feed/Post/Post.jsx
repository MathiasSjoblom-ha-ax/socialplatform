import React from 'react'
import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="topPart">
                <img className="postAvatar" src="./assets/images/Avatar.png"/>
                <span className="postName">Mathias Sjöblom</span>
                <span className="postDate">20 min ago</span>
            </div>
            <div className="middlePart"></div>
                <img className="postImage" src="./assets/images/Post.png"/>
                <span className="postText">Photo caption</span>
            <div className="bottomPart">
                    <img className="likeIcon" src="./assets/images/like.png"/>
                    <span className="likeCount">0 likes</span>
                    <span className="commentCount"> 0 comments</span>
            </div>
        </div>
        <hr className="efterLine"/>
    </div>
  )
}
