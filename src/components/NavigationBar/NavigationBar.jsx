import "./NavigationBarStyle.css"
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div className="NavContainer">
                <div className="leftPart">
                    <div className="searchBox">
                    <input placeholder="Search" className="searchInput"/>
                </div>
                </div>
            <div className="centerPart">
                <div class="vl"/>
                <Link to="/">
                    <span className="logo">Media</span>
                </Link>
                <div class="vl2"/>
            </div>
                <div className="rightPart">
                    <img className="friend" src="/assets/images/friend.png"/>
                    <img className="chat" src="/assets/images/chat.png"/>
                    <img className="notifications" src="/assets/images/notifications.png"/>
                    <img className="NavAvatar" src="/assets/images/Avatar.png"/>
                </div>
        </div>
    );
}