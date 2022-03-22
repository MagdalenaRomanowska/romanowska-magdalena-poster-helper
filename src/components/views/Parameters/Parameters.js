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

  _onChangePicture(pictureName, parameterId) {
    console.log('onChange', parameterId, pictureName);
    this.props.setPictureName(parameterId, pictureName);
  }

  _onChangePosterDimensions(posterDimensionsName, parameterId) {
    this.props.setPosterDimensionsName(parameterId, posterDimensionsName);
  }

  openGallery() {
    document.getElementById('gallery').style.display = 'block';
    document.getElementById('closeGallery').style.display = 'block';
  }

  closeGallery() {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('closeGallery').style.display = 'none';
  }

  render() {
    const { parameters, chosenPosterId, pictures, posterDimensions } =
      this.props;
    const parameter = parameters.filter((e) => e.id === chosenPosterId)[0];

    if (!parameter) {
      return ' ';
    }

    return (
      <div className={styles.root}>
        <div>
          <table key={parameter.posterName}>
            <thead>
              <tr>
                <th className={styles.tableLabel}>
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
                    Dimensions in &apos; &apos;:{' '}
                    <select
                      className={styles.select}
                      onChange={(event) =>
                        this._onChangePosterDimensions(
                          event.target.value,
                          parameter.id
                        )
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
                  <div className={styles.parameterLabelWithPicture}>
                    Choose picture:{' '}
                    <div
                      className={styles.openGallery}
                      onClick={() => this.openGallery()}
                    ></div>
                    <div
                      id={'gallery'}
                      style={{ display: 'none' }}
                      className={styles.gallery}
                    >
                      {pictures.map((picture) => (
                        <div
                          key={picture.pictureName}
                          className={styles.picture}
                        >
                          <img
                            className={styles.imageInGallery}
                            src={picture.url}
                            alt={'gallery posters'}
                            onClick={(e) =>
                              this._onChangePicture(
                                picture.pictureName,
                                parameter.id
                              )
                            }
                          />
                          <section className={styles.pictureName}>
                            {picture.pictureName}
                          </section>
                        </div>
                      ))}
                    </div>
                    <div
                      id={'closeGallery'}
                      style={{ display: 'none' }}
                      onClick={() => this.closeGallery()}
                      className={styles.closeGallery}
                    >
                      <p className={styles.closeGalleryX}>x</p>
                    </div>
                    {/* <select
                      className={styles.select}
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
                    </select> */}
                  </div>
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
  chosenPosterId: PropTypes.any,
  pictures: PropTypes.any,
  setPictureName: PropTypes.func,
  posterDimensions: PropTypes.any,
  setPosterDimensionsName: PropTypes.func,
};

export default Parameters;
