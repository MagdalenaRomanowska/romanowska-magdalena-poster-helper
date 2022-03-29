import React from 'react';
import PropTypes from 'prop-types';
import styles from './Poster.module.scss';

export default function Poster(props) {
  const {
    pictureURL,
    posterParameters,
    setChosenPosterID,
    setStartPosterPositionX,
    setStartPosterPositionY,
    setStartClickPositionX,
    setStartClickPositionY,
    posterWidth,
    posterHeight,
    globalScale,
    removePoster,
  } = props;

  const _onChangeChosenPosterID = (chosenPosterID, ClickX, ClickY) => {
    setChosenPosterID(chosenPosterID);
    setStartPosterPositionX(posterParameters.xPosterPosition);
    setStartPosterPositionY(posterParameters.yPosterPosition);
    setStartClickPositionX(ClickX);
    setStartClickPositionY(ClickY);
  };

  const handleClick = (event) => {
    _onChangeChosenPosterID(
      event.target.getAttribute('data-key'),
      event.clientX,
      event.clientY
    );
  };

  const _onChangeRemovePoster = (chosenPosterID) => {
    removePoster(chosenPosterID);
  };

  const handleClickRemovePoster = (event) => {
    _onChangeRemovePoster(event.target.getAttribute('data-key'));
  };

  return (
    <div
      className={styles.root}
      style={{
        position: 'absolute',
        left: posterParameters.xPosterPosition,
        top: posterParameters.yPosterPosition,
        transform: 'rotate(' + posterParameters.angle + 'deg)',
      }}
    >
      <img
        className={styles.image}
        src={pictureURL}
        width={posterWidth * globalScale}
        height={posterHeight * globalScale}
        alt='poster'
        data-key={posterParameters.id}
        onClick={handleClick}
      />
      <div
        className={styles.deleteImage}
        data-key={posterParameters.id}
        onClick={handleClickRemovePoster}
      >
        X
      </div>
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
  globalScale: PropTypes.any,
  removePoster: PropTypes.func,
};
