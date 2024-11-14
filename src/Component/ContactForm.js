import React, { useState } from 'react';
import './css/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        course: '',
        institution: '',
        consent: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic here
        console.log(formData);
    };

    return (
        <div className="contact-form-container">
            <div className="info-text">
                <h2>Know more about <span>our programs</span></h2>
                <p>Interested to join our courses? Share your details and we'll get back to you.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name*" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="yourname@email.com*" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />
                <div className="mobile-input">
                    <span className="country-code">+91</span>
                    <input 
                        type="text" 
                        name="mobile" 
                        placeholder="Enter mobile number*" 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <select 
                    name="course" 
                    value={formData.course} 
                    onChange={handleChange} 
                    required
                >
                    <option value="">Select course*</option>
                    <option value="course1">Course 1</option>
                    <option value="course2">Course 2</option>
                    <option value="course3">Course 3</option>
                </select>
                <select 
                    name="institution" 
                    value={formData.institution} 
                    onChange={handleChange}
                >
                    <option value="">Select institution*</option>
                    <option value="institution1">Institution 1</option>
                    <option value="institution2">Institution 2</option>
                </select>
                <label className="consent-checkbox">
                    <input 
                        type="checkbox" 
                        name="consent" 
                        checked={formData.consent} 
                        onChange={handleChange} 
                    />
                    I authorize Online Manipal and its associates to contact me with updates & notifications via email, SMS, WhatsApp, and voice call. This consent will override any registration for DNC / NDNC.
                </label>
                <button type="submit" className="submit-button">Enroll Now</button>
            </form>
        </div>
    );
};

export default ContactForm;
