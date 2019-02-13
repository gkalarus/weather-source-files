import React from 'react';
import './Result.css';

const Result = props => {
    const {err, city, date, sunrise, sunset, temp, pressure, wind} = props.weather;

    let content = null;

    if(!err && city ) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <React.Fragment>
                <h3>Wyniki wyszukiwania dla: <em>{city}</em></h3>
                <p>Dane dla dnia i godziny: {date}</p>
                <p>Aktualna temperatura: {temp} &#176;C</p>
                <p>Wschód słońca dzisiaj o: {sunriseTime}</p>
                <p>Zachód słońca dzisiaj o: {sunsetTime}</p>
                <p>Aktualna siła wiatru: {wind} m/s</p>
                <p>Aktualne ciśnienie: {pressure} hPa</p>
            </React.Fragment>
        )
    }

    return (  
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content }
        </div>
    );
}
 
export default Result;