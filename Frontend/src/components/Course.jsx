import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 my-16">
        <div className="mt-28 flex flex-col items-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold mt-10">
            We're delighted to have you{" "}
            <span className="text-teal-500">Here!</span>
          </h1>
          <p className="mt-8 text-gray-600 leading-relaxed md:w-3/4">
            Our course page is designed to provide a rich library of books tailored to meet the needs of learners and book enthusiasts alike. Whether you’re studying for an academic course, honing new skills, or simply feeding your curiosity, we’ve curated a diverse selection of books to guide your journey. From textbooks and reference materials to insightful non-fiction and specialized course guides, our collection spans a wide range of subjects. Discover resources in science, literature, business, technology, arts, and more—empowering you to learn, grow, and achieve your goals!
          </p>
          <Link to="/">
            <button className="mt-8 bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition duration-300">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
