import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './_directory.styles.scss';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [{
        title: 'Character',
        imageUrl: '',
        id: 1
      },
      {
        title: 'Mission Board',
        imageUrl: '',
        id: 2
      },
      {
        title: 'Inventory',
        imageUrl: '',
        id: 3
      }]
    }
  }

  render(){
    return(
      <div className='directory-menu'>
        {
        this.state.sections.map(({title, imageUrl, id}) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))
      }
      </div>
    )
  }
}

export default Directory;
