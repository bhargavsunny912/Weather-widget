import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Searchbox({Updatereport}){

    let [city,setcity]=useState("");

    let Api_key="cbe9a2f42713ef6130cfa11e90894a68";
    let Api_url="https://api.openweathermap.org/data/2.5/weather";
    

    async function WeatherReport() {
        let location=await fetch(`${Api_url}?q=${city}&appid=${Api_key}&units=metric`);
        let Jsonlocation=await location.json();
        console.log(Jsonlocation);
        let Report={ 
            Location:Jsonlocation.name,
            Feels_like:Jsonlocation.main.feels_like,
            Humidity:Jsonlocation.main.humidity,
            Temp:Jsonlocation.main.temp,
            Temp_max:Jsonlocation.main.temp_max,
            Temp_min:Jsonlocation.main.temp_min,
            Pressure:Jsonlocation.main.pressure,
            Weather:Jsonlocation.weather[0].description,
            Cod:Jsonlocation.cod,
        };
        console.log(Report);
        return Report;
    }

    function Cityname(event){
        setcity(event.target.value);
    }

    async function Formsubmit(event){
        event.preventDefault();
        setcity("");
        let result=await WeatherReport();
        Updatereport(result); 
    }

    return (
        <form className='Searchbox' onSubmit={Formsubmit}>
            <h2>WEATHER ENGINE BY BHARGAV</h2>
            <TextField id="outlined-basic" label="Location" variant="outlined" value={city} onChange={Cityname} color="error"/><br /><br />
            <Button variant="contained" color="error" type='submit'>Search</Button>
        </form>
    );
}

Searchbox.propTypes={
    Updatereport:PropTypes.string.isRequired,
}