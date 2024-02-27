import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import logo from "../../assets/images/user.png"

const Banner = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);

    return (

        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className="flex bg-blue-500 rounded-lg mt-10">
            <div className=" text-white py-4 px-6 sm:py-6 sm:px-8 md:py-8 md:px-12 lg:py-10 lg:px-16 xl:py-12 xl:px-20 mt-28">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">Welcome to our Website</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">Explore thousands of job opportunities with
                    all the information you need.</p>
                <button className="bg-white text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 lg:py-5 lg:px-12 xl:py-6 xl:px-14 font-bold rounded-full shadow-lg transition-all duration-300 uppercase">Get Started</button>
            </div>
            <div>
                <img data-aos="zoom-in-down" src={logo} alt="" />
            </div>
        </div>



        // <div className="flex md:flex-col-1 justify-between p-2 mt-10 bg-red-100 rounded-lg">
        //     <div className="lg:mt-20 lg:ml-20">
        //         <h1 className="text-6xl font-bold"><span className="text-amber-500">One Step</span> <span className="text-green-500">Closer To Your</span>
        //             <br />
        //             <span className="text-lime-500">Dream Job</span></h1>
        //         <p className="text-xl mt-10 text-gray-700">Explore thousands of job opportunities with
        //             all the information <br /> you need.
        //             Its your future.
        //             Come find it. Manage all your <br /> job applications from start to finish.</p>
        //         <button className="mt-10 bg-orange-400 h-14 w-60 rounded text-xl text-white font-semibold uppercase">Get Started</button>
        //     </div>
        //     <div>
        //         <img className="h-[450px]" src="/src/assets/images/user.png" alt="" />
        //     </div>
        // </div>

        
    );
};

export default Banner;