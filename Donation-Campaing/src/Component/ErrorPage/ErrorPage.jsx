import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const ErrorPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <div data-aos="zoom-in-up">
            <Link to="/"><img className="mx-auto mt-48" src="https://i.ibb.co/85Fc2c1/360-F-74957662-ZFzsr-B7-BLk-Amm-Ds6-WWbr-Uf-Mw-IZW1-FZMe.webp" alt="" /></Link>
        </div>
    );
};

export default ErrorPage;