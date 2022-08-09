import "./Postbox.css"

export default function Postbox() {
    return (
        <div className="Postbox">
            <div className="postboxWrapper">
                <div className="topPart">
                    <img className="postboxAvatar" src="./assets/images/Avatar.png"/>
                    <input placeholder="Photo caption." className="postboxInput"/>
                </div>
                <div className="bottomPart">
                    <div className="postboxOptions">
                        <img className="photovideoImage" src="./assets/images/photovideo.png"/>
                        <span className="photoVideoText">Photo or Video</span>
                    </div>
                    <div className="postboxOptions">
                        <img className="tagImage" src="./assets/images/photovideo.png"/>
                        <span className="tagText">Tag</span>
                    </div>
                    <div className="postboxOptions">
                        <img className="durationImage" src="./assets/images/clock.png"/>
                        <span className="postDurationText">Post Duration</span>
                        <select className="timer" id="postboxTime">
                            <option value="1h">1h</option>
                            <option value="12h">12h</option>
                            <option value="24h">24h</option>
                            <option value="48h">48h</option>
                        </select>
                    </div>
                    <div className="postboxOption">
                        <button>Send</button>
                    </div>
                </div>
                <hr className="lineSep"/>

            </div>
        </div>
    )
}