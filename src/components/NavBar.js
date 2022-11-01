import React from 'react';

function NavTabs({currentPage, handlePageChange}) {
    return (
        <header className='d-flex justify-content-between'>
            <h1 className = "py-5">DEVAN N. PARKISON (park-d)</h1>
            <nav className='d-flex align-items-center'>
                <a className='px-2'
                    href="#about"
                    onClick={() => handlePageChange('About')}
                >
                    About
                </a>
                <a className='px-2'
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </a>
                <a className='px-2'
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </a>
                <a className='px-2'
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                >
                    Resume
                </a>
            </nav>
        </header>
    );
}

export default NavTabs;
