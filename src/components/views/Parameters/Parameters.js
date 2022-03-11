import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Parameters.module.scss';

class Parameters extends Component {
  constructor(props) {
    super(props);
  }

  _onChangeXPosition(xPosterPosition, parameterId) {
    this.props.setXPosterPosition(parameterId, xPosterPosition);
  }

  _onChangeYPosition(yPosterPosition, parameterId) {
    this.props.setYPosterPosition(parameterId, yPosterPosition);
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

  render() {
    const { parameters, chosenPosterID, pictures, posterDimensions } = this.props;
    const parameter = parameters.filter((e) => e.id === chosenPosterID)[0];

    if (!parameter) {
      return ' ';
    }

    return (
      <div>
        <div>
          <table key={parameter.posterName}>
            <thead>
              <th scope='col' className={styles.tableLabel}>
                Poster name: {parameter.posterName}
              </th>
            </thead>
            <tbody>
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
                  Width:{' '}
                  <input
                    type='number'
                    value={parameter.posterWidth}
                    onChange={(e) =>
                      this._onChangePosterWidth(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Height:{' '}
                  <input
                    type='number'
                    value={parameter.posterHeight}
                    onChange={(e) =>
                      this._onChangePosterHeight(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Picture:{' '}
                  <form>
                    <select onChange={(e) => this._onChangePicture(e.target.value, parameter.id)} value={parameter.pictureName}>
                      {pictures.map((picture) => (
                        <option key={picture._id} value={picture.pictureName}>{picture.pictureName}</option>
                      ))}
                    </select>
                    
                  </form>
                </p>
                <p className={styles.parameterLabel}>
                  Dimensions in &apos; &apos;:{' '}
                  <form>
                    <select onChange={(e) => this._onChangePicture(e.target.value, parameter.id)} value={parameter.pictureName}>
                      {posterDimensions.map((posterDimension) => (
                        <option key={posterDimension._id} value={posterDimension.posterDimensionsWidth}>{posterDimension.posterDimensionsWidth} x {posterDimension.posterDimensionsHeight}</option>
                      ))}
                    </select>
                    
                  </form>
                </p>
              </td>
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
  setPosterWidth: PropTypes.func,
  setPosterHeight: PropTypes.func,
  parameters: PropTypes.any,
  chosenPosterID: PropTypes.any,
  pictures: PropTypes.any,
  setPictureName: PropTypes.func,
  posterDimensions: PropTypes.any,
};

export default Parameters;
