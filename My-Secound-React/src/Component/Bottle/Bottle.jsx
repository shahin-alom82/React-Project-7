import { useEffect } from "react";
import { useState } from "react";
import Bottles from "../Bottles/Bottles";

const Bottle = () => {
    const [bottle, setBottle] = useState([])
    const [parchess, setParches] = useState([])
    const [charge, setCharge] = useState(8)

    const handleParches = parches => {
        const newParches = [...parchess, parches]
        setParches(newParches)
    }

    useEffect(() => {
        fetch('/bottle.json')
            .then(res => res.json())
            .then(data => setBottle(data))
    }, [])

    return (
        <div className="lg:mx-20 p-2 ">
            <div>
                <h1 className="text-xl mt-7">Total Visited Bottole : {parchess.length}</h1>
                <div className="grid md:grid-cols-1 lg:grid-cols-10 h-[200px] gap-5 rounded">
                    {
                        parchess.map((card) => (
                            <div key={card.id}>
                                <img className="mt-6" src={card.img} alt="" />
                                <h1>{card.name}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <h1 className="text-center font-semibold text-3xl mt-5">Total Bottle : <span className="text-fuchsia-500">{bottle.length}</span></h1>
            <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-5 mt-10 ">
                {
                    bottle.slice(0, charge).map(bottle => <Bottles
                        bottle={bottle}
                        handleParches={handleParches}
                        key={bottle.id}></Bottles>)
                }
            </div>
            <button onClick={() => setCharge(bottle.length)} className="btn btn-secondary w-32 uppercase mt-10 lg:ml-[550px]">see all</button>
        </div>
    );
};

export default Bottle;