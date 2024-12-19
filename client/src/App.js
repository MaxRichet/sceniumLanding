import React from 'react'
import EmailForm from './components/emailform';
import CalendlyWidget from './components/calendlywidget';
import './App.css'
import logo from './img/logo.png'
import insta from './img/insta.png'
import tiktok from './img/tiktok.png'
import linkedin from './img/linkedin.png'

function App(){
  return (
    <div>
      <img src={logo} alt='logo We Want Ya'></img>
      <h1>Coming Soon</h1>
      <p className='padding'>Soyez le premier à être informé de la mise en ligne de notre app.</p>
      <div className='size'>
        <EmailForm />
      </div>
      <div className='socials'>
        <a href='#'><img src={insta}></img></a>
        <a href='#'><img src={tiktok}></img></a>
        <a href='#'><img src={linkedin}></img></a>
      </div>
      <div className="App">
        <h1>Réservez un rendez-vous</h1>
        <CalendlyWidget />
      </div>
    </div>
  )
}

export default App