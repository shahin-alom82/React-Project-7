import { useEffect } from "react";
import { useState } from "react";
import Countries from "../Countries/Countries";

const Country = () => {
    const [country, setCountry] = useState([]);

    const [visitedCountry, visitedSetCountry] = useState([]);

    const [charge, setCharge] = useState(12)


    const handleVisitedBtn = country => {
        const newCountry = [...visitedCountry, country]
        visitedSetCountry(newCountry)
    }

    

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    return (
        <div>
            <div className="lg:mx-20 mt-10 p-2">
                <h1 className="text-xl font-semibold">Total Visited Countris : {visitedCountry.length}</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-10 gap-5 mt-5">
                    {
                        visitedCountry.map((cartItem) => (
                            <div key={cartItem.cca3}>
                                <img className="h-20 w-32" src={cartItem.flags?.png} alt="" />
                                <h1 className="font-semibold text-green-500">{cartItem.name.common}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="lg:mx-20 p-2">
                <h1 className="text-center text-3xl font-semibold mt-5">Total Country : <span className="text-fuchsia-600">{country.length}</span></h1>
                <div className="gap-10 grid  md:grid-cols-1 lg:grid-cols-4 mt-10">
                    {
                        country.slice(0, charge).map(country => <Countries
                            handleVisitedBtn={handleVisitedBtn}
                            country={country}
                            key={country.cca3}
                        ></Countries>)
                    }
                </div>
                <button onClick={() => setCharge(country.length)} className=" text-center mt-5 mx-auto lg:ml-[600px] lg:h-16 lg:w-52 rounded  bg-red-700 text-xl font-semibold text-cyan-50">See All</button>
            </div>
        </div>
    );
};

export default Country;