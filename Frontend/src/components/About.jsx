import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto my-40 p-5 bg-dark-200 shadow-md rounded-lg ">
      <h2 className="text-4xl font-bold mb-6">About Us</h2>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our Bookstore! We are more than just a shop; we are a community of book lovers who believe in the power of stories to enrich our lives. 
        Founded with a passion for reading and a love for literature, our bookstore is dedicated to providing an extensive collection of books across all genres.
      </p>
      <p className="text-lg text-orange-700 mb-4">
        Our mission is simple: to inspire and nurture a love for reading in our community. We understand that books are not just objects but portals 
        to different worlds, experiences, and perspectives. That’s why we carefully curate our selection to include everything from classic literature 
        to contemporary bestsellers, ensuring that every reader finds something that resonates with them.
      </p>
      <p className="text-lg text-blue-700">
        We pride ourselves on creating an inviting atmosphere where readers can explore, discover, and connect with others. Our knowledgeable staff 
        are always on hand to offer personalized recommendations, helping you find your next great read or a perfect gift for someone special. 
        Whether you’re a lifelong reader or just beginning your journey, we are here to support you every step of the way.
      </p>
      <p className="text-lg text-green-700 mt-4">
        In addition to our vast selection of books, we host a variety of events throughout the year, including author signings, book clubs, 
        and workshops that celebrate literature and creativity. Our goal is to foster a vibrant literary community where everyone feels welcome to participate.
      </p>
      <p className="text-lg text-purple-700 mt-4">
        At our bookstore, we believe in giving back. We partner with local schools and organizations to promote literacy and support educational initiatives. 
        By nurturing a culture of reading in our community, we aim to empower individuals and enrich lives through the joy of books.
      </p>
      <p className="text-lg text-red-700 mt-4">
        Thank you for choosing us as your go-to destination for books. We invite you to visit our store, browse our collection, 
        and experience the magic of reading. Join us on this literary journey, and together let’s celebrate the stories that shape us all!
      </p>
    </div>
    <Footer/>
    </>
  );
}

export default About;
