import ProductForm from "@/components/admin-panel/ProductForm";
import React from "react";

const ProductPage = () => {
  return (
    <div className="h-calc(100vh-96px) w-full grid place-items-center overflow-y-auto">
      <div className="bg-white w-[400px] rounded-lg p-4 mt-10">
        <ProductForm />
      </div>
    </div>
  );
};

export default ProductPage;
