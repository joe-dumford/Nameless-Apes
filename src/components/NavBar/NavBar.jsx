import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import "./NavBar.css";

import BlueApeHomeIcon from "../../resources/images/BlueApeHomeIcon.png"

const NavBar = (props) => {
    const [navMode, setNavMode] = useState("static");
    const [color, setColor] = useState("-50px");
    const [scrollValue, setScrollValue] = useState(0);

    const scrollTotop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    const between = (value, a, b) => {
        return value > a && value <= b;
    }

    const navOptionsHandler = (height) => {
        window.scroll({ top: height, left: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 0) {
                setNavMode('fixed');
            } else if (scrollY === 0) {
                setNavMode('static');
                setColor("-50px");
            }
            if (scrollY > 600) {
                setColor("30px");
            } else if (scrollY < 600) {
                setColor("-50px");
            }
            setScrollValue(document.documentElement.scrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={"nav " + navMode} >
            <div className="nav-holder">
                <div className="logo" >
                    <Link to='/'>
                        <img className="placeholder" src={BlueApeHomeIcon} alt="" />
                    </Link>
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={() => navOptionsHandler(0)}>
                            <span className={"nav-pop " + (between(scrollValue, -1, 886) ? "navBorderBottom" : "")}/>INTRO
                        </li>
                        <li onClick={() => navOptionsHandler(886)}>
                            <span className={"nav-pop " + (between(scrollValue, 886, 1473) ? "navBorderBottom" : "")}/> ABOUT
                        </li>
                        <li onClick={() => navOptionsHandler(1473)}>
                            <span className={"nav-pop " + (between(scrollValue, 1473, 2573) ? "navBorderBottom" : "")}/>MUSIC
                        </li>
                        <li onClick={() => navOptionsHandler(2573)}>
                            <span className={"nav-pop " + (between(scrollValue, 2573, 3947) ? "navBorderBottom" : "")}/>TOUR
                        </li>

                        {/*<li onClick={() => navOptionsHandler(3947)}>*/}
                        {/*    <span className={"nav-pop " + (between(scrollValue, 3947, 4559) ? "navBorderBottom" : "")}/>NEWS*/}
                        {/*</li>*/}

                        <li className="placeholder">
                            <Link to='/merch'>
                                <span className="nav-pop"/>MERCH
                            </Link>
                        </li>
                        <li onClick={() => navOptionsHandler(4559)}>
                            <span className={"nav-pop " + (between(scrollValue, 4559, 5400) ? "navBorderBottom" : "")}/>MORE
                        </li>
                    </ul>
                </div>
                <div className="socials">
                    <div className="icon-frame">
                        <div>
                            <i className="icon-twitter" />
                            <i className="icon-twitter myBlue" />
                        </div>
                    </div>
                    <div className="icon-frame">
                        <div>
                            <i className="icon-spotify" />
                            <i className="icon-spotify myBlue" />
                        </div>
                    </div>
                    <div className="icon-frame">
                        <div>
                            <i className="icon-soundcloud" />
                            <i className="icon-soundcloud myBlue" />
                        </div>
                    </div>
                    <div className="icon-frame">
                        <div>
                            <i className="icon-instagram-1" />
                            <a href="https://www.instagram.com/thenamelessapes/" target="_blank" rel="noreferrer">
                                <i className="icon-instagram-1 myBlue" />
                            </a>
                        </div>
                    </div>
                    <div className="icon-frame">
                        <div>
                            <i className="icon-vimeo" />
                            <i className="icon-vimeo myBlue" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={"to-top "} onClick={(e) => scrollTotop(e)}>
                <i className="icon-up-open to-top-i " style={{ bottom: color }} />
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        goodId: state.goodId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SeaValue: (prop) => {
            dispatch({ type: "SEARCH_VALUE", searchValue: prop })
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
