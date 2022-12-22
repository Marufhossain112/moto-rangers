import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MyContext } from "../../context/AuthProvider/AuthProvider";

const ProductModal = ({ bikeDetails }) => {
  const { name, resalePrice } = bikeDetails;
  const { user } = useContext(MyContext);
  const { register, handleSubmit, getValues, setValue, watch } = useForm({
    defaultValues: {
      name: user?.displayName,
      email: user?.email,
      itemName: name,
      itemPrice: resalePrice,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    // console.log(watch());
    fetch("https://server-resale.vercel.app/dashboard/myorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div className="form-group mb-6">
                <input
                  {...register("name")}
                  // onChange={() => setValue("name", user?.displayName)}
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
                  placeholder="Name"
                  disabled
                />
              </div>
              {/* email */}
              <div className="form-group mb-6">
                <input
                  {...register("email")}
                  type="email"
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
                  placeholder="Email address"
                  // defaultValue={user?.email}
                  disabled
                />
              </div>
              {/* phone number */}
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
              {/* item name */}
              <div className="form-group mb-6">
                <p>Item Name : {name}</p>
              </div>
              {/* resale price */}
              <div className="form-group mb-6">
                <p>
                  Item Price : {resalePrice}
                  /=
                </p>
              </div>

              <div className="modal-action justify-center">
                <button
                  type="submit"
                  htmlFor="booking-modal"
                  className="btn"
                  onClick={() => toast.success("The item is booked")}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
