// libs
import React from 'react';
import {PropTypes} from 'prop-types';
// components
import ListItem from '../ListItem';
import TextLabel from '../TextLabel';

export default function List({items, emptyListMessage}) {
  return (
    <div>
      {!items.length && (
        <TextLabel center inactive>
          {emptyListMessage}
        </TextLabel>
      )}
      {items.map((itemData) => (
        <ListItem key={itemData} data={itemData} />
      ))}
    </div>
  );
}
List.propTypes = {
  items: PropTypes.array.isRequired,
  emptyListMessage: PropTypes.node.isRequired,
};
