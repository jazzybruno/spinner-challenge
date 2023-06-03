const Spinner = () => {
    return ( 
        <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center">
            <div>Hello World This is the spinner</div>
            <div>Hello World this is the daily stuff</div>
            <div className="bg-[#fff7f7] flex flex-col justify-center items-start pl-5 w-[80%] rounded-md">
                 <div className="pt-5 ">
                    <p className="font-bold text-black">CHANCE</p>
                    <div className="flex gap-1 bg-white p-2 mt-2">
                        <input type="text" name="" id="" readOnly value={"23%"} className="font-bold text-black"/>
                        <div className="flex gap-2 ">
                            <button className="bg-black text-white font-bold p-2 text-center text-sm">Min</button>
                            <button className="bg-black text-white font-bold p-2 text-center text-sm">10%</button>
                            <button className="bg-black text-white font-bold p-2 text-center text-sm">25%</button>
                            <button className="bg-black text-white font-bold p-2 text-center text-sm">50%</button>
                            <button className="bg-black text-white font-bold p-2 text-center text-sm">Max</button>
                        </div>
                    </div>
                 </div>
                 <div className="pt-5">Price</div>
                 <div className="pt-5 pb-5">Control</div>
            </div>
        </div>
     );
}
 
export default Spinner;