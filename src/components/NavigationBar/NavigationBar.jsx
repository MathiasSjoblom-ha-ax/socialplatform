import "./NavigationBarStyle.css"

export default function NavigationBar() {
    return (
        <div className="NavContainer">
            <div className="leftPart">
                <img className="NavAvatar" src="/assets/images/Avatar.png"/>
                <img className="friend" src="/assets/images/friend.png"/>
                <img className="chat" src="/assets/images/chat.png"/>
                <img className="notifications" src="/assets/images/notifications.png"/>
            </div>
            <div className="centerPart">
            <span className="logo">Media</span>

            </div>
            <div className="rightPart">
            <div className="searchBox">
                    <input placeholder="Search" className="searchInput"/>
                </div>
            </div>
        </div>
    );
}