import { getToday } from '../../utils/dayRender';
import './_Card.css'
import { useState, useEffect } from 'react';

export function Card({city}: any){
    const today: Date = new Date()
    const dayOfWeek: number = today.getDay()
    let day: string = getToday(dayOfWeek)
    const [isDay, setIsDay] = useState(true);

    useEffect(() => {
        setIsDay(city.current.is_day === 1);
    }, [city.current.is_day]);

    return(
        <div className={isDay ? 'card day' : 'card night'}>
            <div className="card__header">
                <h3 className="card__header-city">{city.location.name}</h3>
                <h3 className="card__header-day">{day}</h3>
            </div>
            <div className="card__main">
                <img className="card__main-icon" src={city.current.condition.icon} alt="" />
                <p className="card__main-temp">{city.current.temp_c}°</p>
            </div>
            <div className="card__bottom">
                <p>{city.current.condition.text}</p>
                <div className="card__bottom-inf">
                    <p>Wind speed(km/h): {city.current.wind_kph}</p>
                    <p>Feels like: {city.current.feelslike_c}°</p>  
                </div>  
            </div>
        </div>
    )
}
