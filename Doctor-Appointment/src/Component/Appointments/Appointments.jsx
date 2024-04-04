import { FcBusinessman, FcCalendar } from "react-icons/fc";

const Appointments = ({ appointment }) => {
    const { fees, time, categories, name, img } = appointment;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl">
                <img className="h-80 rounded-t-xl" src={img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="text-center text-2xl font-semibold">{name}</h2>
                    <div className="flex text-xl gap-1 text-gray-700">
                        <FcBusinessman className="mt-1"></FcBusinessman>
                        <h1>Specialised Doctors : {categories}</h1>
                    </div>
                    <div className="flex text-xl gap-1 text-gray-700">
                        <FcCalendar className="mt-1"></FcCalendar>
                        <h1>Time And Day : {time}</h1>
                    </div>
                    <div className="flex text-xl gap-1 text-gray-700">
                        <FcCalendar className="mt-1"></FcCalendar>
                        <h1>Amount : $ {fees}</h1>
                    </div>
                    <button className="border mt-2 hover:text-green-600 border-green-600 text-green-900 w-56 h-12 text-xl font-semibold rounded-md">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Appointments;