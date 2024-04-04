import { FcBusinessman, FcCalendar } from "react-icons/fc";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsCart = () => {
    const details = useLoaderData()
    const { id } = useParams()
    const findData = details.find((item) => item.id === id)
    console.log(findData)

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-2xl lg:mx-32 mt-10">
                <img className="h-[400px] w-[550px] rounded-lg" src={findData.img} alt="Album" />
                <div className="card-body">
                    <h2 className="text-3xl font-semibold">{findData.name}</h2>
                    <div className="mt-9">
                        <div className="flex text-xl gap-1 text-gray-700">
                            <FcBusinessman className="mt-1"></FcBusinessman>
                            <h1>Specialised Doctors : {findData.countDoctors}</h1>
                        </div>
                        <div className="flex text-xl gap-1 text-gray-700 items-center">
                            <FcCalendar className="mt-1"></FcCalendar>
                            <h1>Open : {findData.openDays}</h1>
                        </div>
                    </div>
                    <h1 className="text-lg text-gray-700">Click on the details button to see more information about this service.</h1>
                    <Link to={`/`}><button className="border mt-14 hover:text-green-600 text-green-700 border-green-600 w-56 h-12 text-xl font-semibold rounded-md">Go Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsCart;