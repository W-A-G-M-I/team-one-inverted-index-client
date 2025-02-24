import Logo from "../../assets/morent-logo.png"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Inputs from "../SearchInputs/inputs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const navbar = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-white w-full flex justify-between items-center p-4 px-8 md:px-12">
      {/* Image Logo */}
      <img src={Logo} alt="Logo" />

      <div className="hidden md:flex relative w-1/2">
      <Inputs className="hidden md:flex relative "/>
      </div>

       {/* Handles cart function */}
     <div className="flex items-center gap-5"> 
     <Link to="/cart" className="relative">
     <MdOutlineShoppingCart className="w-20 h-8 cursor-pointer"  />
          {cartCount > 0 && (
            <span className="absolute -top-2 right-5 bg-red-500 text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          )}
        </Link>
      
      <button>
         <FaUserCircle className="text-3xl" /> 
       </button>
      </div>
      
    </div>
    <div className="md:hidden w-full">
    <Inputs  className="w-full" />
    </div>
    </div>
  )
}

export default navbar
