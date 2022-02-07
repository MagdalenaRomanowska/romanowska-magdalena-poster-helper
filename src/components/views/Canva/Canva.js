import React from 'react';
import PropTypes from 'prop-types';
// import Parameters from '../Parameters/ParametersContainer';
import Spirograph from '../Spirograph/SpirographContainer.js';
import ButtonAddSpirograph from '../../features/ButtonAddSpirograph/ButtonAddSpirographContainer.js';
import ListOfSpirographs from '../../features/ListOfSpirographs/ListOfSpirographsContainer.js';
import styles from './Canva.module.scss';

const Canva = (props) => (
  <div className={styles.canva}>
    <div className={styles.listAndSpirograph}>
      <div className={styles.list}>
        <ButtonAddSpirograph />
        <ListOfSpirographs />
      </div>
      <div>
        <Spirograph
          xW1={props.parameters[0].xW1}
          yW1={props.parameters[0].yW1}
          r={props.parameters[0].r}
          w1Teeth={props.parameters[0].w1Teeth}
          w2Teeth={props.parameters[0].w2Teeth}
          penPosition={props.parameters[0].penPosition}
          showOuterWheel={props.parameters[0].showOuterWheel}
          showInnerWheel={props.parameters[0].showInnerWheel}
          showPen={props.parameters[0].showPen}
          color={props.parameters[0].color}
          gamma={props.parameters[0].gamma}
        />
      </div>
    </div>
    {/* <Parameters className={styles.parameters} /> */}
  </div>
);

Canva.propTypes = {
  className: PropTypes.string,
  parameters: PropTypes.any,
};

export default Canva;
