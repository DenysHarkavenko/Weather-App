import React, { useState } from 'react';
import './_Header.css'
import axios from 'axios';

export function Header({ setCity }: any) {
  const API_KEY: string = '22e03cb4b1754deb92085549230812'
  const [country, setCountry] = useState('')
  const card = document.querySelector('.card')

  // I know problem with add class for dom element, but mb fix it later :)
  async function getData(e:React.FormEvent): Promise<void> {
    e.preventDefault()

    try{
      if(country.trim().length !== 0){
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?aqi=no`, {
          params:{
            key: API_KEY,
            q: country
          }
        })

        response.data.current.is_day === 0 ? card?.classList.add('night') : card?.classList.remove('night')
        setCity(response.data)
        setCountry('')
      } else{
        window.alert('You have not entered the name of the city!')
      }
    } 
    catch(e){
      console.error(`ERROR: ${e}`)
      window.alert('Wrong city name!')
    }
  }
  
  return(
    <header className="header">
        <div className="header-wrapper">
            <h1 className="header__title">My Weather</h1>
            <form className="header__form">
                <input 
                    className="header__form-input" 
                    type="text" 
                    placeholder="Enter the name of your city" 
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    />
                <button 
                    className='header__form-btn' 
                    type="submit"
                    onClick={getData}
                >
                Show
                </button>
            </form>
        </div>
    </header> 
  )
}



