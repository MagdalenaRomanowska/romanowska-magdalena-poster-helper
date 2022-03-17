import React from 'react';
import PropTypes from 'prop-types';
import styles from './GlobalFeatures.module.scss';

class GlobalFeatures extends React.Component {
  _onChangeScale(scale) {
    this.props.setGlobalScale(scale);
  }

  render() {
    const { globalScale } = this.props;

    return (
      <div className={styles.scale}>
        Scale:
        <input
          type='number'
          min='0'
          max='10'
          step='1'
          value={globalScale}
          onChange={(e) => this._onChangeScale(e.target.value)}
        />
      </div>
    );
  }
}

GlobalFeatures.propTypes = {
  globalScale: PropTypes.any,
  setGlobalScale: PropTypes.func,
};

export default GlobalFeatures;
