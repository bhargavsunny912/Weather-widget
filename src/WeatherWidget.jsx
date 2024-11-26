import { useState } from "react";
import Searchbox from "./Searchbox.jsx";
import WeatherCard from "./WeatherCard";

export default function WeatherWidget(){

        let [report,setreport]=useState({
            Location:"Mumbai",
            Feels_like:29.57,
            Humidity:39,
            Temp:29.99,
            Temp_max:29.99,
            Temp_min:27.94,
            Pressure:1011,
            Weather:"smoke",
            Cod:200
        });

        function Updatereport(result){
            setreport(result);
        }

    return (
        <div>
            <Searchbox Updatereport={Updatereport}/>
            <WeatherCard report={report}/>
        </div>
    );
} 