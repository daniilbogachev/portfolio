import React from 'react';
import {FaPhone, FaEnvelope} from "react-icons/fa";

function Contacts(props) {
    return (
        <>
            <section className="contacts">
                <div className="overlay">
                    <h1>My contacts</h1>
                    <ul>
                        <li><a href="tel:+79298487843"><FaPhone/> +7 (929) 848-78-43</a></li>
                        <li><a href="mailto:daniilbogachevjs@gmail.com"><FaEnvelope/> daniilbogachevjs@gmail.com</a></li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Contacts;