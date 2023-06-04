import Products from "../components/products";
import Spinner from "../components/spinner";
import { useState } from "react";

const Main = () => {
  const [product, setProduct] = useState({});
  function passTheProduct(product) {
    setProduct(product);
  }

  return (
    <div className="w-[100%] h-[100vh] flex flex-row justify-center items-center">
      <div className="w-[50%] h-[100%] bg-[#d8d8e2] flex flex-col justify-center items-center">
        <Products passTheProduct={passTheProduct} />
      </div>
      <div className="w-[50%] h-[100%] bg-[#d8d8e2] flex flex-col justify-center items-center">
        <Spinner product={product} />
      </div>
    </div>
  );
};

export default Main;
