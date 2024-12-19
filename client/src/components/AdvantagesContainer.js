import React from 'react'
import Advantages from './Advantages';
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'

function BoxCardContainer(){
    const array = [
        { icon: icon1, alt: "Exemple de notre box dans le thème fleuri", title: "Qualité garantie", p: "Des photobooths conçus avec des composant de haute qualité, garantissant une solidité optimale." },
        { icon: icon2, alt: "Exemple de notre box dans le thème nuage", title: "Livraison rapide", p: "Livraison et nstallation efficace sur le lieu de votre événement." },
        { icon: icon3, alt: "Exemple de notre box dans le thème disco", title: "Sevice des designs uniques", p: "Des photo boxes adaptés à votre thème." },
        { icon: icon4, alt: "Exemple de notre box dans le thème disco", title: "Accompagnement personnalisé", p: "Nous vous guidons à chaque étape." },
    ];
    
    return (
        <div className="advantagesContainer">
            <h1>Pourquoi vous allez adorer nos photo boxs</h1>
            <div className='detailsAdvantage'>
                {array.map((item, index) => (
                    <Advantages 
                        key={index} 
                        icon={item.icon} 
                        alt={item.alt} 
                        title={item.title}
                        p={item.p}
                    />
                ))}
            </div>
        </div>
    );
};

export default BoxCardContainer