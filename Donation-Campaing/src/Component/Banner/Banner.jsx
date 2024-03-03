import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = ({ handleSearch }) => {


    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div data-aos="zoom-in-up" className="carousel w-full lg:h-[700px] md:h-[200px] object-cover rounded-lg">
            {/* https://i.ibb.co/5GFc8bn/Wedding.jpg */}
            <div className="hero object-cover" style={{ backgroundImage: 'url(https://i.ibb.co/Xt3B4pr/donation.jpg)' }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="lg:text-6xl text-xl font-bold  text-[#ffffff]">
                            I Grow By Helping People In Need</h1>
                        <form onSubmit={handleSearch}>
                            <input type="search" placeholder="Search here...." name="search" id="default-search" className=" p-3 mt-16 rounded-l  lg:w-72 input-error text-black" />
                            <button type="submit" className="bg-[#FF444A] font-semibold lg:w-28 p-3 rounded-r">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;