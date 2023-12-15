import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import './style/style.css'


function App() {
  const [city, setCity] = useState({})

  return (
    <div className="App">
      <Header setCity={setCity} />
      <Main city={city} />
      <Footer />
    </div>
  )
}

export default App;
