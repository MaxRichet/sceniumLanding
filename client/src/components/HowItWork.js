import React from 'react'

function HowItWork({ img, alt, title }){
  return (
    <div className='howItWork'>
        <h1>Comment ça marche?</h1>
        <p><span>1</span>Choisissez votre design : Sélectionnez le modèle de photo box</p>
        <p><span>2</span>Installation sur place : Nous livrons et installons le photo box</p>
        <p><span>3</span>Amusez-vous : Capturez des moments inoubliables !</p>
    </div>
  )
}

export default HowItWork