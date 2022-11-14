import React from 'react';
import Project from './Project';
import teamSpeakImg from '../../images/team-speak-photo.JPG';
import weatherNotImg from '../../images/weather-or-not-photo.JPG'
import jateImg from '../../images/jate-photo.JPG'
import noteTakerImg from '../../images/note-taker-photo.JPG'
import weatherImg from '../../images/weather-photo.JPG'
import homeImg from '../../images/home-photo.JPG'

function Portfolio() {
    return (
        <div className="container page-content py-5">
                <h2>PORTFOLIO</h2>
            <div class="row projectContainer">
                <Project
                    name='TeamSpeak'
                    github='https://github.com/park-d/team-speak'
                    deployed='https://teamspeak-org.herokuapp.com/'
                    image={teamSpeakImg}
                />
                    <Project
                        name='Home Assistant App'
                    github='https://github.com/RBL1992/home'
                    deployed='https://calm-retreat-29451.herokuapp.com'
                        image={homeImg}
                    />
                <Project
                    name='Weather or Not'
                    github='https://github.com/Shengaero/weather-or-not'
                    deployed='https://shengaero.github.io/weather-or-not/'
                    image={weatherNotImg}
                />
                <Project
                    name='PWA Text Editor'
                    github='https://github.com/park-d/JA-text-editor'
                    deployed='https://park-d-text-editor.herokuapp.com/'
                    image={jateImg}
                />
                <Project
                    name='Note Taker App'
                    github='https://github.com/park-d/note-taker-app'
                    deployed='https://thawing-everglades-37021.herokuapp.com/'
                    image={noteTakerImg}
                />
                <Project
                    name='Weather App'
                    github='https://github.com/park-d/weather-dashboard'
                    deployed='https://park-d.github.io/weather-dashboard/'
                    image={weatherImg}
                />
            </div>
        </div>
    );
}


export default Portfolio;
