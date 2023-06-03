import Products from "../components/products";
import Spinner from "../components/spinner";

const Main = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-row justify-center items-center">
      <div className="w-[50%] h-[100%] bg-[#d8d8e2] flex flex-col justify-center items-center">
        <Products />
      </div>
      <div className="w-[50%] h-[100%] bg-[#d8d8e2] flex flex-col justify-center items-center">
        <Spinner />
      </div>
    </div>
  );
};

export default Main;
