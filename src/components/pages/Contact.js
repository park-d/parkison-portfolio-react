import React from 'react';

export default function Contact() {
    return (
        <div className='page-content container py-3'>
            <h2>Contact</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Your name..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Your email..."/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="message" className="form-control" id="messageInput" placeholder="Your message..." />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
