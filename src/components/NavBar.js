import React from 'react';

function NavTabs({currentPage, handlePageChange}) {
    return (
        <header >
            <div className='d-flex justify-content-between container'>
                <h1 className="py-5">DEVAN N. PARKISON <span>(park-d)</span></h1>
                <nav className='d-flex align-items-center'>
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? ' px-2  active' : 'px-2'}
                    >
                        About
                    </a>
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? ' px-2  active' : 'px-2'}
                    >
                        Portfolio
                    </a>
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? ' px-2  active' : 'px-2'}
                    >
                        Contact
                    </a>
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? ' px-2  active' : 'px-2'}
                    >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default NavTabs;
