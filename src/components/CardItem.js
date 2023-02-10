import React from 'react';
import { Button } from './Button';

function CardItem({name, src, type, text, checked, zakaziPutovanje, id}) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={type=='clients' ? '“' : name}>
            <img
              className='cards__item__img'
              src={src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{text}</p>
            {type == 'clients' ? <h5 className='cards__item__title'>{name}</h5> : <></> }
            {type == 'clients' ? <></> : 
              <div className='star-container'>
                <ul>
                  <li>
                    <Button 
                      className='btns' 
                      buttonStyle='btn--primary' 
                      buttonSize='btn--medium' 
                      link={'/rezervacije'} 
                      id = {id}
                      onClick={zakaziPutovanje}
                    >
                      Rezerviši putovanje
                    </Button>
                  </li>
                </ul>
                
                
              </div>

             }
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
