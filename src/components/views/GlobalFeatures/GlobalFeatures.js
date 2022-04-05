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
    const { selectedBackgroundWallName, backgroundWalls, globalScaleByProjectName, backgroundWallNameByProjectName } =
      this.props;

    return (
      <div className={styles.root}>
        <div className={styles.scale}>
          Change scale:
          <input
            type='number'
            min='0'
            max='20'
            step='1'
            value={globalScaleByProjectName}
            onChange={(e) => this._onChangeScale(e.target.value)}
          />
        </div>
        <div className={styles.parameterLabel}>
          Choose background wall:{' '}
          <select
            onChange={(e) => this._onChangeBackgroundWall(e.target.value)}
            value={backgroundWallNameByProjectName}
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
  setGlobalScale: PropTypes.func,
  selectedBackgroundWallName: PropTypes.any,
  setSelectedBackgroundWallName: PropTypes.func,
  backgroundWalls: PropTypes.any,
  globalScaleByProjectName: PropTypes.any,
  backgroundWallNameByProjectName: PropTypes.any,
};

export default GlobalFeatures;
