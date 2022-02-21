import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Poster.module.scss';

export default function Poster(props) {
  const canvasRef = useRef();
  const [context, setContext] = useState(null);
  const wallPhotoWidth = 400;
  const wallPhotoHeight = 160;
  const startPositionX = 0;
  const startPositionY = 0;
  // const { parameters, chosenPosterID } = props;
  // const parameter = parameters.filter((e) => e.id === chosenPosterID)[0];
  const [pressed, setPressed] = useState(false);
  const [position, setPosition] = useState({
    x: startPositionX,
    y: startPositionY,
  });

  useEffect(() => {
    setContext(canvasRef.current.getContext('2d'));
    updateCanvas();
  });

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.transform = `translate(${
        position.x * wallPhotoWidth
      }px, ${position.y * wallPhotoHeight}px)`;
    }
  }, [position]);

  useEffect(() => {
    setPosition({
      x: position.x,
      y: position.y,
    });
  }, [wallPhotoWidth, wallPhotoHeight]);

  function updateCanvas() {
    if (context === null) {
      return;
    } else {
      parameters.forEach((parameter) => {
        drawPoster(
          parameter.xPosition,
          parameter.yPosition,
          parameter.posterWidth,
          parameter.posterHeight
        );
      });
    }

  }

  function drawPoster(xPosition, yPosition, posterWidth, posterHeight) {
    context.beginPath();
    const img = new Image();
    img.src = 'https://i.postimg.cc/bY9GYRBK/fioletowe-jasniejsze-blue2.jpg';
    context.drawImage(img, xPosition, yPosition, posterWidth, posterHeight);
    context.stroke();
  }

  const onMouseMove = (event) => {
    if (pressed) {
      setPosition({
        x: position.x + event.movementX / wallPhotoWidth,
        y: position.y + event.movementY / wallPhotoHeight,
      });
    }
  };

  const { parameters, posterParameters } = props;

  return (
    <div className={styles.root}>      
      <canvas
        style={{
          left: posterParameters.yPosition,
          top: posterParameters.xPosition,
        }}
        ref={canvasRef}
        key={posterParameters.id}
        src={'https://i.postimg.cc/cChyYPNt/fioletowe-jasniejsze.jpg'}
        width={posterParameters.posterWidth} //{window.innerWidth / 2}
        height={posterParameters.posterHeight} //{Math.floor(window.innerHeight * 0.68)}
        onMouseMove={onMouseMove}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      ></canvas>      
    </div>
  );
}

Poster.propTypes = {
  parameters: PropTypes.any,
  xPosition: PropTypes.any,
  yPosition: PropTypes.any,
  posterWidth: PropTypes.any,
  posterHeight: PropTypes.any,
  chosenPosterID: PropTypes.any,
  id: PropTypes.any,
  posterParameters: PropTypes.any,
};
