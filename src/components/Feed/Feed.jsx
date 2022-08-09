import "./Feed.css"
import Post from "./Post/Post"
import Postbox from "./Postbox/Postbox"

export default function Feed() {
    return (
        <div className="post">
            <div className="postWrapper">
                <Postbox/>
                <div className="posts">
                    <Post/>
                </div>
            </div>
        </div>
    )
}