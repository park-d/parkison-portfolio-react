import React from 'react';
import avatar from '../../images/dnp-avatar-svg.svg'

export default function About() {
    return (
        <div className='page-content container py-5'>
            <h2>About Me</h2>
            <div className='about-content'>
            <img src={avatar} className = "avatar" alt='Avatar of Devan'></img>
            <p>
                My name is Devan Parkison. I'm a Full-Stack Web Developer and data professional. I currently work as a data scientist and co-own Spark Design and Consulting, in which we offer consulting, development, design, and analytical work.
                <br></br><br></br>
                In my free time, I spend time playing Dungeons & Dragons campaigns with friends and building terrain for those campaigns, playing competitive games online with my friends, and learning about animals.
                </p>
            </div>
            <div className="about-icons-container">
                <i className="fa-brands fa-d-and-d fa-xl about-icons"></i>
                <i class="fa-solid fa-hammer fa-xl about-icons"></i>
                <i className="fa-solid fa-gamepad fa-xl about-icons"></i>
                <i className="fa-solid fa-cat fa-xl about-icons"></i>
            </div>
        </div>
    );
}
