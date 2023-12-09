import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import './style/style.css'
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

function App() {
  const [city, setCity] = useState({})

  return (
    <div className="App">
      <Header setCity={setCity} />
      <main className='main'>
      {Object.keys(city).length !== 0 && (
        <Card city={city} />
      )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
