
import { FcBusinessman, FcCalendar } from "react-icons/fc";
import { Link } from "react-router-dom";
const Services = ({ service }) => {
    const { id, img, openDays, name, countDoctors } = service;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl">
                <img className="h-80 rounded-t-xl" src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">{name}</h2>
                    <div className="flex text-xl gap-1 text-gray-700">
                        <FcBusinessman className="mt-1"></FcBusinessman>
                        <h1>Specialised Doctors : {countDoctors}</h1>
                    </div>
                    <div className="flex text-xl gap-1 text-gray-700 items-center">
                        <FcCalendar className="mt-1"></FcCalendar>
                        <h1>Open : {openDays}</h1>
                    </div>
                    <h1 className="text-lg text-gray-700">Click on the details button to see more information about this service.</h1>
                    <Link to={`/details/${id}`}><button className="border hover:text-green-600 text-green-700 border-green-600 w-56 h-12 text-xl font-semibold rounded-md">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;