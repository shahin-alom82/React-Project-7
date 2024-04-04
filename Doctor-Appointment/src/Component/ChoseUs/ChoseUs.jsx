import chose from "../../assets/intro-banner.png"
const ChoseUs = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-10 lg:mx-24">
                <img className="h-[328px] rounded-md" src={chose} alt="Album" />
                <div className="card-body rounded-md shadow-slate-300 shadow-xl">
                    <h2 className="card-title text-5xl text-sky-800">WHY CHOOSE US?</h2>
                    <p className="text-xl mt-3 text-gray-700">We have High quality Doctors who are ready to help you recover. We provide all kinds of medical Treatment. We have various research laboratory and Expertice doctor. MediSure ensures the best health care as well as clinical service with outstanding personal service..</p>
                    <p className="text-xl mt-5 text-gray-700">The motto of Medisure is that human care is more than healthcare. We prefer quality over anything.</p>
                </div>
            </div>
        </div>
    );
};

export default ChoseUs;