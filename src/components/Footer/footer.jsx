import Logo from "../../assets/morent-logo.png"

const footer = () => {
    return (
        <div className="w-full p-10 bg-white md:flex justify-between">
            <div className="mb-5">
                <img src={Logo} alt="Logo" />
                <p className="text-gray-400 mt-4 md:w-1/2">Our vision is to provide convinence and help increase your sales business. </p>
            </div>
            <div className="md:flex gap-10">
                <div className="block">
                    <h2 className="font-bold text-xl pb-3 ">About</h2>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">How it works</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Featured</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Partnership</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Business Relation</a>
                </div>
                <div>
                    <h2 className="font-bold text-xl pb-3 ">Community</h2>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Event</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Blog</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Podcst</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Invite a friend</a>
                </div>
                <div>
                    <h2 className="font-bold text-xl pb-3 ">Socials</h2>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Discord</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Instagram</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Twitter</a>
                    <a className="block text-sm pb-3 text-gray-400 cursor-pointer">Facebook</a>
                </div>
            </div>

        </div>
    )
}

export default footer