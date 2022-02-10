import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Parameters.module.scss';

class Parameters extends Component {
  constructor(props) {
    super(props);
  }

  _onChangeXPosition(xPosition, parameterId) {
    this.props.setXPosition(parameterId, xPosition);
  }

  _onChangeYPosition(yPosition, parameterId) {
    this.props.setYPosition(parameterId, yPosition);
  }

  _onChangePosterWidth(posterWidth, parameterId) {
    this.props.setPosterWidth(parameterId, posterWidth);
  }

  _onChangePosterHeight(posterHeight, parameterId) {
    this.props.setPosterHeight(parameterId, posterHeight);
  }

  render() {
    const { parameters, chosenPosterID } = this.props;
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
                    value={parameter.xPosition}
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
                    value={parameter.yPosition}
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
              </td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Parameters.propTypes = {
  setXPosition: PropTypes.func,
  setYPosition: PropTypes.func,
  setPosterWidth: PropTypes.func,
  setPosterHeight: PropTypes.func,
  parameters: PropTypes.any,
  chosenPosterID: PropTypes.any,
};

export default Parameters;
