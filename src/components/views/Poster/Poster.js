import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Poster.module.scss';

export default function Poster(props) {
  const { posterParameters, setXPosterPosition, setYPosterPosition, setChosenPosterID, setStartPosterPositionX, setStartPosterPositionY, setStartClickPositionX, setStartClickPositionY } = props;
  const [pressed, setPressed] = useState(false);

  const onMouseMove = (event) => {
    if (pressed) {
      setXPosterPosition(posterParameters.id, posterParameters.xPosterPosition + event.movementX);
      setYPosterPosition(posterParameters.id, posterParameters.yPosterPosition + event.movementY);
    }
  };

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
        src='https://i.postimg.cc/cChyYPNt/fioletowe-jasniejsze.jpg'
        width='100'
        height='100'
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
};
