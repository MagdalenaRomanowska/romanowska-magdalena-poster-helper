import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Markers from '../Markers/Markers.js';
import { vec2, mat3 } from 'gl-matrix';
import styles from './Spirograph.module.scss';

export default function Spirograph(props) {
  const canvasRef = useRef();
  const [context, setContext] = useState(null);
  const matrix = mat3.create();

  const wallPhotoWidth = 200;
  const wallPhotoHeight = 160;
  const startGreenPositionX = 0;
  const startGreenPositionY = 0;
  const [pressedGreen, setPressedGreen] = useState(false);
  const [positionGreen, setPositionGreen] = useState({
    xGreen: startGreenPositionX,
    yGreen: startGreenPositionY,
  });

  useEffect(() => {
    setContext(canvasRef.current.getContext('2d'));
    updateCanvas();
  });

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.style.transform = `translate(${
        positionGreen.xGreen * wallPhotoWidth
      }px, ${positionGreen.yGreen * wallPhotoHeight}px)`;
    }
  }, [positionGreen]);

  useEffect(() => {
    setPositionGreen({
      xGreen: positionGreen.xGreen,
      yGreen: positionGreen.yGreen,
    });
  }, [wallPhotoWidth, wallPhotoHeight]);

  function updateCanvas() {
    if (context === null) {
      return;
    } else {
      context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      const img = document.getElementById('scream');
      context.drawImage(img,0,0);
    }
    props.parameters.forEach((parameter) => { 
      const sCP = calcSCP(parameter.xW1, parameter.yW1, parameter.r, parameter.w1Teeth, parameter.w2Teeth, parameter.penPosition);
      drawPoster(
        parameter.color,
        parameter.xW1,
        parameter.yW1,
        parameter.r,
        parameter.w1Teeth,
        parameter.w2Teeth,
        parameter.penPosition,
        parameter.showOuterWheel,
        parameter.showInnerWheel,
        parameter.showPen,
        sCP
      );
    });
  }

  function drawPoster(color, xW1, yW1, r, w1Teeth, w2Teeth, sCP) {
    context.beginPath();    
    const img = new Image();
    img.src = 'https://i.postimg.cc/cChyYPNt/fioletowe-jasniejsze.jpg';
    context.drawImage(img, xW1, yW1, w1Teeth, w2Teeth);
    context.stroke();
  }

  const onMouseMoveGreen = (event) => {
    if (pressedGreen) {
      setPositionGreen({
        xGreen: positionGreen.xGreen + event.movementX / wallPhotoWidth,
        yGreen: positionGreen.yGreen + event.movementY / wallPhotoHeight,
      });  
    }
  };

  function calcSCP(xW1, yW1, r, w1Teeth, w2Teeth, penPosition) {
    const O_w1c = vec2.fromValues(xW1, yW1);
    const w1TeethRounded = Math.floor(w1Teeth);
    const w2TeethRounded = Math.floor(w2Teeth);
    const p = penPosition;
    const w1r = r;
    const gearRatio = w2TeethRounded / w1TeethRounded;
    const w1c_w2c_length = 1 - gearRatio;
    const w2r = w1r - w1r * w1c_w2c_length;
    const w2c_p_length = p * gearRatio;
    const vecToScaleTheMatrixBy = vec2.fromValues(w1r, w1r);
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const precision = isMobile ? 10 : 100; // use lower precision for mobiles (assuming weaker CPU)
    const increase = (2 * Math.PI) / Math.max(w2TeethRounded, w1TeethRounded) / precision;

    const sCP = {
      O_w1c,
      w1Teeth: w1TeethRounded,
      w2Teeth: w2TeethRounded,
      w1r,
      gearRatio,
      w1c_w2c_length,
      w2r,
      w2c_p_length,
      vecToScaleTheMatrixBy,
      isMobile,
      precision,
      increase,
    };
    return sCP;
  }  

  return (
    <div className={styles.root}>      
      <img 
        className={styles.img}
        id={'scream'} 
        width={0} 
        height={0} 
        src={'https://www.bergerpaints.com/blog/wp-content/uploads/2019/05/maintaining_interior_paint.png'}>

      </img>
      <canvas
        ref={canvasRef}
        width={window.innerWidth / 2}
        height={Math.floor(window.innerHeight * 0.68)}
        onMouseMove={onMouseMoveGreen}
        onMouseDown={() => setPressedGreen(true)}
        onMouseUp={() => setPressedGreen(false)}
      >     
      </canvas>   
      <Markers />   
    </div>
  );
}

Spirograph.propTypes = {
  setXW1: PropTypes.func,
  setYW1: PropTypes.func,
  setR: PropTypes.func,
  setW1Teeth: PropTypes.func,
  setW2Teeth: PropTypes.func,
  setPenPosition: PropTypes.func,
  setShowOuterWheel: PropTypes.any,
  setShowInnerWheel: PropTypes.any,
  setShowPen: PropTypes.any,
  setColor: PropTypes.any,
  setGamma: PropTypes.any,
  parameters: PropTypes.any,
  xW1: PropTypes.any,
  yW1: PropTypes.any,
  gamma: PropTypes.any,
  w1Teeth: PropTypes.any,
  w2Teeth: PropTypes.any,
  penPosition: PropTypes.any,
  r: PropTypes.any,
  showOuterWheel: PropTypes.any,
  showInnerWheel: PropTypes.any,
  showPen: PropTypes.any,
  color: PropTypes.any,
  precision: 100,
};
