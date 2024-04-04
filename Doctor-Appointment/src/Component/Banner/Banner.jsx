import banner1 from "../../assets/./banner1.jpg"
import banner2 from "../../assets/./banner2.jpg"
import banner3 from "../../assets/./banner3.jpg"
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full lg:h-[550px] rounded-md relative">
                {/* Slider - 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex justify-between  transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* Slider - 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* Slider - 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
            <div className="absolute top-[550px] text-2xl rounded-lg ml-[400px] text-white bg-[rgba(252,252,252,0.5)] p-6">
                <h1 className="text-center font-semibold text-3xl">Medisure</h1>
                <p className="text-xl">We ensures the best health care as well as clinical service</p>
            </div>
        </div>
    );
};

export default Banner;