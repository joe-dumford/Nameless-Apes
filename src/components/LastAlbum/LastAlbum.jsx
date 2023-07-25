import React from 'react';
import "./LastAlbum.css";

const LastAlbum = () => {
    return (
        <section className="last-album">
            <div className="last-album-holder">
                <div className="last-album-cover">
                    <div className="last-album-texts">
                        <p>OUR LATEST SINGLE</p>
                        <div className="player">
                            <iframe
                                title="myPlayer" width="100%" height="400" scrolling="no" frameBorder="no" allow="autoplay"
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1567166686&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                            </iframe>
                        </div>
                        <div className="btn">
                            <p>MORE ON SOUNDCLOUD</p>
                            <i className="icon-play-outline" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LastAlbum;

