import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PurchasedCart({ userId }) {
  const [purchasedBooks, setPurchasedBooks] = useState([]);

  useEffect(() => {
    const fetchPurchasedBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/user/${userId}`);
        setPurchasedBooks(res.data.purchased); // Assuming backend returns user's purchased array
      } catch (error) {
        console.error(error);
      }
    };

    fetchPurchasedBooks();
  }, [userId]);

  return (
    <div>
      <h2>Your Purchased Books</h2>
      <ul>
        {purchasedBooks.map((book, index) => (
          <li key={index}>
            <h3>{book.name}</h3>
            <p>{book.title}</p>
            <p>${book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PurchasedCart;
