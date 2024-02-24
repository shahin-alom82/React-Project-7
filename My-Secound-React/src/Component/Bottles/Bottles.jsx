import { useState } from "react";

const Bottles = ({ bottle, handleParches }) => {
    const [btl, seBtl] = useState(false)
    const handleBtl = () => {
        seBtl(!btl)
    }
    const { img, price, name, category } = bottle;
    return (
        <div>
            <div className="rounded-lg bg-gray-400">
                <img className="rounded-lg max-h-72 w-96" src={bottle.img} alt="" />
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">{bottle.name}</h1>
                    <h1 className="text-xl mt-2">Category : {bottle.category}</h1>
                    <button onClick={() => handleParches(bottle)} className="text-center btn btn-primary w-full uppercase mt-4">Parches</button>
                </div>
            </div>
        </div>
    );
};

export default Bottles;