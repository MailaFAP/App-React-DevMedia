import React from 'react';
import './App.css';

import Header from './Componentes/Header/header';
import Footer from './Componentes/Footer/footer';
import HomePage from './Componentes/HomePage/home';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;