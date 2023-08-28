import { useEffect, useState } from "react"
import "./Feed.css"
import Post from "./Post/Post"
import Postbox from "./Postbox/Postbox"
import {Posts} from "../../testData"
import axios from "axios"

export default function Feed() {
    
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get("posts/feed/6322746ec3bd0b60850de615");
            //setPosts(response.data);
            console.log(response);
        }
        fetchPosts();
    }, [])
    

    const FeedVersion = () => {
        return (
            <div className="feed">
            <div className="postWrapper">
                <Postbox/>
                <div className="posts">
                    {Posts.map(pst=> (
                        <Post key={pst.id} post={pst}/>
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