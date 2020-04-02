import React from 'react';

import Directory from '../../components/directory/directory.component';

import './_homepage.styles.scss';

//functional component, don't need to store state or lifecycle methods
const HomePage = () => (
  <div className='homepage'>
    <Directory />
  </div>
)

export default HomePage;
