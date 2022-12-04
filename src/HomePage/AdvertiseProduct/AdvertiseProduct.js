import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvertiseCards from "./AdvertiseCards/AdvertiseCards";

const AdvertiseProduct = () => {
  const { data: advertiseData = [], refetch } = useQuery({
    queryKey: ["advertiseproduct"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertiseproduct");
      const data = await res.json();
      return data;
    },
  });
  refetch();
  console.log(advertiseData);
  return (
    <>
      {advertiseData.length > 0 && (
        <div className="mb-5 max-w-sm md:max-w-md lg:max-w-7xl mx-auto mt-5">
          <h2 className="text-center text-3xl font-medium">Advertisement</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {advertiseData.map((advertise) => (
              <AdvertiseCards
                key={advertise._id}
                advertise={advertise}
              ></AdvertiseCards>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdvertiseProduct;
