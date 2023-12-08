import React from 'react';
import { Header } from './components/Header/Header';
import './style/style.css'
import { Card } from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Card />
      </main>
    </div>
  );
}

export default App;
