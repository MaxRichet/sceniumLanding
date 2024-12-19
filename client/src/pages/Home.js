import React from 'react'
import '../styles/App.css'
import Intro from '../components/Intro'
import BoxCardContainer from '../components/BoxCardContainer'
import HowItWork from '../components/HowItWork'
import Advantages from '../components/AdvantagesContainer'

function Home(){
  return (
    <div>
      <Intro/>
      <p className='presentation'>Nous proposons des photo boxes mobiles en format box pour tous types d'événements : mariages, anniversaires, soirées d'entreprise et bien plus. Faciles à installer, stylés et personnalisables, nos photobooths garantissent des souvenirs mémorables et des photos de qualité.</p>
      <BoxCardContainer/>
      <HowItWork/>
      <Advantages/>
    </div>
  )
}

export default Home