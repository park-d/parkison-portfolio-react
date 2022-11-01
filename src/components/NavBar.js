import React from 'react';

function NavTabs({currentPage, handlePageChange}) {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className = 'container'>
            <h1 className="py-5">DEVAN N. PARKISON <span>(park-d)</span></h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'activeCustom px-2' : 'px-2'}
                    >
                        About
                    </a>
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'activeCustom px-2' : 'px-2'}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'activeCustom px-2' : 'px-2'}
                    >
                        Contact
                    </a>
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'activeCustom px-2' : 'px-2'}
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
