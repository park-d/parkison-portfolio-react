import React from 'react';
import logo from '../images/spark-swatch.png'

function NavTabs({currentPage, handlePageChange}) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className = 'container '>
            <img className="logo" src={logo} alt="Spark Design & Consulting Logo"/>
            <h1 className="name py-5">D. PARKISON</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'styled-anchor activeCustom px-2' : 'styled-anchor px-2'}
                    >
                        About
                    </a>
                        <a
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            className={currentPage === 'Portfolio' ? 'styled-anchor activeCustom px-2' : 'styled-anchor px-2'} 
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'styled-anchor activeCustom px-2' : 'styled-anchor px-2'}
                    >
                        Contact
                    </a>
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'styled-anchor activeCustom px-2' : 'styled-anchor  px-2'}
                    >
                        Resume
                            </a>
                        </div>
                </div>
                </div>
        </nav>
    );
}

export default NavTabs;
