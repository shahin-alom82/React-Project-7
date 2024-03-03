import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Donations = ({ donation }) => {
    const { id, img, title, category, card_bg_color, text_button_bg_color, category_bg_color } = donation;


    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);


    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div>
                    <div data-aos="zoom-in" style={{ backgroundColor: card_bg_color }} className="card shadow-lg">
                        <img className="h-[194px] w-[width] object-cover rounded-lg" src={img} alt="Shoes" />
                        <div className="p-4">
                            <div className="card-actions justify-start">
                                <button style={{ color: text_button_bg_color, backgroundColor: card_bg_color }} className="border rounded w-24 h-8 mt-3">{category}</button>
                            </div>
                            <h2 style={{ color: category_bg_color }} className="card-title mt-2">{title}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Donations;