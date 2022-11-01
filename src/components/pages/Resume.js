import React from 'react';
import resume from '../../images/ParkisonResume.pdf';

export default function Resume() {
    return (
        <div className='page-content container py-5'>
            <h2>Resume</h2>
            <p>Download my<a href={resume} target="_blank" rel="noreferrer">resume </a></p>
            <h3>Front-End Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JSON</li>
                <li>AJAX</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-End Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SQL -- MySQL, Sequelize</li>
                <li>NoSQL -- MongoDB, Mongoose</li>
                <li>MySQL</li>
                <li>REST</li>
                <li>GraphQL</li>
                <li>Python</li>
            </ul>
        </div>
    );
}
