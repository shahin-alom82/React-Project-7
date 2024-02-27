import { useState } from "react";
import Swal from "sweetalert2";


const Countries = ({ country, handleVisitedBtn }) => {

    const [visited, setVisited] = useState(false);
    const handleBtn = () => {
        setVisited(!visited)
    }

    if(visited){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Visited Country Successfully",
            showConfirmButton: false,
            timer: 1600
          });
    }

    const { name, flags, capital, population, area, cca3 } = country;

    return (
        <div>
            <div className={`rounded-lg h-[540px] ${visited && 'visited'}`}>
                <img className="h-52 w-80 rounded-lg" src={flags?.png} alt="Shoes" />
                <div className="p-6">
                    <div className="font-semibold">
                        <h2 className={`mt-1 text-3xl ${visited && 'b'}`}>{name?.common}</h2>
                        <p className="mt-2">Capital : {capital}</p>
                        <p className="mt-2">Population : {population}</p>
                        <p className="mt-2">Area : {area}</p>
                        <p className="mt-2">Code : {cca3}</p>
                    </div>
                    <div className="mt-5 gap-2 flex">
                        <button className="bg-red-400 h-9 w-20 rounded" onClick={handleBtn}>{visited ? 'Visited' : 'Going'}</button>
                        {visited ? 'I Have Visited This Country' : 'I Want To Visited'}
                    </div>
                    <br />
                    <button onClick={() => handleVisitedBtn(country)} className="bg-red-400 h-9 w-32 rounded">Mark as Visited</button>
                </div>
            </div>
        </div>
    );
};

export default Countries;