import Navbar from "../Navbar/navbar"
import Car_1 from "../../assets/car-1.png"
import Car_2 from "../../assets/car-2.png"
import Mark from "../../assets/mark.png"
import Switch from "../../assets/Switch.png"
import Card from "../Card/card"
import {bundle} from "../Js File/bundle"
import Footer from "../Footer/footer"
import { useState, useEffect } from "react";

const dashboard = () => {

  const [cart, setCart] = useState([]); // Track cart items

  // Load cart data from localStorage on page load
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Function to add an item to the cart
//   const addToCart = (item) => {
//     const updatedCart = [...cart, item];
//     setCart(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
//   };

const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      existingItem.quantity += 1; // Increment quantity if item exists
    } else {
      updatedCart.push({ ...item, quantity: 1 }); // Ensure quantity is initialized
    }
  
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  

  return (
    <div>
      <Navbar cartCount={cart.length}/>
       {/* controls the ads */}
      <div className="p-5 px-8 md:px-12">
          <div className="md:flex justify-between gap-5  ">
            <div className="md:w-1/2 bg-blue-400 p-4 rounded-xl mb-5 md:mb-0">
                <div>
                  <h2 className="text-white text-2xl font-bold mb-3">The Best Platform <br /> For Car Rentals</h2>
                  <p className="text-white mb-4 text-lg">Ease of doing a car rental safety and reliably. <br /> Of course at a low price.</p>
                  <button className="p-3 bg-blue-600 hover:bg-blue-300 text-white rounded-lg font-bold">Rental Car</button>
                  <img src={Car_1} alt="" className="pl-20"/>
                 </div>
             </div>
            <div className="md:w-1/2 bg-blue-600 p-4 rounded-xl">
                <div>
                  <h2 className="text-white text-2xl font-bold mb-3">Easy way to rent a <br /> car at a low price.</h2>
                  <p className="text-white mb-4 text-lg w-full">Providing cheap car rental service. <br /> and safe and comfortable facilities.</p>
                  <button className="p-3 bg-blue-400 hover:bg-blue-500 text-white rounded-lg font-bold">Rental Car</button>
                  <img src={Car_2} alt="" className="pl-24"/>
                </div>
            </div>

          </div>

          {/* controls pick up and drop-off */}
          <div className="md:flex justify-between items-center mt-5">
              <div className="bg-white p-4 rounded-lg w-full">
                <div className="flex gap-2">
                <img src={Mark} alt="" className="w-5 h-5"/>
                <p className="font-bold">Pick-Up</p>
                </div>
                <div className="lg:flex justify-between  mt-3">
                <div className=" mt-2 w-full">
                  <label htmlFor="" className="font-bold block pb-1">Locations</label>
                  <select name="" id="" className="font-semibold text-gray-400 outline-none w-full">
                    <option value="">Select your city</option>
                    <option value="">Lagos</option>
                    <option value="">Abuja</option>
                    <option value="">Port Harcourt</option>
                    <option value="">Ibadan</option>
                    <option value="">Kano</option>
                    <option value="">Benin City</option>
                  </select>
                </div>

                <div className=" mt-2 w-full ml-2">
                  <label htmlFor="" className="font-bold block pb-1">Date</label>
                  <select name="" id="" className="font-semibold text-gray-400 outline-none w-full">
                    <option value="">Select your date</option>
                    <option value="">Monday</option>
                    <option value="">Tuesday</option>
                    <option value="">Wednesday</option>
                    <option value="">Thursday</option>
                    <option value="">Friday</option>
                    <option value="">Saturday</option>
                    <option value="">Sunday</option>
                  </select>
                </div>

                <div className=" mt-2 w-full ml-2">
                  <label htmlFor="" className="font-bold block pb-1">Time</label>
                  <select name="" id="" className="font-semibold text-gray-400 outline-none w-full">
                    <option value="">Select your time</option>
                    <option value="">Morning</option>
                    <option value="">After-noon</option>
                    <option value="">Evening</option>
                  </select>
                </div>

                </div>
                  
              </div>

              
              <img src={Switch} alt="Switch"  className="place-items-center m-auto md:ml-0 cursor-pointer"/>
              
              <div className="bg-white p-4 rounded-lg w-full">
                <div className="flex gap-2">
                <img src={Mark} alt="" className="w-5 h-5"/>
                <p className="font-bold">Drop-Off</p>
                </div>
                <div className="lg:flex justify-between  mt-3">
                <div className=" mt-2 w-full">
                  <label htmlFor="" className="font-bold block pb-1">Locations</label>
                  <select name="" id="" className="font-semibold text-gray-400 outline-none w-full">
                    <option value="">Select your city</option>
                    <option value="">Lagos</option>
                    <option value="">Abuja</option>
                    <option value="">Port Harcourt</option>
                    <option value="">Ibadan</option>
                    <option value="">Kano</option>
                    <option value="">Benin City</option>
                  </select>
                </div>

                <div className=" mt-2 w-full ml-2">
                  <label htmlFor="" className="font-bold block pb-1">Date</label>
                  <select name="" id="" className="font-semibold text-gray-400 outline-none w-full">
                    <option value="">Select your date</option>
                    <option value="">Monday</option>
                    <option value="">Tuesday</option>
                    <option value="">Wednesday</option>
                    <option value="">Thursday</option>
                    <option value="">Friday</option>
                    <option value="">Saturday</option>
                    <option value="">Sunday</option>
                  </select>
                </div>

                <div className=" mt-2 w-full ml-2">
                  <label htmlFor="" className="font-bold block pb-1">Time</label>
                  <select name="" id="" className="font-semibold text-gray-400 outline-none w-full">
                    <option value="">Select your time</option>
                    <option value="">Morning</option>
                    <option value="">After-noon</option>
                    <option value="">Evening</option>
                  </select>
                </div>

                </div>
                  
              </div>
          </div>

          {/* controls Card files */}
          <div className="mt-8">
          <div className="flex justify-between" >
                <h3 className="font-bold text-xl">Popular Cars</h3>
                <p className="font-bold text-blue-500 cursor-pointer hover:text-blue-400">View All</p>
            </div>
        <div className="md:flex flex-wrap justify-between gap-3 lg:gap-3 mt-8">
        
            {bundle.map((items) => (
              <div key={items.id} className="card-container mb-5">
                <Card
                    name={items.name}
                    text={items.text}
                    image={items.image}
                    price={items.price}
                    addToCart={() => addToCart(items)}
                />
              </div>
            ))}
        </div>
          </div>

          <Footer />
      </div>

    </div>
  )
}

export default dashboard