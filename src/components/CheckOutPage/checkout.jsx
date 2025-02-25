import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer"

const checkout = () => {
  const [cart, setCart] = useState([]);
  // const [grandTotal, setGrandTotal] = useState(0);
  const navigate = useNavigate();


  // Load cart items only once when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []); //  Only runs once


  const handleConfirmCheckout = () => {
    alert("Checkout successful! Your rental is confirmed.");
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/");
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div className="p-5 px-8 md:px-12">
        <h2 className="text-2xl font-bold my-4 text-center text-blue-600">Checkout</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="md:flex justify-between border-b p-2 bg-white mb-5">
                <div className="bg-blue-600 md:w-1/4 py-16 p-5 mb-4 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-2xl">{item.name}</p>
                  <p className="font-bold mt-2">Price: {item.price}</p>
                  <p className="font-bold mt-2">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
            <button
              onClick={handleConfirmCheckout}
              className="bg-green-600 hover:bg-green-400 text-white px-4 py-2 rounded mt-4"
            >
              Confirm Checkout
            </button>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default checkout;

