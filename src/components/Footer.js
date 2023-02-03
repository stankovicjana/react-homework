
import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SweetAlert2 from 'sweetalert2';

function Footer() {

  const [buttonClick, setButtonClick] = useState('');

  const onClick = () => {
    if(buttonClick != '') {
      setButtonClick('');
      setTimeout(() => {
        SweetAlert2.fire({
            title: 'Odlično!',
            text: 'Hvala na pretplati!',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: 'indianred',
            
          });
       
      }, 10);
    }
  }

  const onChange = (e) => {
    setButtonClick(e.target.value);
  }
  

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Možete se pretplatiti kad god poželite!
        </p>
        <p className='footer-subscription-text'>
        © 2023 Stankovic Travel. Sve informacije na sajtu su informativnog karaktera. U cilju potpune pouzdanosti molimo vas da informacije proverite direktno u agenciji.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Vaš e-mail'
              value={buttonClick}
              onChange={onChange}
            />
            <Button buttonStyle='btn--outline' onClick={onClick} link={'#'} >Pretplata</Button>
          </form>
        </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Turistička agencija
              <i class="fas fa-spa"></i>
            </Link>
          </div>
          <small class='website-rights'>Stanković © 2023</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              href='https://www.youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;


