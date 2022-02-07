import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { vec2, mat3 } from 'gl-matrix';
import { hex2rgb, rgb2hex } from '../../../utils/colors.js';
import styles from './Spirograph.module.scss';

export default function Spirograph(props) {
  const canvasRef = useRef();
  const [context, setContext] = useState(null);
  const matrix = mat3.create();

  useEffect(() => {
    setContext(canvasRef.current.getContext('2d'));
    updateCanvas();
  });

  function updateCanvas() {
    if (context === null) {
      return;
    } else {
      context.fillStyle = 'lightgrey';
      // context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      const img = document.getElementById('scream');
      context.drawImage(img, 10, 10);
    }
    props.parameters.forEach((parameter) => { 
      const sCP = calcSCP(parameter.xW1, parameter.yW1, parameter.r, parameter.w1Teeth, parameter.w2Teeth, parameter.penPosition);
      drawSpirograph(
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

  function drawSpirograph(color, xW1, yW1, r, w1Teeth, w2Teeth, penPosition, showOuterWheel, showInnerWheel, showPen, sCP) {
    let colorComponents = hex2rgb(color);
    context.strokeStyle = rgb2hex(
      Math.floor(colorComponents[0]),
      Math.floor(colorComponents[1]),
      Math.floor(colorComponents[2])
    );

    context.beginPath();
    for (let t = 0; t < 2 * Math.PI; t += sCP.increase) {
      const alpha = w2Teeth * t;
      const beta = (w1Teeth - w2Teeth) * t;
      const vec = calcPenPosition(alpha, beta, sCP);
      context.lineTo(vec[0] + xW1, vec[1] + yW1);
    }
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'rgba(0, 0, 0, 0)';
    if (showPen) {
      context.strokeStyle = 'rgba(0, 0, 0, 1)';
    }
    const initialP = calcPenPosition(0, 0, sCP);
    context.ellipse(
      initialP[0] + xW1,
      initialP[1] + yW1,
      2,
      2,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'rgba(0, 0, 0, 0)';
    if (showOuterWheel) {
      context.strokeStyle = 'rgba(0, 0, 0, 1)';
    }
    context.ellipse(
      sCP.O_w1c[0] + xW1,
      sCP.O_w1c[1] + yW1,
      r,
      r,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    context.stroke();

    context.beginPath();
    context.strokeStyle = 'rgba(0, 0, 0, 0)';
    if (showInnerWheel) {
      context.strokeStyle = 'rgba(120, 120, 120, 1)';
    }
    const initialW1cPosition = calcInnerCircleCenter(0, sCP);
    context.ellipse(
      initialW1cPosition[0] + xW1,
      initialW1cPosition[1] + yW1,
      sCP.w2r,
      sCP.w2r,
      Math.PI / 4,
      0,
      2 * Math.PI
    );
    context.stroke();
  }

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

  function calcPenPosition(alpha, beta, sCP) {
    const vector = vec2.fromValues(sCP.w2c_p_length, 0);
    mat3.identity(matrix);
    mat3.translate(matrix, matrix, sCP.O_w1c);
    mat3.scale(matrix, matrix, sCP.vecToScaleTheMatrixBy);
    mat3.rotate(matrix, matrix, alpha);
    mat3.translate(matrix, matrix, vec2.fromValues(sCP.w1c_w2c_length, 0));
    mat3.rotate(matrix, matrix, -(beta + alpha));
    vec2.transformMat3(vector, vector, matrix);
    return vector;
  }

  function calcInnerCircleCenter(alpha, sCP) {
    const vector = vec2.fromValues(0, 0);
    mat3.identity(matrix);
    mat3.translate(matrix, matrix, sCP.O_w1c);
    mat3.scale(matrix, matrix, sCP.vecToScaleTheMatrixBy);
    mat3.rotate(matrix, matrix, alpha);
    mat3.translate(matrix, matrix, vec2.fromValues(sCP.w1c_w2c_length, 0));
    vec2.transformMat3(vector, vector, matrix);
    return vector;
  }

  function onMouseMove(event) {
    console.log('mouse move');
    // if (pressed) {
    //   setPosition({
    //     xRed: positionRed.xRed + event.movementX / wallPhotoWidth,
    //     yRed: positionRed.yRed + event.movementY / wallPhotoHeight,
    //   });
    // }
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
        onMouseMove={onMouseMove}
      ></canvas>
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
