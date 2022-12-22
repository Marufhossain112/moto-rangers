import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../../context/AuthProvider/AuthProvider";
import ProductCards from "../ProductCards/ProductCards";
import ProductModal from "../ProductModal/ProductModal";

const ProductCategoriesId = () => {
  // const { setLoading } = useContext(MyContext);
  // setLoading(false);
  const brands = useLoaderData();
  console.log(brands);
  const { bikesData } = brands;
  // console.log(bikesData);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold my-5">
        Brand name : {brands.brandName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-xl md:max-w-4xl lg:max-w-7xl mx-auto">
        {bikesData.map((bikes) => (
          <>
            {" "}
            <ProductCards
              key={bikes.id}
              brandsId={brands._id}
              bike={bikes}
            ></ProductCards>
            {/* <ProductModal key={bikes.id} ></ProductModal> */}
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoriesId;
