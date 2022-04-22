import React from 'react';
import PropTypes from 'prop-types';
import styles from './Poster.module.scss';

export default function Poster(props) {
  const {
    chosenPosterId,
    pictureURL,
    posterParameters,
    setChosenPosterID,
    setStartPosterPositionX,
    setStartPosterPositionY,
    setStartClickPositionX,
    setStartClickPositionY,
    posterWidth,
    posterHeight,
    globalScaleByProjectName,
    removePoster,
    selectedProjectName,
  } = props;

  const _onChangeChosenPosterID = (chosenPosterID, ClickX, ClickY) => {
    setChosenPosterID(chosenPosterID);
    setStartPosterPositionX(posterParameters.xPosterPosition);
    setStartPosterPositionY(posterParameters.yPosterPosition);
    setStartClickPositionX(ClickX);
    setStartClickPositionY(ClickY);
  };

  const openGallery = () => {
    document.getElementById('gallery').style.display = 'block';
    document.getElementById('closeGallery').style.display = 'block';
  };

  const handleClickPoster = (event) => {
    switch (event.detail) {
      case 1: // 1 click
        _onChangeChosenPosterID(
          event.target.getAttribute('data-key'),
          event.clientX,
          event.clientY
        );     
        break;        
      case 2: // double click
        openGallery();
        break;
      default:
        return;
    }
  };

  const _onChangeRemovePoster = (chosenPosterID) => {
    removePoster(chosenPosterID);
  };

  const handleClickRemovePoster = (event) => {
    _onChangeRemovePoster(event.target.getAttribute('data-key'));
  };

  let scale = globalScaleByProjectName;

  const onChangeScale = (event) => {
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(1, scale), 20);
    props.setGlobalScaleByProjectName(scale, selectedProjectName);
  };

  return (
    <div
      className={styles.root}
      id={'poster'}
      style={{
        position: 'absolute',
        left: posterParameters.xPosterPosition,
        top: posterParameters.yPosterPosition,
        transform: 'rotate(' + posterParameters.angle + 'deg)',
      }}
    >
      <img
        className={
          chosenPosterId === posterParameters.id
            ? styles.imageChosen
            : styles.image
        }
        src={pictureURL}
        width={posterWidth * globalScaleByProjectName}
        height={posterHeight * globalScaleByProjectName}
        alt='poster'
        data-key={posterParameters.id}
        onClick={(e) =>
          handleClickPoster(e, posterParameters.id, posterParameters.pictureName)
        }
        onWheel={(e) => onChangeScale(e)}
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
  chosenPosterId: PropTypes.any,
  posterParameters: PropTypes.any,
  setChosenPosterID: PropTypes.func,
  setStartPosterPositionX: PropTypes.func,
  setStartPosterPositionY: PropTypes.func,
  setStartClickPositionX: PropTypes.func,
  setStartClickPositionY: PropTypes.func,
  pictureURL: PropTypes.any,
  posterWidth: PropTypes.any,
  posterHeight: PropTypes.any,
  globalScaleByProjectName: PropTypes.any,
  removePoster: PropTypes.func,
  selectedProjectName: PropTypes.any,
  setGlobalScaleByProjectName: PropTypes.func,
  setPictureName: PropTypes.func,
};
