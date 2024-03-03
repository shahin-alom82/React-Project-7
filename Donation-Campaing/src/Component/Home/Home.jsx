


import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Donations from "../Donation/Donations";
import { useState, useEffect } from "react"; // Import useEffect for handling card updates

const Home = () => {
    const donations = useLoaderData(); // Corrected variable name
    const [showAll, setShowAll] = useState(8);
    const [cards, setCards] = useState([]);

    // useEffect to update cards when donations change
    useEffect(() => {
        setCards(donations); // Initially set cards to all donations
    }, [donations]);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = e.target.search.value.toLowerCase();
        const filteredCards = donations.filter((item) => item.category.toLowerCase().includes(searchQuery));
        setCards(filteredCards);
    };

    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <h1 className="mt-10 text-5xl font-bold text-center text-green-600">Donation Category</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
                {
                    cards.slice(0, showAll).map((donation, index) => <Donations donation={donation} key={index}></Donations>)
                }
            </div>
            <button onClick={() => setShowAll(cards.length)} className={cards.length === showAll ? "hidden" : "bg-green-400 h-16 w-56 font-semibold text-white rounded-full mt-10 lg:ml-[600px]"}>Show All</button>
        </div>
    );
};

export default Home;
