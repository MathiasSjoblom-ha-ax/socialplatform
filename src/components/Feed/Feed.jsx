import "./Feed.css"
import Post from "./Post/Post"
import Postbox from "./Postbox/Postbox"

export default function Feed() {
    return (
        <div className="feed">
            <div className="postWrapper">
                <Postbox/>
                <div className="posts">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    
                </div>
            </div>
        </div>
    )
}