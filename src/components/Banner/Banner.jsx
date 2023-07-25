import React from 'react';
import "./Banner.css";
import banner from "../../resources/images/banner.jpg";

const Banner = () => {

    return (
        <section className="banner">
            <div className="banner-holder">
                <img src={banner} className="banner-image" alt="Banner" />
                <div className="banner-cover">
                    <div className="banner-texts">
                        <p>
                            Nameless Apes
                        </p>
                        <p>
                            Resuscitating Rock N' Roll One Riff At A Time
                        </p>
                        <div className="btn-midd">
                            <div className="btn-midd gradianet">
                                <p>View Tour Dates</p>
                                <i className="icon-fast-fw-outline" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="theStory-holder">
                <div className="theStory-textframe">
                    <h4>THE NAMELESS APES</h4>
                    <p>AMERICAN ROCK N' ROLL<br /> FROM ATLANTA, GA</p>
                    <p>
                        A dynamic and electrifying band that seamlessly blends<br />
                        high energy rock n' roll, funky grooves, and jam band influences<br />
                        to create a truly unique and captivating musical experience.<br />
                        With their infectious energy and exceptional musicianship,<br />
                        the Nameless Apes are known for delivering unforgettable live performances that<br/>
                        leave audiences exhilarated and begging for more!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;

