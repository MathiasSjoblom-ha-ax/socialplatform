import { useEffect, useState } from "react"
import "./Feed.css"
import Post from "./Post/Post"
import Postbox from "./Postbox/Postbox"
import {Posts} from "../../testData"

export default function Feed({username}) {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = username ? await fetch("posts/profile/" + username) : await fetch("posts/feed/632276de3c6f65d41493b950");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPosts(data);
                {/* console.log(data); */}
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchPosts();
    }, [username]);
    

    const FeedVersion = () => {
        return (
            <div className="feed">
            <div className="postWrapper">
                <Postbox/>
                <div className="posts">
                    {posts.map(pst=> (
                        <Post key={pst._id} post={pst}/>
                    ))}
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
                {<FeedVersion/>}
            </div>
        </div>
    )
}