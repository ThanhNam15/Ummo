import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../../css/Weather.css"
import { Button } from 'bootstrap';

export default function Weather() {
    const apikey = "222207102c567ad157a072e0e9c280f2"
    const [text, setText] = useState("Ho Chi Minh");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=${apikey}`;
    const [date, setDate] = useState(null);
    
    const getData = () => {
        axios.get(url).then(function (res) {
            setData(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            if (error.response.status === "404" ) {
                setError("invalid information");
                setData(null);
            }
        })
    };
    
    useEffect(() => {
        getData();
    }, []);
    
    return (
    <div className="container">
        <div className="weather__form">
            <input className="weather__form-location" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Location" 
            onKeyDown={(e) => {
                    if(e.key === "Enter" && text) {
                        getData();
                    }
                }
            }/>
            <button className="weather__form-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        {error && <h1>{error}</h1>}
        {data && (
        <div className="weather__info">
            <div className="weather__info-title">
                <h1>{data.name}</h1>
            </div>
            <div className="weather__info-details">
                <div className="weather__info-details--location">
                    <div className="weather__info-details--location-city"><i class="fa-solid fa-location-dot"></i> {data.name}</div>
                    <div className="weather__info-details--location-day"><i class="fa-solid fa-calendar-days"></i> DayTime | </div>
                    <div className="weather__info-details--location-temp">{data.main.temp} °C</div>
                    <div className="weather__info-details--location-country" >
                        <h2>{data.weather[0].description}</h2>
                        <p>City: {data.name}</p>
                        <p>Temp: {data.main.temp}</p>
                        <p>Country: {data.sys.country}</p>
                    </div>
                </div>
                <div className="weather__info-details--img">
                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
                </div>
            </div>
        </div>
        )}
    </div>
  );
}
