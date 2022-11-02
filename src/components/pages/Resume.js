import React from 'react';
import resume from '../../images/ParkisonResume.pdf';

export default function Resume() {
    return (
        <div className='page-content container py-5 '>
            <h2 >RESUME</h2>
            <div className='d-flex flex-column flex-sm-column flex-md-row justify-content-around resume-dl'>
                <div >
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
                </div>
                <div>
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
            </div>
            <div className='d-flex justify-content-center py-5'>
                <p><a href={resume} target="_blank" rel="noreferrer">Download my resume </a></p>
            </div>
        </div>
    );
}
