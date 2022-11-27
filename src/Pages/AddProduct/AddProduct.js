import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const handleData = (data) => {
    console.log(data);
    const {
      name,
      price,
      condition,
      phone,
      category,
      location,
      purchaseYear,
      description,
    } = data;
    const productDetails = {
      name,
      price,
      condition,
      phone,
      category,
      location,
      purchaseYear,
      description,
    };
    fetch("http://localhost:5000/dashboard/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    }).then((res) => res.json());
    reset();
    navigate("/dashboard/myproduct");
  };

  // console.log(addproductsData);

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md ">
      <h2 className="text-center font-semibold text-3xl mb-4">Add a Product</h2>
      <form onSubmit={handleSubmit(handleData)}>
        {/* name */}
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput7"
            placeholder="Product Name"
            {...register("name", { required: true })}
          />
        </div>
        {/* price */}
        <div className="form-group mb-6">
          <input
            type="number"
            className="form-control block
                  
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            placeholder="Product Price"
            // defaultValue={user?.email}
            {...register("price", { required: true })}
          />
        </div>
        {/* condition */}
        <div className="form-group mb-6">
          <div className="flex justify-center ">
            <h2 className="font-bold ">Condition :</h2>
            <div className="form-check form-check-inline  mx-3">
              <input
                className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Excellent"
                {...register("condition")}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="inlineRadio10"
              >
                Excellent
              </label>
            </div>
            <div className="form-check form-check-inline mx-3">
              <input
                className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Good"
                {...register("condition")}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
              >
                Good
              </label>
            </div>
            <div className="form-check form-check-inline mx-3">
              <input
                className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Fair"
                {...register("condition")}
              />
              <label
                className="form-check-label inline-block text-gray-800"
                for="inlineRadio20"
              >
                Fair
              </label>
            </div>
          </div>
        </div>
        {/* phone */}
        <div className="form-group mb-6">
          <input
            type="number"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            placeholder="Enter your number"
            {...register("phone")}
          />
        </div>
        {/* location */}
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            placeholder="Enter location"
            {...register("location")}
          />
        </div>
        {/* Category */}
        <div className="form-group mb-6">
          <input
            type="text"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            placeholder="Product Category"
            {...register("category")}
          />
        </div>
        {/* year of purchase */}
        <div className="form-group mb-6">
          <input
            type="number"
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInput8"
            placeholder="Year of purchase"
            {...register("purchaseYear")}
          />
        </div>
        {/* description */}
        <div className="form-group mb-6">
          {" "}
          <textarea
            className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            id="exampleFormControlTextarea13"
            rows="3"
            placeholder="Product Description"
            {...register("description")}
          ></textarea>
        </div>
        {/* submit */}
        <div className="modal-action justify-center">
          <button
            type="submit"
            htmlFor="booking-modal"
            className="btn"
            onClick={() => toast.success("The product is added")}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
