// Contact.jsx

import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: 'Jiara Martins',
        email: 'hello@reallygreatsite.com',
        message: 'Write your message here'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., send the data to a server
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button className="register-now-button1" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;