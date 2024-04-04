import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import { FcServices } from "react-icons/fc";
import { useState } from "react";
const Service = () => {
    const service = useLoaderData()
    const [showAll, setShowAll] = useState(6)

    return (
        <div>
            <div className="flex gap-4 font-bold text-4xl text-center mt-10 text-amber-600 lg:ml-[500px]">
                <FcServices />
                <h1>OUR MAIN SERVICES</h1>
            </div>
            <h1 className="text-center text-xl text-gray-700 mt-4">Human care is more than healthcare. We prefer quality over anything.</h1>
            <div className="mt-10 grid md:grid-cols-1 lg:grid-cols-3 gap-10 ">
                {
                    service.slice(0, showAll).map(service => <Services service={service} key={service.id}></Services>)
                }
            </div>
            <button onClick={() => setShowAll(service.length)} className={service.length === showAll ? "hidden" : "text-xl font-semibold bg-green-500 text-white lg:ml-[630px] h-10 w-36 rounded mt-5"}>Show All Cart</button>
        </div>
    );
};

export default Service;