import { useEffect, useState } from "react";
import Appointments from "../Appointments/Appointments";
import { FcServices } from "react-icons/fc";

const Appointment = () => {
    const [appointment, setAppointment] = useState([])
    const [showAll, setShowAll] = useState(3)
    useEffect(() => {
        fetch("/doctor.json")
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])
    return (
        <div>
            <div className="flex gap-4 font-bold text-4xl text-center text-amber-600 lg:ml-[450px]">
                <FcServices />
                <h1 className="uppercase">Request Appointment</h1>
            </div>
            <h1 className="text-xl text-gray-700 text-center mt-3">Make sure to make an appointment before visiting our clinic</h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 mt-10 gap-10">
                {
                    appointment.slice(0, showAll).map(appointment => <Appointments appointment={appointment} key={appointment.id}></Appointments>)
                }
            </div>
            <button onClick={() => setShowAll(appointment.length)} className={appointment.length === showAll ? "hidden" : "text-xl font-semibold bg-green-500 text-white lg:ml-[630px] h-10 w-36 rounded mt-5"}>Show All Cart</button>
        </div>
    );
};

export default Appointment;