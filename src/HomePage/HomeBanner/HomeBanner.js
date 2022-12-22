import React from "react";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <div
      className="home-banner"
      style={{
        background: ` url(
          https://i.ibb.co/mNQfQLM/Most-Expensive-Motorbikes-Kawasaki-Ninja-H2-R-800x450.jpg
        )`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // height: "100vh",
        // opacity: 0.7,
      }}
    >
      <div className="flex justify-center items-center h-[100%]">
        <div>
          <h1 className="text-3xl  text-center md:text-4xl lg:text-5xl font-bold text-red-300">
            Welcome to the best second-hand bikes world
          </h1>
          <p className="text-center mt-4 font-medium text-xl md:text-2xl lg:text-3xl text-green-500">
            Get the best in a cheap price
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
