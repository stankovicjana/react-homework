import React from 'react';
import Mailer from "../components/mailer";
import '../style.css';

function Destinacije() {
  return (
    <div className='destinacije'>
      <Mailer>

      </Mailer>
      <div className="informacije">
           <h3>Stanković d.o.o.</h3> 
           <h6>Adresa: Omladinskih brigada 90, 11073 Beograd, Srbija
                Telefon: 063/9000</h6>
                <h3>Korisnički servis</h3>
            <p>Sva pitanja u vezi sa servisima i uslugama, mrežom, tarifnim paketima, najnovijom i standardnom ponudom mozete pronaci na stranici Podrška ili pozivom Kontakt centra na broj 063/9000.
            </p>
            </div>
    </div>
  );
}

export default Destinacije;