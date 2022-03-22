import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ButtonAddPoster.module.scss';

export default function ButtonAddPoster(props) {
  const idUUID = uuidv4();
  return (
    <div className={styles.root}>
      <button
        className={styles.buttonAddPoster}
        onClick={(event) =>
          props.addPoster({
            id: idUUID,
            posterName: idUUID.slice(0,5),
            xPosterPosition: 220,
            yPosterPosition: 220,            
            pictureName: 'Saturn',
            posterDimensionsName: '18x12',
          })
        }
      >
        Add Poster
      </button>      
    </div>
  );
}

ButtonAddPoster.propTypes = {
  addPoster: PropTypes.func,  
};
