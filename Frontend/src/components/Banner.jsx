import React from "react";
import banner from "../../public/Banner.png";
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-6 flex flex-col md:flex-row my-12 gap-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-lg leading-relaxed text-gray-600">
              Step into a world of stories, knowledge, and imagination! Our bookshop is your one-stop destination for a curated selection of books across all genres—whether you're looking for the latest bestsellers, timeless classics, children's tales, or niche collections. We believe that every book tells a unique story, and we are here to help you find the one that resonates with you. From fantasy and adventure to non-fiction and self-help, we cater to readers of all ages and interests. Explore, discover, and let your next favorite read find you here!
            </p>
            <label className="input input-bordered flex items-center gap-3 bg-gray-50 border border-gray-300 rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow outline-none bg-transparent" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary px-6 py-3 rounded-lg text-lg">
            Get Started
          </button>
        </div>
        <div className="order-1 w-full md:w-1/2 flex justify-center items-center">
          <img
            src={banner}
            className="md:w-[500px] md:h-[450px] rounded-xl shadow-lg"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
