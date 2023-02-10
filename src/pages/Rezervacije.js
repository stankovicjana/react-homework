import React from 'react';
import Rezervacija from '../Rezervacija';
import '../components/Rezervisana.css';
import { Button } from '../components/Button.js';

function Rezervacije({data, obrisiRezervaciju}) {

    const headingStyle = {
        'color': '#fff',
        'margin-top': '-50px'
    }

    return (
        <div>
        {data.length == 0 ? 
            <>
                <div className='cards1'>
                    <h1 style={headingStyle}>Nemate rezervacija</h1>
                    <p className='app-text'>Pogledajte ponudu sada!</p>
                    <div className='main-btns'>
                        <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        link='/putovanja'
                        >
                        Pogledaj sve ponude
                        </Button>
                    </div>
                </div>
            </> : 
            <>
            <div className='cards2'>
                <h1>Vaše rezevacije</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items1'>
                            {
                                data.map(item => (<Rezervacija obj={item} obrisiRezervaciju={obrisiRezervaciju} />))
                            }
                        </ul>
                    </div>  
                </div>  
            </div>
            </>
        }
      </div>
    )
}

export default Rezervacije;
