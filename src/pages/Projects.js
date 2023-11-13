import React from 'react';
import {useState} from "react";
import {projects} from "../data/projects";

function Projects(props) {
    const [cards] = useState(projects)

    return (
        <>
            <section className="projects">
                <div className="overlay">
                    {/*<h1>Projects page</h1>*/}
                    <div className="cards">
                        {cards.map(({id, title, desc, github, demo, image}) =>
                            (
                                <article key={id}>
                                    <img src={image} alt={title} />
                                    <h4>{title}</h4>
                                    <p>{desc}</p>
                                    <ul>
                                        <li><a href={github} target="_blank" rel="noopener noreferrer" className="github">GitHub</a></li>
                                        <li><a href={demo} target="_blank" rel="noopener noreferrer" className="demo">Demo link</a></li>
                                    </ul>
                                </article>
                            ))}
                    </div>
                </div>
            </section>

        </>
    );
}

export default Projects;