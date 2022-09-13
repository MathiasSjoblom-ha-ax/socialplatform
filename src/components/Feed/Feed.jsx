import "./Feed.css"
import Post from "./Post/Post"
import Postbox from "./Postbox/Postbox"

export default function Feed({profile}) {

    const FeedVersion = () => {
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

    const ProfileVersion = () => {
        return (
        <div className="feed">
            <hr className="efterLine"/>
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
        )
    }
    
    return (
        <div className="feed">
            <div className="postWrapper">
                {profile ? <ProfileVersion/> : <FeedVersion/>}
            </div>
        </div>
    )
}