import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";

const AllBuyers = () => {
  const { data: allbuyersData = [], refetch } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/dashboard/allbuyers");
      const data = await res.json();
      return data;
    },
  });
  const handleDelete = (id) => {
    // console.log("I am deleting ", id);
    fetch(`http://localhost:5000/dashboard/allbuyers/${id}`, {
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
  refetch();
  return (
    <div>
      <h2 className="text-3xl text-center my-5">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allbuyersData.map((seller, i) => (
              <tr key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  {" "}
                  <AiOutlineDelete
                    className="ml-3"
                    onClick={() => handleDelete(seller._id)}
                  ></AiOutlineDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
