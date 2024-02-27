import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import img1 from "../../assets/icons/accounts.png"
import img2 from "../../assets/icons/creative.png"
import img3 from "../../assets/icons/marketing.png"
import img4 from "../../assets/icons/chip.png"
const JobKategoriy = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);
    return (
        <div className="mt-10">
            <div className="mt-5 text-center">
                <h1 className="font-bold text-5xl">Job Category List</h1>
                <h1 className="mt-5 text-xl text-gray-700">Explore thousands of job opportunities with all the information you need. Its your future.</h1>
            </div>
            <div data-aos="fade-up" className="grid md:grid-cols-1 lg:grid-cols-4 gap-10 mt-10 text-center">
                {/* Card-1 */}
                <div className="max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                    <img className="mx-auto mt-5 h-16" src={img1} alt="" />
                    <a href="#">
                        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Account & Finance</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">300 Jobs Available</p>
                    </div>
                </div>
                {/* Card-2 */}
                <div className="max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="mx-auto mt-5 h-16" src={img2} alt="" />

                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Creative Design</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">300 Jobs Available</p>
                    </div>
                </div>
                {/* Card-3 */}
                <div className="max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="mx-auto mt-5 h-16" src={img3} alt="" />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Marketing & Sales</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">300 Jobs Available</p>
                    </div>
                </div>
                {/* Card-4 */}
                <div className="max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img className="mx-auto mt-5 h-16" src={img4} alt="" />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Engineering Job</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">300 Jobs Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobKategoriy;