import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDonations } from "../LocalStorage/LocalStorage";
import DonationDones from "../DonationDones/DonationDones";

const DonationDone = () => {
    const donationDone = useLoaderData()
    const [storeDonation, setStoreDonation] = useState([])
    // ShowAll Button
    const [showAll, setShowAll] = useState(3)
    // Filter Donation
    const [filterDonation, setFilterDonation] = useState([])



    // Filter Condition Start
    const handleFilter = filter => {
        if (filter === "all") {
            setFilterDonation(storeDonation)
        }
        else if (filter === "health") {
            const healthDonation = storeDonation.filter((item) => item.category === "Health")
            setFilterDonation(healthDonation)
        }
        else if (filter === "education") {
            const educationDonation = storeDonation.filter((item) => item.category === "Education");
            setFilterDonation(educationDonation)
        }
        else if (filter === "food") {
            const foodDonation = storeDonation.filter((item) => item.category === "Food");
            setFilterDonation(foodDonation)
        }
        else if (filter === "clothing") {
            const clothingDonation = storeDonation.filter((item) => item.category === "Clothing");
            setFilterDonation(clothingDonation)
        }
    }
    // Filter Condition End



    useEffect(() => {
        const storeDonations = getStoreDonations()
        if (donationDone.length > 0) {
            const storeCart = donationDone.filter((cart) => storeDonations.includes(cart.id))
            setStoreDonation(storeCart)
            setFilterDonation(storeCart)
        }
    }, [])
    return (
        <div>
            <h1 className="text-center font-bold text-4xl text-lime-500">Total Donation Category : <span className="text-green-400 font-bold text-5xl">{storeDonation.length}</span></h1>
            {/* Filter Start */}
            <div className="dropdown dropdown-bottom bg-green-500 rounded lg:ml-[650px] mt-8">
                <div tabIndex={0} role="button" className="btn m-1">
                    Filter By
                </div>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    <li onClick={() => handleFilter("all")}>
                        <a>All</a>
                    </li>
                    <li onClick={() => handleFilter("education")}>
                        <a>Education</a>
                    </li>
                    <li onClick={() => handleFilter("food")}>
                        <a>Food</a>
                    </li>
                    <li onClick={() => handleFilter("health")}>
                        <a>Health</a>
                    </li>
                    <li onClick={() => handleFilter("clothing")}>
                        <a>Clothing</a>
                    </li>
                </ul>
            </div>
            {/* Filter End */}
            <div>
                {
                    filterDonation.slice(0, showAll).map(storeDonation => <DonationDones storeDonation={storeDonation} key={storeDonation.id}></DonationDones>)
                }
            </div>
            <button onClick={() => setShowAll(storeDonation.length)} className={storeDonation.length === showAll ? "hidden" : "h-16 w-48 bg-green-400 font-semibold rounded-3xl mt-5 lg:ml-[600px]"}>Show All</button>
        </div>
    );
};

export default DonationDone;