import { useQuery } from "@tanstack/react-query";
import { data } from "autoprefixer";
import React from "react";
import toast from "react-hot-toast";
// import { FaBeer } from
import { AiOutlineDelete } from "react-icons/ai";

const MyProducts = () => {
  const { data: addproductsData = [], refetch } = useQuery({
    queryKey: ["addproduct", data],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/dashboard/addproduct");
      const data = await res.json();
      return data;
    },
  });
  console.log(addproductsData);

  const handleDelete = (id) => {
    // console.log("I am deleting ", id);
    fetch(`http://localhost:5000/dashboard/addproduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Product deleted successfully");
          refetch();
          console.log(data);
        }
      });
  };

  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            {addproductsData.length < 1 ? (
              <div className="flex justify-center mr-40 mt-10 text-3xl">
                Please Add a Product
              </div>
            ) : (
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    ></th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Condition
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {addproductsData.map((product, i) => (
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.name}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.price}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {product.condition}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {/* <FaBeer></FaBeer> */}
                        <AiOutlineDelete
                          onClick={() => handleDelete(product._id)}
                          className="ml-3"
                        ></AiOutlineDelete>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
