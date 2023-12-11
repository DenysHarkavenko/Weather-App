import React, { useState } from 'react';
import './_Header.css'
import { getDataFunc } from '../../utils/getDataFunc';

export function Header({ setCity }: any) {
  const API_KEY: string = '22e03cb4b1754deb92085549230812'
  const [country, setCountry] = useState('')
  
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
                    onClick={getDataFunc(country, API_KEY, setCity, setCountry)}
                >
                Show
                </button>
            </form>
        </div>
    </header> 
  )
}



