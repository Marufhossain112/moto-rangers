import { useQuery } from "@tanstack/react-query";
import React from "react";
import OrderCard from "./OrderCard/OrderCard";

const MyOrders = () => {
  const { data: myOrdersData = [] } = useQuery({
    queryKey: ["addproduct"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/dashboard/addproduct");
      const data = await res.json();
      return data;
    },
  });
  console.log(myOrdersData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-xl md:max-w-4xl lg:max-w-7xl mx-auto">
      {myOrdersData.map((order) => (
        <OrderCard key={order._id} order={order}></OrderCard>
      ))}
    </div>
  );
};

export default MyOrders;
