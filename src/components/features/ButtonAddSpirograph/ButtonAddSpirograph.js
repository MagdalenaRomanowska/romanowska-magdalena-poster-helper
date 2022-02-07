import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ButtonAddSpirograph.module.scss';

export default function ButtonAddSpirograph(props) {
  const idUUID = uuidv4();
  return (
    <div className={styles.root}>
      <button
        className={styles.buttonAddSpirograph}
        onClick={(event) =>
          props.addSpirograph({
            id: idUUID,
            spirographName: idUUID,
            xW1: 220,
            yW1: 220,
            r: 120,
            w1Teeth: 104,
            w2Teeth: 60,
            penPosition: 0.5,
            showOuterWheel: 'true',
            showInnerWheel: 'true',
            showPen: 'true',
            color: '#000000',
            gamma: 0,
          })
        }
      >
        Add Spirograph
      </button>
    </div>
  );
}

ButtonAddSpirograph.propTypes = {
  addSpirograph: PropTypes.func,
};
