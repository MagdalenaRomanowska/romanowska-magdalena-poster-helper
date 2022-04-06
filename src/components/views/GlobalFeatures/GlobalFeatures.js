import React from 'react';
import PropTypes from 'prop-types';
import styles from './GlobalFeatures.module.scss';

class GlobalFeatures extends React.Component {
  _onChangeScale(scale, projectName) {
    this.props.setGlobalScale(scale, projectName);
  }

  _onChangeBackgroundWall(backgroundWallName) {
    this.props.setSelectedBackgroundWallName(backgroundWallName);
  }

  render() {
    const { backgroundWalls, globalScaleByProjectName, backgroundWallNameByProjectName, selectedProjectName } =
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
            onChange={(e) => this._onChangeScale(e.target.value, selectedProjectName)}
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
  setSelectedBackgroundWallName: PropTypes.func,
  backgroundWalls: PropTypes.any,
  globalScaleByProjectName: PropTypes.any,
  backgroundWallNameByProjectName: PropTypes.any,
  selectedProjectName: PropTypes.any,
};

export default GlobalFeatures;
