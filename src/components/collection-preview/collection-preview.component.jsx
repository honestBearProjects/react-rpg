import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './_collection-preview.styles.scss';

const CollectionPreview = ({title, items}) => (

  <div className='collection-preview'>
    <h1 className='title'>{title}</h1>
    <div className='preview'>
    {
      //iterating through the items to pass to the collection item component
      items
      .filter((items, idx) => idx < 4)
      .map(({id, ...otherItemProps}) => (
        <CollectionItem key={id} {...otherItemProps} />
      ))
    }
    </div>
  </div>

);

export default CollectionPreview;
