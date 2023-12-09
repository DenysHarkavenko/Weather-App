import './_Card.css'

export function Card({city}: any){
    const today = new Date()
    const dayOfWeek: number = today.getDay()
    let day: string = ''

    switch(dayOfWeek){
        case 1:
            day = 'Monday'
            break
        case 2:
            day = 'Tuesday'   
            break       
        case 3:
            day = 'Wednesday'
            break     
        case 4:
            day = 'Thursday'
            break    
        case 5:
            day = 'Friday'
            break     
        case 6:
            day = 'Saturday'
            break
        case 7:
            day = 'Sunday'
            break
        default:
            break
    }

    return(
        <div className="card">
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
                <p>Feels like: {city.current.feelslike_c}°</p>
            </div>
        </div>
    )
}