import { FaHeart } from "react-icons/fa";

const card = ({image, name, price, text, addToCart }) => {
    return (
        <div className="bg-white py-4 px-4 w-full ">
            
            <div>
            <div className="flex justify-between items-center">
            <h4 className="font-bold text-xl">{name} </h4>
            <FaHeart className="text-red-500"/>
            </div>
            <p className="mb-10 text-gray-400 text-semibold text-sm">{text} </p>
            </div>
            <img src={image} alt={name || "Card image"} className="m-auto"/>
            <div className="flex justify-between items-center mt-10 ">
            <p className="font-semibold ">{price} </p>
            <button onClick={addToCart} className="bg-blue-600 hover:bg-blue-300 px-3 py-2 text-white font-bold rounded-lg">Rent Now</button>
            </div>
        </div>
    )
}

export default card