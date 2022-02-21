import React from 'react';
import PropTypes from 'prop-types';
import ButtonAddPoster from '../../features/ButtonAddPoster/ButtonAddPosterContainer.js';
import ListOfPosters from '../../features/ListOfPosters/ListOfPostersContainer.js';
import styles from './Canva.module.scss';

const Canva = (props) => (
  <div className={styles.canva}>
    <div className={styles.listAndPoster}>
      <div className={styles.list}>
        <ButtonAddPoster />
        <ListOfPosters />
      </div>
    </div>
  </div>
);

Canva.propTypes = {
  className: PropTypes.string,
  parameters: PropTypes.any,
};

export default Canva;
