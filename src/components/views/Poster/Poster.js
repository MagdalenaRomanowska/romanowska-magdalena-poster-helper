import React from 'react';
import PropTypes from 'prop-types';
import styles from './Poster.module.scss';

export default function Poster(props) {
  const { pictureURL, posterParameters, setChosenPosterID, setStartPosterPositionX, 
    setStartPosterPositionY, setStartClickPositionX, setStartClickPositionY, posterWidth, posterHeight } = props;

  console.log('posterWidth ', posterWidth);
  
  const _onChangeChosenPosterID = (chosenPosterID, ClickX, ClickY) => {
    setChosenPosterID(chosenPosterID);
    setStartPosterPositionX(posterParameters.xPosterPosition);
    setStartPosterPositionY(posterParameters.yPosterPosition);
    setStartClickPositionX(ClickX);
    setStartClickPositionY(ClickY);
  };

  const handleClick = (event) => {
    _onChangeChosenPosterID(event.target.getAttribute('data-key'), event.clientX, event.clientY);
    // console.log('event.clientX ', event.clientX, '/ event.clientY ', event.clientY);
  };

  return (
    <div className={styles.root}
      style={{
        position: 'absolute',
        left: posterParameters.xPosterPosition,
        top: posterParameters.yPosterPosition,
        backgroundColor: 'red',
      }}      
    >
      <img
        src={pictureURL}
        width={posterWidth * 10}
        height={posterHeight * 10}
        alt='poster'
        data-key={posterParameters.id}
        onClick={handleClick}
      />
    </div>
  );
}

Poster.propTypes = {
  posterParameters: PropTypes.any,
  setXPosterPosition: PropTypes.func,
  setYPosterPosition: PropTypes.func,
  setChosenPosterID: PropTypes.func,
  setStartPosterPositionX: PropTypes.func,
  setStartPosterPositionY: PropTypes.func,
  setStartClickPositionX: PropTypes.func,
  setStartClickPositionY: PropTypes.func,
  pictureURL: PropTypes.any,  
  posterWidth: PropTypes.any,
  posterHeight: PropTypes.any,
};
