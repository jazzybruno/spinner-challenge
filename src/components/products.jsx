import { useEffect , useState } from "react";
import Product from "./product";
import axios from "axios";

const Products = () => {

     const [products, setProducts] = useState([]);
    
    async function getProducts() {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProducts(response.data);
    }

    useEffect(()=>{
        getProducts();
    })

    return (

       <>
        <h3 className="font-bold text-xl  mt-4 mb-4">Welcome to the products part</h3>
        <div className="h-[100%] w-[100%] flex justify-center items-center gap-4 flex-wrap overflow-y-scroll">
            {products.map((product) => (
                 <Product key={product.id} title={product.title} category={product.category} price={product.price} image={product.image} />
            ))}
            </div>
       </>
     );
}
 
export default Products;