import { useLoaderData } from "react-router-dom";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { useState } from "react";

const FeaturedJob = () => {
    const [seAll, setSeeAll] = useState(8)
    const job = useLoaderData()
    return (
        <div className="mt-10">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Featured Jobs</h1>
                <h1 className="text-xl mt-4 text-gray-700">Explore thousands of job opportunities with all the information you need. Its your future.</h1>
                <div className="grid md:grid-cols-1 lg:grid-cols-4 mt-10 gap-10">
                    {
                        job.slice(0, seAll).map(job => <FeaturedJobs key={job.id} job={job}></FeaturedJobs>)
                    }
                </div>
            </div>
            <button onClick={() => setSeeAll(job.length)} className={job.length === seAll ? "hidden" : "bg-blue-400 text-white h-12 mt-9 lg:ml-[600px] w-32 rounded font-bold"}>See All</button>
        </div>
    );
};

export default FeaturedJob;