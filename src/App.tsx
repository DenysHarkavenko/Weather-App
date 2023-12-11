import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import './style/style.css'


function App() {
  const [city, setCity] = useState({})

  return (
    <div className="App">
      <Header setCity={setCity} />
      <main className='main'>
      {Object.keys(city).length !== 0 && (
        <Main city={city} />
      )}
      </main>
      <Footer />
    </div>
  )
}

export default App;
