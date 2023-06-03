import photo from "../assets/react.svg"

const Product = (props) => {
    return ( 
        <div className="bg-white w-[30%] h-[60%] mb-5 mt-5 flex flex-col cursor-pointer justify-center items-center rounded-sm border-solid border-2 border-green-300">
            <div className=" w-[90%] h-[50%] flex justify-center items-center">
              <img src={props.image} className=" h-[100%] w-[100%]" alt="The product image"></img>
            </div>
            <div className="bg-white w-[90%] text-start text-md mt-2 font-bold text-black">
                <p>{props.title}</p>
            </div>

            <div className="bg-white w-[90%] text-start text-sm mt-1 text-gray-400">
                <p>{props.category}</p>
            </div>
            <div className="bg-white w-[90%] text-start mt-2">
                <button className="bg-gray-200 p-1 rounded-sm text-black font-bold">${props.price}</button>
                </div>
        </div>
     );
}
 
export default Product;