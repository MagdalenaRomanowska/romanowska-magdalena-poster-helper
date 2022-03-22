import React from 'react';
import PropTypes from 'prop-types';
import styles from './GlobalFeatures.module.scss';

class GlobalFeatures extends React.Component {
  _onChangeScale(scale) {
    this.props.setGlobalScale(scale);
  }

  _onChangeBackgroundWall(backgroundWallName) {
    this.props.setSelectedBackgroundWallName(backgroundWallName);
  }  

  render() {
    const { globalScale, selectedBackgroundWallName, backgroundWalls } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.scale}>
          Scale:
          <input
            type='number'
            min='0'
            max='20'
            step='1'
            value={globalScale}
            onChange={(e) => this._onChangeScale(e.target.value)}
          />
        </div>
        <div className={styles.parameterLabel}>
          BackgroundWall:{' '}
          <select
            onChange={(e) => this._onChangeBackgroundWall(e.target.value)}
            value={selectedBackgroundWallName}
          >
            {backgroundWalls.map((backgroundWall) => (
              <option
                key={backgroundWall.backgroundWallName}
                value={backgroundWall.backgroundWallName}
              >
                {backgroundWall.backgroundWallName}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

GlobalFeatures.propTypes = {
  globalScale: PropTypes.any,
  setGlobalScale: PropTypes.func,
  selectedBackgroundWallName: PropTypes.any,
  setSelectedBackgroundWallName: PropTypes.func,
  backgroundWalls: PropTypes.any,  
};

export default GlobalFeatures;
