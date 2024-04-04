import Appointment from "../Appointment/Appointment";
import Banner from "../Banner/Banner";
import ChoseUs from "../ChoseUs/ChoseUs";
import Service from "../Service/Service";
import TimeSchedule from "../TimeSchidule/TimeSchidule";

const Home = () => {
    return (
        <div className="mt-10">
            <Banner></Banner>
            <ChoseUs></ChoseUs>
            <Service></Service>
            <TimeSchedule></TimeSchedule>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;