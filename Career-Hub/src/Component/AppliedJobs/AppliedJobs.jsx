import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplications } from "../LocalStorage/LocalStorage";
const AppliedJobs = () => {

    const AppliedJobs = useLoaderData()
    const [storeJob, setStoreJob] = useState([])
    const [seAll, setSeeAll] = useState(2)
    //Filter
    const [filterJob, setFilterJob] = useState([])



    //  Filter Strat
    const handleFilter = filter => {
        if (filter === "all") {
            setFilterJob(storeJob)
        }
        else if (filter === "remote") {
            const remoteJob = storeJob.filter((item) => item.remote_or_onsite === "Remote")
            setFilterJob(remoteJob)
        }
        else if (filter === "onsite") {
            const onsitJob = storeJob.filter(
                (item) => item.remote_or_onsite === "Onsite"
            );
            setFilterJob(onsitJob)
        }
    }
    //   Filter End

    useEffect(() => {
        const storeJobIds = getStoredApplications();
        if (AppliedJobs.length > 0) {
            const appliedJob = AppliedJobs.filter((job) => storeJobIds.includes(job.id));
            setStoreJob(appliedJob)
            // Filter
            setFilterJob(appliedJob)
        }
    }, [])

    return (
        <div className="">
            <div className="mt-10 lg:ml-[400px]">

                <h1 className=" text-2xl font-bold lg:ml-44">Applied Job : <span className="text-green-600">{storeJob.length}</span></h1>

                {/* Filter Start */}
                <div className="dropdown dropdown-bottom bg-green-500 rounded lg:ml-56 mt-8">
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
                        <li onClick={() => handleFilter("remote")}>
                            <a>Remote</a>
                        </li>
                        <li onClick={() => handleFilter("onsite")}>
                            <a>Onsite</a>
                        </li>
                    </ul>
                </div>
                {/* Filter End */}

                {
                    filterJob.slice(0, seAll).map((appliedJobCart) => (
                        <div className="mt-10" key={appliedJobCart.id}>
                            <a href="#" className="flex flex-col items-center bg-white border  border-gray-600 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover lg:w-72 rounded-t-lg lg:h-28 md:h-52  md:w-48 md:rounded-none md:rounded-s-lg p-6" src={appliedJobCart.logo} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{appliedJobCart.job_title}</h5>
                                    <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">{appliedJobCart.company_name}</p>
                                    <div className="flex justify-between">
                                        <button className="bg-gray-400 h-10 w-24 rounded">Remote</button>
                                        <button className="bg-gray-400 h-10 w-24 rounded">Full Time</button>
                                    </div>
                                    <h1 className="text-xl mt-2">{appliedJobCart.location}</h1>
                                    <button className="bg-yellow-200 h-14 rounded mt-6 w-full">View Details</button>
                                </div>
                            </a>
                        </div>
                    ))
                }
                <button onClick={() => setSeeAll(storeJob.length)} className={storeJob.length === seAll ? "hidden" : "text-xl lg:ml-48 h-12 w-40 mt-5 bg-green-600 rounded"}>See All</button>
            </div>
        </div>
    );
};

export default AppliedJobs;