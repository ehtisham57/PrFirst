// components/ContactForm.js

import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Import your CSS module

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform any necessary form data processing or API calls here

      // Example: Log the form data to the console
      console.log('Form Data:', formData);

      // Reset the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Display success message
      setSubmitSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.contactForm}>
      <h1>Contact Us</h1>
      <p className="py-9 mt-8 mx-auto text-xl text-primaryColor">👋 Hello, World! I'm Syed Ehtisham, a passionate web developer with a knack for turning ideas into digital reality. Welcome to my virtual playground, where lines of code come together to create seamless and visually stunning online experiences.</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
          placeholder='Name'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
          placeholder='Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.formGroup}>
          
          <textarea
          placeholder='Message'  
          id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={styles.inputField}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>

      {submitSuccess && (
        <div className={styles.successMessage}>
          Thank you! Your message has been sent successfully.
        </div>
      )}
    </div>
  );
};

export default ContactForm;
