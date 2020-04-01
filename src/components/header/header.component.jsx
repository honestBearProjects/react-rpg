import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './_header.styles.scss';

const Header = () => (

  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        About
      </Link>
      <Link className='option' to='/inventory'>
        Character
      </Link>
    </div>

  </div>

)

export default Header;
