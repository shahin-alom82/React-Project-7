import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import { saveJobApplication } from "../LocalStorage/LocalStorage";
import Swal from "sweetalert2";

const DetailsCart = () => {
    const details = useLoaderData();
    const { id } = useParams()
    //ParseInt
    const idInt = parseInt(id)

    const findData = details.find((item) => item.id === idInt)

    const handleApply = () => {
        saveJobApplication(idInt)
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Job Applied Successfully!",
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
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

                <div data-aos="flip-up" className="md:col-span-2 rounded-lg bg-gray-300">
                    <div className="mx-auto">
                        <figure>
                            <img
                                className="mx-auto mt-9 w-48 md:w-64 rounded-md shadow-md"
                                src={findData.logo}
                                alt="Job Logo"
                            />
                        </figure>
                    </div>
                    <div className="card card-side mb-14 p-6">
                        <div className="card-body">
                            <h2 className="text-2xl font-semibold mb-4">{findData.job_title}</h2>
                            <p className="text-gray-700 mb-4">{findData.job_description}</p>
                            <p className="text-gray-700 mb-4">
                                <span className="font-semibold">Responsibilities:</span>{" "}
                                {findData.job_responsibility}
                            </p>
                            <p className="text-gray-700 mb-4">
                                <span className="font-semibold">Education:</span>{" "}
                                {findData.educational_requirements}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Experience:</span>{" "}
                                {findData.experiences}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    data-aos="fade-down-left"
                    className="md:col-span-1 h-[500px] bg-sky-500 p-4 rounded-lg shadow"
                >
                    <h1 className="text-center text-3xl font-bold">Job Details</h1>
                    <div className="mt-10">
                        <h1 className="font-bold">
                            Salary : <span className="ml-5">{findData.salary}</span>
                        </h1>
                        <br />
                        <h1 className="font-bold">
                            Job Title : <span className="ml-5">{findData.job_title}</span>
                        </h1>
                        <br />
                        <h1 className="font-bold">
                            Phone :{" "}
                            <span className="ml-5">{findData.contact_information.phone}</span>
                        </h1>
                        <br />
                        <h1 className="font-bold">
                            Email :{" "}
                            <span className="ml-5">{findData.contact_information.email}</span>
                        </h1>
                        <br />
                        <h1 className="font-bold">
                            Address :{" "}
                            <span className="ml-5">{findData.contact_information.address}</span>
                        </h1>
                    </div>
                    <button
                        onClick={handleApply}
                        className="btn w-72 mx-auto lg:ml-16 bg-blue-600 text-white py-2 px-4 rounded mt-20"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCart;