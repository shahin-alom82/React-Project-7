import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const FeaturedJobs = ({ job }) => {
    const { id, company_name, job_title, logo, location, salary } = job;
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);
    return (
        <div>
            <div data-aos="fade-up" className="max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[340px]">
                <a href="#">
                    <img className="rounded-t-lg mx-auto mt-6" src={logo} alt="" />
                </a>
                <div className="p-5">
                    <div className="flex justify-between text-gray-600 font-semibold">
                        <h1>Full Time</h1>
                        <h1>Posted</h1>
                    </div>
                    <h1 className="text-xl font-semibold mt-5 text-start">{job_title}</h1>
                    <h1 className="text-gray-600 font-semibold mt-5 text-start">{company_name}</h1>
                    <h1 className="text-gray-600 font-semibold mt-1 text-start">{location}</h1>
                    <h1 className="text-gray-600 font-semibold mt-1 text-start">{salary}</h1>
                    <div className="flex mx-auto mt-5 gap-2">
                        <button className="bg-stone-200 h-10 w-24 rounded">Remote</button>
                        <button className="bg-stone-200 h-10 w-24 rounded">Full Time</button>
                        <Link to={`/details/${id}`}><button className="bg-blue-400 text-white h-10 w-24 rounded">Detailes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;