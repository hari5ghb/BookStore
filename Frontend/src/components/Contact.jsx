import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>    <Navbar/>
    <div className="container mx-auto my-36 p-5 bg-dark shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium  text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border bg-white border-gray-300 rounded-md focus:ring focus:ring-blue-500"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-red-700 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>

    <Footer/>
    </>

  );
}

export default Contact;
