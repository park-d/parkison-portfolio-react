import React from 'react';
import Project from './Project';

function Portfolio() {
    return (
        <div className="container page-content">
            <div class="row projectContainer">
                <Project
                    name='TeamSpeak'
                    github='https://github.com/park-d/team-speak'
                    deployed='https://teamspeak-org.herokuapp.com/'
                />
                <Project
                    name='Weather or Not'
                    github='https://github.com/Shengaero/weather-or-not'
                    deployed='https://shengaero.github.io/weather-or-not/'
                />
                <Project
                    name='Just Another Text Editor'
                    github='https://github.com/park-d/JA-text-editor'
                    deployed='https://park-d-text-editor.herokuapp.com/'
                />
                <Project
                    name='Note Taker Application'
                    github='https://github.com/park-d/note-taker-app'
                    deployed='https://thawing-everglades-37021.herokuapp.com/'
                />
                <Project
                    name='Weather Dashboard'
                    github='https://github.com/park-d/weather-dashboard'
                    deployed='https://park-d.github.io/weather-dashboard/'
                />
                <Project
                    name='MVC Tech Blog'
                    github='https://github.com/park-d/MVC-tech-blog'
                    deployed='https://mysterious-bastion-25822.herokuapp.com/'
                />
            </div>
        </div>
    );
}


export default Portfolio;
