import React from 'react';
import {FaGithub, FaTelegram} from "react-icons/fa";
//rsf

function Homepage(props) {
    return (
        <>
            <section className="homepage">
                <div className="overlay">
                    <h1>Daniil Bogachev</h1>
                    <p>Front-end Web Developer</p>

                    <ul>
                        <li><a href="https://t.me/Fumari" target="_blank" rel="noopener noreferrer"><FaTelegram /></a></li>
                        <li><a href="https://github.com/daniilbogachev"><FaGithub /></a></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Homepage;