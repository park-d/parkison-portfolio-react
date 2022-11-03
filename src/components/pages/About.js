import React from 'react';
import avatar from '../../images/dnp-avatar-svg.svg';
import cats from '../../images/santo_gizmo.jpg';

export default function About() {
    return (
        <div className='page-content container py-5'>
            <h2>ABOUT</h2>
            <div className="about-content d-flex flex-column flex-sm-column flex-md-row align-items-center ">
                <img src={avatar} className="avatar" alt='Avatar of Devan'></img>
                <div>
                    <p>
                        My name is Devan Parkison. I'm a Full-Stack Web Developer and data professional. I currently work as a data scientist and co-own Spark Design and Consulting, in which we offer consulting, development, design, and analytical work.
                        <br></br><br></br>
                        In my free time, I play Dungeons & Dragons with friends and build terrain for those campaigns, play competitive games online with my friends, and learn about animals.
                        <br></br><br></br>
                    </p>
                    <div className="about-icons-container d-flex justify-content-center">
                        <a className="icon-anchor" href="https://www.dndbeyond.com/characters/78861006" target="_blank" rel="noreferrer"><i className="fa-brands fa-d-and-d fa-xl about-icons"></i></a>
                        <a className="icon-anchor" href="https://www.youtube.com/watch?v=iwT5fy3nBPQ" target="_blank" rel="noreferrer"><i className="fa-solid fa-hammer fa-xl about-icons"></i></a>
                        <a className="icon-anchor" href="https://tracker.gg/valorant/profile/riot/CAT2BKITTEN%23MEOW/overview" target="_blank" rel="noreferrer"><i className="fa-solid fa-gamepad fa-xl about-icons"></i></a>
                        <a className="icon-anchor" href={cats} target="_blank" rel="noreferrer"><i className="fa-solid fa-cat fa-xl about-icons"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
