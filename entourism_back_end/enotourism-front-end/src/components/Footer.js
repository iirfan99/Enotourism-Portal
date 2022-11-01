import React from 'react';
import {Button} from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our Enotourism  Portal  Connecting wine lovers with the best wineries around the world
          We provide  diferent   countries of wine experiences. 
        </p>
        <p className='footer-subscription-text'>
          You can Sign Up and book wines  at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>For Wineries</Link>
            <Link to='/'>My Wine Route and Trail</Link>
          </div>
          <div class='footer-link-items'>
            <h2>For Wineries</h2>
            <Link to='/Login'>Sign up My Winery</Link>
            <Link to='/'>Wine Maps</Link>
            <Link to='/'>Wines</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      </div>

    );
}
export default Footer;