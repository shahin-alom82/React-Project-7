import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { saveDonation } from "../LocalStorage/LocalStorage";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonationDetails = () => {
    const donationDetails = useLoaderData()

    const { id } = useParams()
    const idInt = parseInt(id)
    const cart = donationDetails.find((item) => item.id === idInt)

    const handleDonation = () => {
        saveDonation(idInt)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Donation Successfully!",
            showConfirmButton: false,
            timer: 1500
        });
    }


    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);


    return (
        <div data-aos="flip-right">
            <img className="lg:w-full lg:h-[450px] rounded-3xl relative" src={cart.img} alt="" />
            <div className=" absolute lg:top-[457px] mt-[-120px] rounded-b-3xl  justify-start bg-[rgba(0,0,0,0.5)] lg:w-[1413px] lg:h-28 p-8">
                <button onClick={handleDonation} className="bg-green-400  lg:w-56 text-white font-semibold  p-4 w-24 rounded relative">{cart.price}</button>
            </div>
            <div className='p-2'>
                <h1 className="text-3xl font-bold mt-2">{cart.title}</h1>
                <h1 className="mt-3 text-xl text-gray-700">{cart.description}</h1>
            </div>
        </div>
    );
};

export default DonationDetails;