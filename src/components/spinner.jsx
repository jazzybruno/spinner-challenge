import React, { useState, useEffect } from "react";
import "../assets/someCss.css";
import { FiRefreshCcw } from "react-icons/fi";

const Spinner = (props) => {
  const [percent, setPercent] = useState(80);
  const [deal, setDeal] = useState(props.product.price);
  const [value, setValue] = useState(10);

  const handleChangeStart = () => {
    console.log('Change event started');
  };

  const handleChange = (value) => {
    setValue(value);
  };

  const handleChangeComplete = () => {
    console.log('Change event completed');
  };
  
  function valuetext(value) {
    return `${value}`;
  }

  function calculateDeal(percentage) {
    let newdeal = (props.product.price * percentage) / 100;
    setDeal(newdeal);
    setPercent(percentage);
  }

  function calculateMaxDeal() {
    let newdeal = (props.product.price * 80) / 100;
    setDeal(newdeal);
    setPercent(80);
  }

  function calculateMinDeal() { 
    let newdeal = (props.product.price * 0.01) / 100;
    setDeal(newdeal);
    setPercent(0.01);
  }

  useEffect(() => {
    let newDeal = (props.product.price * 80) / 100;
    setDeal(newDeal);
  }, [props.product]);

  return (
    <>
      {props.product.price == undefined ? (
        <h1>Hello World</h1>
      ) : (
        <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center overflow-y-auto">
          {/* the first div in the spinner page  */}

          <div className="mt-24">
              {/* <div className='circle-wrap'> 

                </div> */}
              <div class="product-card">
                <div class="product-image">
                  <img src={props.product.image} alt="" />
                </div>
                <h1 class="product-title">Product Title</h1>
                <p class="product-price">${props.product.price}</p>
              </div>
          </div>

          {/* the second last or the between div in the spinner page  */}
          <div className="flex flex-row justify-center items-center gap-2 mb-5 mt-5">
            <div className="pt-3 pb-3 pl-7 pr-7 rounded-sm bg-green-600 font-bold text-white">
              DEAL FOR ${deal}
            </div>

            <div className="p-3 pb-3 rounded-sm bg-blue-500 text-xl text-white">
              <FiRefreshCcw />
            </div>

            <div className="flex flex-col justify-center items-center gap-2 bg-white pl-2 pr-2 pt-1 pb-1 rounded-sm">
              <input type="checkbox" name="" id="" />
              <p className="text-[10px] font-bold text-gray-300">QUICK SPIN</p>
            </div>
          </div>

          {/* the lower last div in the spinner page  */}
          <div className="bg-[#fff7f7] flex flex-col justify-center items-start pl-5 w-[80%] rounded-md">
            <div className="pt-5 ">
              <p className="font-bold text-md text-black">CHANCE</p>
              <div className="flex gap-1 bg-white p-2 mt-2">
                <input
                  type="text"
                  name=""
                  id=""
                  value={`${percent}%`}
                  className="font-bold text-black"
                  onChange={(e) => {
                    setPercentChance(e.target.value);
                  }}
                />
                <div className="flex gap-2 ">
                  <button
                    className="bg-black text-white font-bold p-2 text-center text-sm"
                    onClick={() => {
                      calculateMinDeal();
                    }}
                  >
                    Min
                  </button>
                  <button
                    className="bg-black text-white font-bold p-2 text-center text-sm"
                    onClick={() => {
                      calculateDeal(10);
                    }}
                  >
                    10%
                  </button>
                  <button
                    className="bg-black text-white font-bold p-2 text-center text-sm"
                    onClick={() => {
                      calculateDeal(25);
                    }}
                  >
                    25%
                  </button>
                  <button
                    className="bg-black text-white font-bold p-2 text-center text-sm"
                    onClick={() => {
                      calculateDeal(50);
                    }}
                  >
                    50%
                  </button>
                  <button
                    className="bg-black text-white font-bold p-2 text-center text-sm"
                    onClick={() => {
                      calculateMaxDeal();
                    }}
                  >
                    Max
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-5 w-[95%]">
              <p className="font-bold text-md text-black">PRICE</p>
              <div className="flex gap-1 bg-white p-3 mt-2">
                <input
                  type="text"
                  className="w-[100%] font-bold text-black"
                  name=""
                  id=""
                  value={`$ ${deal}`}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="pt-5 pb-5 w-[95%]">
              <div className="w-full mt-4">
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Spinner;
