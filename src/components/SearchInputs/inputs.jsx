import { IoSearch } from "react-icons/io5";

const inputs = () => {
    return (
        <div className="relative md:w-full">
        <input className="p-2 pl-16 md:pl-10 md:rounded-xl outline-none font-bold w-full border-2 border-gray-300"  placeholder="Search something here" />
        <IoSearch className="absolute top-3 pl-5 md:pl-0 w-20 md:w-12"/>
        </div>
    )
}

export default inputs