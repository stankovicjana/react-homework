import React from 'react';
import '../App.css';
import { Button } from './Button';
import Cards from './Cards';
import './MainSection.css';
import Image1 from '../assets/musko.jpg';
import Image2 from '../assets/prva.jpg';
import Image3 from '../assets/cet.jpg';

function MainSection() {

  const clients = [
    {
        name: 'Marko Petrović',
        text: 'Poštovani, Veliko je zadovoljstvo putovati u organizaciji Vaše turističke agencije. Suprugino i moje putovanje u Prag 19.6.2019. bilo je po svim standardima zadovoljavajuće. Ono što posebno želim da pohvalim jesu fakultativni izleti. No, obraćam vam se ovim putem, kako bih vam skrenuo pažnju na poseban kvalitet putovanja kome je doprineo gospodin Nikoli Ćurćuz. ',
        src: Image1
    },
    {
        name: 'Jana Milošević',
        text: 'Sve pohvale za Stanković Travel! Drugi put vec putujem sa vama, a vec su i naredna dva aranzmana uplacena za Veneciju i Sivotu. Sve preporuke, a i pohvale za vodica Bojana i vozace Zorana i Srdjana! Ivana',
        src: Image2
    },
    {
        name: 'Marija Perić',
        text: 'ISTANBUL beše jedan u nizu mojih putovanja... Želim da Vam se zahvalim na organizaciji koja je bila odlična kao i svaki raniji put. Posebne POHVALE zelim da uputim vodiču Pedji i njegovom kolegi koji je bio zaduzen za drugi hotel. Momci su izuzetno fini, ljubazni, strpljivi i predusretljivi. Bilo je lako snaći se u ogromnom Istanbulu uz njihovu pomoć. ',
        src: Image3
    }
];  

  return (
    <>
    <div className='main-container'>
      <image src='../assets/img-home.jpg'/>
      <h3>Dobrodošli u agenciju Stanković!</h3>
      <p>Izaberite nezaboravno putovanje već danas!</p>
      <div className='main-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='/putovanja'
        >
          Zakažite putovanje
        </Button>
      </div>
    </div>
    <div className='main-text'>
    <h1>O nama</h1>
    <h3> Da se kvalitet u turizmu ceni potvrdjuju i mnogobrojne prestizne nagrade agencije Stankovic iz oblasti turizma, neke od njih su:
    </h3>
      <p>
      •  Šampioni turizma za đačke ekskurzije
     </p>
      <p>
      • Zlatna amfora za inovacije i nov pristup turističkom tržištu Španije - Na potpuno nov način smo predstavili Španiju našem tržištu što je pored nagrade doprinelo velikom odzivu od strane javnosti      </p>
      <p>
      • Šampioni turizma za organizaciju turističkih aranžmana za Češku
    </p>
    </div>
    <div className='main-clients'>
      <Cards title='Šta naši putnici kažu?' data1={clients} type='clients'></Cards>
    </div>
    </>
    
  );
}

export default MainSection;
