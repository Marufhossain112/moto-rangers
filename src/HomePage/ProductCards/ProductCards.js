import React from "react";
import ProductModal from "../ProductModal/ProductModal";

const ProductCards = ({ bike }) => {
  console.log(bike);
  const { name, location, resalePrice, originalPrice, used, posted, pic, id } =
    bike;
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            style={{ height: "290px", width: "330px" }}
            className="rounded-t-lg"
            src={pic}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-700 text-base mb-4">Location : {location}</p>
          <p className="text-gray-700 text-base mb-4">
            Resale Price : {resalePrice}
          </p>
          <p className="text-gray-700 text-base mb-4">
            Original Price : {originalPrice}
          </p>
          <p className="text-gray-700 text-base mb-4">Used : {used} years</p>
          <p className="text-gray-700 text-base mb-4">
            Date of Post : {posted} years
          </p>
          <label
            htmlFor="booking-modal"
            type="button"
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Book Now
          </label>
        </div>
      </div>
      <ProductModal key={id} bikeDetails={bike}></ProductModal>
    </div>
  );
};

export default ProductCards;
