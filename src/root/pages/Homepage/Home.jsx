import Car_1 from "../../../assets/car-1.png"
import Car_2 from "../../../assets/car-2.png"
import Mark from "../../../assets/mark.png"
import Switch from "../../../assets/Switch.png"
import Card from "../components/Card/card"
import {bundle} from "../../../components/Js File/bundle"
import Footer from "../components/Footer/footer"
const Home = () => {

  return (
    <div >
       {/* controls the ads */}
      <div className="p-5 px-4 md:px-6 ">
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
<div className="md:flex justify-between items-center mt-5 gap-4">
      {/* Pick-Up Card */}
      <div className="bg-white p-5 rounded-xl w-full shadow-md border border-gray-200">
        <div className="flex items-center gap-2">
          <img src={Mark} alt="Pick-Up Icon" className="w-4 h-4" />
          <p className="font-semibold text-[16px] text-black">Pick-Up</p>
        </div>
        <div className="lg:flex justify-between gap-4 mt-4">
          {/* Locations */}
          <div className="w-full">
            <label className="font-semibold block pb-2 text-gray-700">Location</label>
            <select className="border border-gray-300 rounded-lg p-2 w-full text-gray-600 focus:outline-blue-500">
              <option>Select your city</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Port Harcourt</option>
              <option>Ibadan</option>
              <option>Kano</option>
              <option>Benin City</option>
            </select>
          </div>
          {/* Date */}
          <div className="w-full">
            <label className="font-semibold block pb-2 text-gray-700">Date</label>
            <select className="border border-gray-300 rounded-lg p-2 w-full text-gray-600 focus:outline-blue-500">
              <option>Select your date</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          {/* Time */}
          <div className="w-full">
            <label className="font-semibold block pb-2 text-gray-700">Time</label>
            <select className="border border-gray-300 rounded-lg p-2 w-full text-gray-600 focus:outline-blue-500">
              <option>Select your time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>
        </div>
      </div>

      {/* Switch Icon */}
      <div className="flex justify-center items-center">
        <img src={Switch} alt="Switch" className="w-10 h-10 cursor-pointer transition-transform hover:scale-110" />
      </div>

      {/* Drop-Off Card */}
      <div className="bg-white p-5 rounded-xl w-full shadow-md border border-gray-200">
        <div className="flex items-center gap-2">
          <img src={Mark} alt="Drop-Off Icon" className="w-4 h-4" />
          <p className="font-semibold text-[16px] text-black">Drop-Off</p>
        </div>
        <div className="lg:flex justify-between gap-4 mt-4">
          {/* Locations */}
          <div className="w-full">
            <label className="font-semibold block pb-2 text-gray-700">Location</label>
            <select className="border border-gray-300 rounded-lg p-2 w-full text-gray-600 focus:outline-blue-500">
              <option>Select your city</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Port Harcourt</option>
              <option>Ibadan</option>
              <option>Kano</option>
              <option>Benin City</option>
            </select>
          </div>
          {/* Date */}
          <div className="w-full">
            <label className="font-semibold block pb-2 text-gray-700">Date</label>
            <select className="border border-gray-300 rounded-lg p-2 w-full text-gray-600 focus:outline-blue-500">
              <option>Select your date</option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          {/* Time */}
          <div className="w-full">
            <label className="font-semibold block pb-2 text-gray-700">Time</label>
            <select className="border border-gray-300 rounded-lg p-2 w-full text-gray-600 focus:outline-blue-500">
              <option>Select your time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
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
        
           <Card />
        </div>
          </div>

      </div>

    </div>
  )
}

export default Home