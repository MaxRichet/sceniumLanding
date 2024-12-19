import React from 'react'
import BoxCard from './BoxCard';
import card1 from '../img/card1.png'
import card2 from '../img/card2.png'
import card3 from '../img/card3.png'

function BoxCardContainer(){
    const array = [
        { img: card1, alt: "Exemple de notre box dans le thème fleuri", title: "Flower" },
        { img: card2, alt: "Exemple de notre box dans le thème nuage", title: "Cloud" },
        { img: card3, alt: "Exemple de notre box dans le thème disco", title: "Disco" },
    ];
    
    return (
        <div className="boxCardContainer">
            <h1>Les plus populaires</h1>
            <div className='cardContainer'>
                {array.map((item, index) => (
                    <BoxCard 
                        key={index} 
                        img={item.img} 
                        alt={item.alt} 
                        title={item.title} 
                    />
                ))}
            </div>
        </div>
    );
};

export default BoxCardContainer