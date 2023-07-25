import React from 'react';
import { Link } from 'react-router-dom';

import apesPodcast from "../../resources/images/ApesPodcast.jpg";
import merchApe from "../../resources/images/MerchApe1.jpg";
import spookyApes from "../../resources/images/spookyApes.jpg";
import "./MoreContent.css";

const MoreContent = () => {
    return (
        <section className="Blog">
            <div className="Blog-holder">
                <div className="Blog-cover">
                    <div className="Blog-texts">
                        <p>MORE FROM THE APES</p>
                        <div className="data">
                            <div className="data-frame">
                                <div className="frame-cover">
                                    <div className="frame-content">
                                        <Link to='/merch'>
                                            <div className="frame-heading"><p>MERCH</p></div>
                                        </Link>
                                        <div className="frame-body">
                                            <p> February 5, 2023 </p>
                                            <p>STUFF THAT ROCKS</p>
                                            <p>
                                                Gear up in Nameless Apes merch and rock the world with style.
                                            </p>
                                        </div>
                                        <div className="frame-info">
                                            <div className="frame-info_sec"><i className="icon-user-outline frame-icon" /><p> Nectar Manager</p></div>
                                            <div className="frame-info_sec"><i className="icon-comment frame-icon" /><p> 98</p></div>
                                            <div className="frame-info_sec"><i className="icon-heart-empty frame-icon" /><p> 20</p></div>
                                        </div>
                                    </div>
                                </div>
                                <img className="aaa" src={merchApe} alt="" />
                            </div>
                            <div className="data-frame">
                                <div className="frame-cover">
                                    <div className="frame-content">
                                        <Link to='/videos'>
                                            <div className="frame-heading"><p>VIDEOS</p></div>
                                        </Link>
                                        <div className="frame-body">
                                            <p> October 31, 2022 </p>
                                            <p>THE APES SPOOKIEST SHOW</p>
                                            <p>
                                                The Apes Halloween show last year was an electrifying spectacle that
                                                that sent shivers down the audiences spine.
                                            </p>
                                        </div>
                                        <div className="frame-info">
                                            <div className="frame-info_sec"><i className="icon-user-outline frame-icon" /><p> Nectar Manager</p></div>
                                            <div className="frame-info_sec"><i className="icon-comment frame-icon" /><p> 98</p></div>
                                            <div className="frame-info_sec"><i className="icon-heart-empty frame-icon" /><p> 20</p></div>
                                        </div>
                                    </div>
                                </div>
                                <img className="aaa" src={spookyApes} alt="" />
                            </div>
                            <div className="data-frame">
                                <div className="frame-cover">
                                    <div className="frame-content">
                                        <Link to="/podcast">
                                            <div className="frame-heading"><p>PODCAST</p></div>
                                        </Link>
                                        <div className="frame-body">
                                            <p>July 9, 2023</p>
                                            <p>BEYOND THE STAGE</p>
                                            <p>
                                                Amplifying the Stories Behind the Music. COMING SOON!
                                            </p>
                                        </div>

                                        <div className="frame-info">
                                            <div className="frame-info_sec"><i className="icon-user-outline frame-icon" /><p> Nectar Manager</p></div>
                                            <div className="frame-info_sec"><i className="icon-comment frame-icon" /><p> 98</p></div>
                                            <div className="frame-info_sec"><i className="icon-heart-empty frame-icon" /><p> 20</p></div>
                                        </div>
                                    </div>
                                </div>
                                <img className="aaa" src={apesPodcast} alt="" />
                            </div>
                        </div>
                        <div className="btn tour-btn">
                            <p>VIEW ALL POSTS</p>
                            <i className="icon-play-outline" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreContent;
