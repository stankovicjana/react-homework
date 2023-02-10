import React from 'react'
import Cards from '../components/Cards'
import InputControl from '../components/InputControl';
import { Form } from 'react-bootstrap';
 
function Putovanja({putovanja1, putovanja2}) {
    return (
        <div>
            <Cards 
                data1={putovanja1} 
                data2 = {putovanja2} 
                title='PUTOVANJA' 
                type='putovanja' 
               
               />
        <div className='destinacije'>
        <h1>Destinacije</h1>
          <div className="main">
           <h3>Izbor destinacije</h3>
            <div className="search-form">
             <Form>
              <InputControl
                name="country"
                label="Unesite zemlju"
                placeholder="Unesite zemlju u koju biste želeli da putujete"
              />
             </Form>
             
            </div>
            <p>Unesite svoju email adresu i mi ćemo vam poslati sve aktuelne destinacije za odabranu državu!</p>
          </div>
      </div>
        </div>
    
    )
}

export default Putovanja
