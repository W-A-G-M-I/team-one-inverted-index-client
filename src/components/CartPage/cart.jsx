import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { useState, useEffect } from "react";
import Footer from "../Footer/footer"

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Use for navigation

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [cart]);

  // Update quantity
  // const updateQuantity = (index, amount) => {
  //   const updatedCart = [...cart];
  //   updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + amount);
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  const updateQuantity = (index, amount) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + amount);
      
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage immediately
      return updatedCart;
    });
  };
  

  // Remove item from cart
  // const removeFromCart = (index) => {
  //   const updatedCart = cart.filter((_, i) => i !== index);
  //   setCart(updatedCart);
  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  // };

  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage immediately
      return updatedCart;
    });
  };
  

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <div className="p-5 px-8 md:px-12">
        <h2 className="text-2xl font-bold my-4 text-center text-blue-600">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="md:flex justify-between border-b p-2 bg-white mb-5">
                <div className="bg-blue-600 md:w-1/4 py-16 p-5 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="md:flex gap-16 w-1/2 justify-between items-center">
                  <div>
                    <p className="font-bold text-xl mb-10 mt-4">{item.name}</p>
                    <p className="font-bold text-md mb-5 ">Price: {item.price}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button onClick={() => updateQuantity(index, -1)} className="px-4 py-2 bg-blue-600 font-bold text-white rounded">-</button>
                    <span className="font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, 1)} className="px-3 py-2 bg-blue-600 font-bold text-white rounded">+</button>
                  </div>
                  <div className="pt-5">
                    <button
                      onClick={() => navigate("/checkout")}
                      className="block bg-blue-600 hover:bg-blue-300 px-3 py-3 text-white text-sm font-bold rounded-lg mb-10"
                    >
                      Rent Now
                    </button>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="bg-red-500 hover:bg-red-300 px-3 py-2 text-white font-bold rounded-lg"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <Footer /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

