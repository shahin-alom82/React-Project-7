import { Outlet } from "react-router-dom";
const Root = () => {
    return (
        <div className="lg:mx-16 p-2">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;