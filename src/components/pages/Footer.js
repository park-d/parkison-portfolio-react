import React from 'react';

export default function About() {
    return (
        <footer>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='text-center'>
                        <p><a className='plain-anchor' href='https://sparkdesignconsulting.com/' target='_blank' rel='noreferrer'>&copy; 2022 Spark Design & Consulting</a></p>
                        <a className='styled-anchor' href='https://github.com/park-d' target='_blank' rel='noreferrer'><i className='fa-brands fa-github fa-lg'></i></a>
                        <a className='styled-anchor' href='https://www.linkedin.com/in/devanparkison/' target='_blank' rel='noreferrer'><i className='fa-brands fa-linkedin-in fa-lg'></i></a>
                        <a className='styled-anchor' href='https://discord.com/channels/651894308198285333' target='_blank' rel='noreferrer'><i className='fa-brands fa-discord fa-md'></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
