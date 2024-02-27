import Banner from "../Banner/Banner";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import JobKategoriy from "../JobKategoriy/JobKategoriy";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobKategoriy></JobKategoriy>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;