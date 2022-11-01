import React from 'react';

export default function Contact() {
    return (
        <div className='page-content container py-5'>
            <h2>CONTACT</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">NAME</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Your name..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Your email..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">MESSAGE</label>
                    <textarea type="message" className="form-control" id="messageInput" placeholder="Your message..." />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
