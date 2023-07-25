import React from 'react';
import "./Footer.css";

const Footer = () => {

    return (
        <section className="Foot">
            <section className="Footer" />

            <div className="Footer-real">
                <div className="Footer-holder">
                    <div className="Footer-icons">
                        <a href="https://www.instagram.com/thenamelessapes/" target="_blank" rel="noreferrer">
              <span className="Footer-icons">

                <i className="icon-instagram-1" />

              </span>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100094589184399/" target="_blank" rel="noreferrer">
              <span className="Footer-icons">
                <i className="icon-facebook" />
              </span>
                        </a>
                        <a href="https://open.spotify.com/artist/6Q6DDbUO3LpVD6WhRyzg8M" target="_blank" rel="noreferrer">
              <span className="Footer-icons">
                <i className="icon-spotify" />
              </span>
                        </a>
                        <a href="https://soundcloud.com/joe-dumford" target="_blank" rel="noreferrer">
              <span className="Footer-icons">
                <i className="icon-soundcloud" />
              </span>
                        </a>
                    </div>
                    <p className="footer-copywrite">© 2019 Nameless Apes. All Rights Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
