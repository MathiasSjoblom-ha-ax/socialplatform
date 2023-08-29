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
            try {
                const response = await fetch("posts/feed/632276de3c6f65d41493b950");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                //setPosts(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchPosts();
    }, []);
    

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