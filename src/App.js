import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinacije from './pages/Destinacije';
import Footer from './components/Footer';
import Putovanja from './pages/Putovanja';
import React from 'react';
import { useState } from 'react';
import Rezervacije from './pages/Rezervacije';

function App() {

  const [appNum, setAppNum] = useState(0);

  const p1=[
    {
    id:1,
    times:0,
    checked: false,
    added: false,
    name:'Pariz',
    text:'Pariz - „Grad svetlosti", glavni i najveći grad Francuske, smešten na obalama reke Sene. Kao globalni centar mode, umetnosti, gastronomije i kulture zasluženo privlači ogroman broj turista svake godine. Široki bulevari,veličanstveni trgovi, mnogobrojni kulturno istorijski spomenici i živopisni kvartovi su pod zaštitom UNESCO-a. Notr Dam, najposećeniji muzej na svetu Luvr, Ajfelov toranj, kvart Opere, Jeliseljska polja, Trijumfalna kapija, dvorac Versaj... samo su neki od svedoka bogate istorije ovog grada koji se moraju doživeti barem jednom u životu!',
    src:'https://fantast.rs/media/k2/items/cache/9267284e7733f4bec00d2e114d3f3ba1_L.jpg'
    },
    {
    id:2,
    times:0,
    checked: false,
    added: false,
    name:'Rim',
    text:'Rim - glavni grad Italije i regije Lacio. Grad fascinatne lepote, pokrivene patinom prošlih vekova. Smešten na reci Tibar, Rim je nastao pre 28 vekova i sa punim pravom nosi epitet Večnog grada. Po legendi, Rim je osnovao, 753. godine pre nove ere, Romul nakon što je ubio svoga brata Rema. Dvojicu braće othranila je vučica, koja je i danas simbol grada.  Nekada je bio administrativni centar moćne Rimske Imperije. Jedan od najpoznatijih simbola Rima je Koloseum, najveći amfiteatar ikada sagrađen u Rimskom Carstvu.  Rim je poznat i po veličantvenim trgovima-Piazza Navona, Piazza di Spagna, Campo de Fiori, Piazza Venezia, Piazza Farnese i Piazza della Minerva. ',
    src:'http://www.travelland.rs/content_pictures/resized/hit--rim-avionom-3-i-4-nocenja-2019-447.jpg'
    },
    {
    id:3,
    times:0,
    checked: false,
    added: false,
    name:'Barselona',
    text:'BARSELONA je grad najrazvijenije španske provincije Katalonije i u svemu ocrtava kulturno i istorijsko bogatsvo ove regije. Širom sveta je poznata po svojoj jedinstvenoj arhitekturi čiji tvorac je bio jedan od najvećih savremenih arhitekata Antonio Gaudi. Barselona je moderan grad sa širokim bulevarima, prostranim trgovima, šoping centrima, zapanjujućim spomenicima, prelepom plažom, ogromnom lukom i veoma živopisnim kvartovima. Pored toga, ovo je grad zabave, grad mladih, grad najvećeg fudbalskog kluba na svetu. Ovaj grad svojim posetiocima nudi mnogo aktivnosti i pregršt dešavanja...',
    src:'http://www.travelland.rs/content_pictures/resized/barselona-jesen-2022-174.jpg'
    },

  ];
  const p2=[
    {
      id:4,
      times:0,
      checked: false,
      added: false,
      name:'Milano',
      text:'МILANO је drugi po veličini grad u Italiji i glavni grad regije Lombardija u severnoj Italiji. Milano se smatra „privrednim srcem Italije“. Grad je takođe i svetski poznat privredni, modni i medijski centar. Milano je čuven po svojoj gotskoj katedrali, operi „Milanska skala“ i velikom аrhitektonskom i umetničkom nasleđu. U svetu, Milano je najpoznatiji kao jedno od središta mode - uz Pariz i Njujork.',
      src:'http://www.travelland.rs/content_pictures/resized/hit--milano-sezona-2018-19-2-noci-627.jpg'
      },
      {
        id:5,
        times:0,
        checked: false,
        added: false,
        name:'Egipat',
        text:'Egipat je kolevka je jedne od najstarijih civilizacija sa istorijom dugom preko 5 milenijuma. Čuvene piramide u Gizi koje spadaju u sedam svetskih čuda, brojni hramovi na obalama Nila, moderna letovališta, duge peščane plaže, izuzetno povoljna klima, kristalno čisto i toplo more sa fantastičnom florom i faunom, uticali su da se Egipat razvije u najposećeniju turističku destinaciju Afrike, a najpopularnija letovališta su Hurgada i Šarm El Šeik.',
        src:'http://www.travelland.rs/content_pictures/resized/hurgada-last-minute-decembar-2021-air-cairo-23.jpg'
        },
        {
          id:6,
          times:0,
          checked: false,
          added: false,
          name:'Prag',
          text:'Prag - evropska metropola kulture. Glavni grad Češke, „zlatni grad" ili „grad stotinu tornjeva" predstavlja magični grad mostova, katedrala, zlatnih tornjeva i crkvenih kupola, leži na reci Vltavi. Poseduje najočuvanije srednjevekovno gradsko jezgro u Evropi, kao i sve atribute jednog od najmodernijih evropskih gradova.',
          src:'http://www.travelland.rs/content_pictures/resized/prag-sezona-2018--6-dana--hit-putovanje--849.jpg'
          },
  ];

  const [appts, setAppts] = useState([]);
  const [putovanja1, setSer1] = useState(p1);

  const [putovanja2, setSer2] = useState(p2);
  const zakazi = (serviceId) => {
    //console.log(serviceId);
    putovanja1.forEach(element => {
      if(element.id === serviceId) {
        if(element.added === false) {
          setAppNum(appNum+1);
          element.added = true;
        }
      }
    });
    putovanja2.forEach(element => {
      if(element.id === serviceId) {
        if(element.added === false) {
          setAppNum(appNum+1);
          element.added = true;
        }
      }
    });
    let addedServices1 = putovanja1.filter((item) => item.added == true);
    let addedServices2 = putovanja2.filter((item) => item.added == true);
    let addedServices = [...addedServices1, ...addedServices2];
    //console.log(addedServices);
    setAppts(addedServices);
  }
  
const obrisanaRez = (serviceId) => {
  //.log(serviceId);

  appts.forEach(element => {
    if(element.id == serviceId) {
      if(element.added === true) {
        setAppNum(appNum-1);
        element.added = false;
      }
    }
  });

  let newApp = appts.filter((item) => item.added == true);
  setAppts(newApp);
}
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='destinacije' element={<Destinacije/>} />   
      <Route path='putovanja' element={<Putovanja putovanja1={putovanja1} putovanja2={putovanja2}
      zakaziPutovanje={zakazi}/>}/>
      <Route path='rezervacije' element={<Rezervacije data={appts} obrisiRezervaciju={obrisanaRez} />}/>
    </Routes>
  <Footer></Footer>
  </Router>
  );

}
export default App;
