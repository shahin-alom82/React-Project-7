import logo1 from "../../assets/about1.jpg"
import logo2 from "../../assets/about2.jpg"
import logo3 from "../../assets/about3.jpg"
const About = () => {
    return (
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 mt-10 mx-12">
                <div>
                    <img className="h-[500px] mt-16 rounded-md" src={logo1} alt="" />
                </div>
                <div>
                    <img className="h-[600px] mb-10 rounded-3xl" src={logo2} alt="" />
                </div>
                <div>
                    <img className="h-[500px] mt-16 lg:ml-[80px] rounded-md" src={logo3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;