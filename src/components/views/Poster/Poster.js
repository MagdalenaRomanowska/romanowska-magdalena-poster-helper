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
      props.parameters.forEach((parameter) => { 
        drawPoster(
          parameter.xW1,
          parameter.yW1,
          parameter.w1Teeth,
          parameter.w2Teeth
        );
      });
    }
    
  }

  function drawPoster(xW1, yW1, w1Teeth, w2Teeth) {
    context.beginPath();    
    const img = new Image();
    img.src = 'https://i.postimg.cc/cChyYPNt/fioletowe-jasniejsze.jpg';
    context.drawImage(img, xW1, yW1, w1Teeth, w2Teeth);
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

  return (
    <div className={styles.root}>  
      <canvas
        ref={canvasRef}
        width={window.innerWidth / 2}
        height={Math.floor(window.innerHeight * 0.68)}
        onMouseMove={onMouseMove}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >     
      </canvas>    
    </div>
  );
}

Poster.propTypes = {
  parameters: PropTypes.any,
  xW1: PropTypes.any,
  yW1: PropTypes.any,
  w1Teeth: PropTypes.any,
  w2Teeth: PropTypes.any,
};
