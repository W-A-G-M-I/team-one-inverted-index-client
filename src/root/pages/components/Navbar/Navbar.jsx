import Logo from "../../../../assets/morent-logo.png";
import { MdEditSquare, MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Inputs from "../SearchInputs/inputs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoCreate } from "react-icons/io5";

const Navbar = ({ cartCount }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white fixed top-0 left-0 w-full flex justify-between items-center p-4 px-4 shadow-xl md:px-6 z-50">
        <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
        <div className="hidden md:flex relative w-1/2">
          <Inputs className="hidden md:flex relative " />
        </div>

        {/* Handles cart function */}
        <div className="flex items-center gap-5">
          <Link to="/create">
          <MdEditSquare size={28} />
          </Link>
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart className="w-20 h-8 cursor-pointer" />
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

      {/* Space for Navbar height to prevent content from being hidden */}
      <div className="h-16 md:h-20"></div>

      <div className="md:hidden w-full">
        <Inputs className="w-full" />
      </div>
    </div>
  );
};

export default Navbar;
