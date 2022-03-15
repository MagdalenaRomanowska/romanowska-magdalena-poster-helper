import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Parameters.module.scss';

class Parameters extends Component {
  
  _onChangeXPosition(xPosterPosition, parameterId) {
    this.props.setXPosterPosition(parameterId, xPosterPosition);
  }

  _onChangeYPosition(yPosterPosition, parameterId) {
    this.props.setYPosterPosition(parameterId, yPosterPosition);
  }

  _onChangeAngle(angle, parameterId) {
    this.props.setPosterAngle(parameterId, angle);
  }

  _onChangePosterWidth(posterWidth, parameterId) {
    this.props.setPosterWidth(parameterId, posterWidth);
  }

  _onChangePosterHeight(posterHeight, parameterId) {
    this.props.setPosterHeight(parameterId, posterHeight);
  }

  _onChangePicture(pictureName, parameterId) {
    this.props.setPictureName(parameterId, pictureName);
  }

  _onChangePosterDimensions(
    posterDimensionsName,
    parameterId
  ) {    
    this.props.setPosterDimensionsName(parameterId, posterDimensionsName);
  }

  render() {
    const { parameters, chosenPosterID, pictures, posterDimensions, posterWidth, posterHeight } =
      this.props;
    const parameter = parameters.filter((e) => e.id === chosenPosterID)[0];

    if (!parameter) {
      return ' ';
    }

    return (
      <div>
        <div>
          <table key={parameter.posterName}>
            <thead>
              <tr>
                <th scope='col' className={styles.tableLabel}>
                  Poster name: {parameter.posterName}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className={styles.parameterLabel}>
                    X position:
                    <input
                      type='number'
                      min='0'
                      max='1024'
                      step='10'
                      value={parameter.xPosterPosition}
                      onChange={(e) =>
                        this._onChangeXPosition(e.target.value, parameter.id)
                      }
                    />
                  </p>
                  <p className={styles.parameterLabel}>
                    Y position:{' '}
                    <input
                      type='number'
                      min='0'
                      max='768'
                      step='10'
                      value={parameter.yPosterPosition}
                      onChange={(e) =>
                        this._onChangeYPosition(e.target.value, parameter.id)
                      }
                    />
                  </p>
                  <p className={styles.parameterLabel}>
                    Angle:{' '}
                    <input
                      type='number'
                      min='0'
                      max='360'
                      step='5'
                      value={parameter.angle}
                      onChange={(e) =>
                        this._onChangeAngle(e.target.value, parameter.id)
                      }
                    />
                  </p>
                  <p className={styles.parameterLabel}>
                    Width:{' '}
                    <input
                      type='number'
                      value={posterWidth}
                      onChange={(e) =>
                        this._onChangePosterWidth(e.target.value, parameter.id)
                      }
                    />
                  </p>
                  <p className={styles.parameterLabel}>
                    Height:{' '}
                    <input
                      type='number'
                      value={posterHeight}
                      onChange={(e) =>
                        this._onChangePosterHeight(e.target.value, parameter.id)
                      }
                    />
                  </p>
                  <p className={styles.parameterLabel}>
                    Picture:{' '}
                    <select
                      onChange={(e) =>
                        this._onChangePicture(e.target.value, parameter.id)
                      }
                      value={parameter.pictureName}
                    >
                      {pictures.map((picture) => (
                        <option key={picture.pictureName} value={picture.pictureName}>
                          {picture.pictureName}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p className={styles.parameterLabel}>
                    Dimensions in &apos; &apos;:{' '}
                    <select
                      onChange={(event) =>                        
                        this._onChangePosterDimensions(event.target.value, parameter.id)
                      }
                      value={parameter.posterDimensionsName}
                    >
                      {posterDimensions.map((posterDimension) => (
                        <option
                          key={posterDimension.posterDimensionsName}
                          value={posterDimension.posterDimensionsName}
                        >
                          {posterDimension.posterDimensionsName}
                        </option>
                      ))}
                    </select>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Parameters.propTypes = {
  setXPosterPosition: PropTypes.func,
  setYPosterPosition: PropTypes.func,
  setPosterAngle: PropTypes.func,
  setPosterWidth: PropTypes.func,
  setPosterHeight: PropTypes.func,
  parameters: PropTypes.any,
  chosenPosterID: PropTypes.any,
  pictures: PropTypes.any,
  setPictureName: PropTypes.func,
  posterDimensions: PropTypes.any,
  setPosterDimensionsName: PropTypes.func,
  posterWidth: PropTypes.any,
  posterHeight: PropTypes.any,
};

export default Parameters;
