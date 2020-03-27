import React from 'react';

import './homepage.styles.scss';
//functional component, don't need to store state or lifecycle methods
const HomePage = () => (
  <div classname='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Character Info</h1>
          </div>
      </div>
      <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Tavern</h1>
          </div>
      </div>
      <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>Mission</h1>
          </div>
      </div>
    </div>
  </div>
)

export default HomePage;
