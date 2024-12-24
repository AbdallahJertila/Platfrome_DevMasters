import React, { Component } from 'react';
import './ContactForm.css'; 
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ name: '', email: '', message: '' });
    };

    render() {
        const { name, email, message } = this.state;

        return (
            <div className="contact_parent">
                <div className="contact-form-container">
                    <h2>Contactez-nous</h2>
                    <form onSubmit={this.handleSubmit} className="contact-form">
                        <div className="input-container">
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={this.handleChange}
                                placeholder="Entrez votre nom"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="email"> </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={this.handleChange}
                                placeholder="Entrez votre email"
                                required
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="message"> </label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={this.handleChange}
                                placeholder="Entrez votre message"
                                required
                            />
                        </div>
                        <button type="submit" className="send-button">Send</button>
                    </form>
                </div>
                <div className='line'></div>
            </div>

        );
    }
}

export default ContactForm;
