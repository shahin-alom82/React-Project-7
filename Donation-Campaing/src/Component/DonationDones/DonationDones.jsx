import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const DonationDones = ({ storeDonation }) => {
    const { category, title, price, card_bg_color, category_bg_color } = storeDonation;



    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);



    return (
        <div>
            <div data-aos="zoom-in-right" className="mt-10 lg:ml-[400px]">
                <a href="#" style={{ backgroundColor: card_bg_color }} className="flex flex-col items-center bg-white border  rounded-lg md:flex-row md:max-w-xl dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover lg:w-72 rounded-lg rounded-t-lg lg:h-64 md:h-52  md:w-48 md:rounded-none md:rounded-s-lg" src={storeDonation.img} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <button style={{ backgroundColor: category_bg_color }} className="h-10 w-28 rounded text-green-200 font-semibold">{storeDonation.category}</button>
                        <h5 className="mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{storeDonation.title}</h5>
                        <p className="mt-5 font-normal text-xl text-gray-700 dark:text-gray-400">{storeDonation.price}</p>
                        <div className="flex justify-between">
                        </div>
                        <h1 className="text-xl mt-2"></h1>
                        <button className="bg-gray-400 h-12 rounded mt-6 w-52">View Details</button>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default DonationDones;