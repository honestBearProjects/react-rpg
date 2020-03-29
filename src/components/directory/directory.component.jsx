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
        id: 1,
        linkUrl: 'character'
      },
      {
        title: 'Mission Board',
        imageUrl: '',
        id: 2,
        linkUrl: 'missions'
      },
      {
        title: 'Inventory',
        imageUrl: '',
        id: 3,
        linkUrl: 'inventory'
      }]
    }
  }

  render(){
    return(
      <div className='directory-menu'>
        {
        this.state.sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
      </div>
    )
  }
}

export default Directory;
