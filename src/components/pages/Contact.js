import React, {useState} from 'react';
import {validateEmail} from '../../utils/helper';

export default function Contact() {
    const [formInputs, setFormInputs] = useState({name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (event) => {
        const {target} = event;
        const inputType = target.name;
        const inputValue = target.value;

        if(!inputValue) {
            setErrorMessage(`Please enter your ${inputType} before submitting.`);
        } else if(inputType === 'email') {
            const validInput = validateEmail(inputValue);
            if(!validInput) {
                setErrorMessage('Please enter a valid email address.');
            } return;
        } else if(!errorMessage) {
            setFormInputs({...formInputs, [inputType]: inputValue});
        }
    };

    return (
        <div className='page-content container py-5'>
            <h2>CONTACT</h2>
            <form>
                <div className="form-contents">
                    <div className="form-group">
                        <label htmlFor="name">NAME</label>
                        <input type="text" className="form-control" name='name' required placeholder="Your name..." onBlur={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input type="email" className="form-control" name='email' required placeholder="Your email..." onBlur={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">MESSAGE</label>
                        <textarea type="message" className="form-control" name='message' required placeholder="Your message..." onBlur={handleInputChange} />
                    </div>
                    <div className = 'submit-error-section'>
                        <button type="submit" id="submit-btn">Submit</button>
                        {errorMessage && (
                            <div>
                                <p className="error-message">{errorMessage}</p>
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
