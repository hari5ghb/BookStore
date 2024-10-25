import React, {useEffect, useState} from "react";

function Cards({ item, userId }) {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const buy = async () => {
    try {
      const res = await axios.post('http://localhost:4001/purchase', {
        userId,
        item
      });
      alert(`Added ${item.name} to your cart!`);
    } catch (error) {
      console.error(error);
      alert('Error adding book to cart');
    }
  };
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl  hover: shadow shadow-md shadow-slate-950  hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" width={400} className="max-h-96 " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <button className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200" onClick={buy}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
