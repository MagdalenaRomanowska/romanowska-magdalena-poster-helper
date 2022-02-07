import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Parameters.module.scss';

class Parameters extends Component {
  constructor(props) {
    super(props);
  }

  _onChangeXW1Position(xW1, parameterId) {
    this.props.setXW1(parameterId, xW1);
  }

  _onChangeYW1Position(yW1, parameterId) {
    this.props.setYW1(parameterId, yW1);
  }

  _onChangeR(r, parameterId) {
    this.props.setR(parameterId, r);
  }

  _onChangeW1Teeth(w1Teeth, parameterId) {
    this.props.setW1Teeth(parameterId, w1Teeth);
  }

  _onChangeW2Teeth(w2Teeth, parameterId) {
    this.props.setW2Teeth(parameterId, w2Teeth);
  }

  _onChangePenPosition(penPosition, parameterId) {
    this.props.setPenPosition(parameterId, penPosition);
  }

  _onChangeShowOuterWheel(showOuterWheel, parameterId) {
    this.props.setShowOuterWheel(parameterId, showOuterWheel);
  }

  _onChangeShowInnerWheel(showInnerWheel, parameterId) {
    this.props.setShowInnerWheel(parameterId, showInnerWheel);
  }

  _onChangeShowPen(showPen, parameterId) {
    this.props.setShowPen(parameterId, showPen);
  }

  _onChangeColor(color, parameterId) {
    this.props.setColor(parameterId, color);
  }

  _onChangGamma(gamma, parameterId) {
    this.props.setGamma(parameterId, gamma);
  }

  render() {
    const { parameters, chosenSpirographID } = this.props;
    const parameter = parameters.filter((e) => e.id === chosenSpirographID)[0];

    if (!parameter) {
      return ' ';
    }

    return (
      <div>
        <div>
          <table key={parameter.spirographName}>
            <thead>
              <th scope='col' className={styles.tableLabel}>
                Spirograph name: {parameter.spirographName}
              </th>
            </thead>
            <tbody>
              <td>
                <p className={styles.parameterLabel}>
                  Main wheel X position:
                  <input
                    type='number'
                    min='0'
                    max='1024'
                    step='10'
                    value={parameter.xW1}
                    onChange={(e) =>
                      this._onChangeXW1Position(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Main wheel Y position:{' '}
                  <input
                    type='number'
                    min='0'
                    max='768'
                    step='10'
                    value={parameter.yW1}
                    onChange={(e) =>
                      this._onChangeYW1Position(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Main wheel radius:{' '}
                  <input
                    type='number'
                    min='1'
                    max='400'
                    value={parameter.r}
                    onChange={(e) =>
                      this._onChangeR(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Outer wheel teeth:{' '}
                  <input
                    type='number'
                    value={parameter.w1Teeth}
                    onChange={(e) =>
                      this._onChangeW1Teeth(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Inner wheel teeth:{' '}
                  <input
                    type='number'
                    value={parameter.w2Teeth}
                    onChange={(e) =>
                      this._onChangeW2Teeth(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  {/* Pen position from center (0) to border (1) of inner wheel:{' '} */}
                  Pen position:
                  <input
                    type='number'
                    step='0.01'
                    value={parameter.penPosition}
                    onChange={(e) =>
                      this._onChangePenPosition(e.target.value, parameter.id)
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Show outer wheel
                  <input
                    type='checkbox'
                    checked={parameter.showOuterWheel}
                    onChange={(e) =>
                      this._onChangeShowOuterWheel(
                        e.target.checked,
                        parameter.id
                      )
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Show inner wheel
                  <input
                    type='checkbox'
                    checked={parameter.showInnerWheel}
                    onChange={(e) =>
                      this._onChangeShowInnerWheel(
                        e.target.checked,
                        parameter.id
                      )
                    }
                  />
                </p>
                <p className={styles.parameterLabel}>
                  Show pen
                  <input
                    type='checkbox'
                    checked={parameter.showPen}
                    onChange={(e) =>
                      this._onChangeShowPen(e.target.checked, parameter.id)
                    }
                  />
                </p>
                {/* <p className={styles.parameterLabel}>
                      Gamma:{' '}
                      <input
                        type='number'
                        min='0'
                        max='360'
                        value={parameter.gamma}
                        onChange={(e) =>
                          this._onChangeGamma(e.target.value, parameter.id)
                        }
                      />
                    </p> */}
                <p className={styles.parameterLabel}>
                  Color:{' '}
                  <input
                    type='color'
                    value={parameter.color}
                    onChange={(e) =>
                      this._onChangeColor(e.target.value, parameter.id)
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
  setXW1: PropTypes.func,
  setYW1: PropTypes.func,
  setR: PropTypes.func,
  setW1Teeth: PropTypes.func,
  setW2Teeth: PropTypes.func,
  setPenPosition: PropTypes.func,
  setShowOuterWheel: PropTypes.any,
  setShowInnerWheel: PropTypes.any,
  setShowPen: PropTypes.any,
  setColor: PropTypes.any,
  setGamma: PropTypes.any,
  parameters: PropTypes.any,
  chosenSpirographID: PropTypes.any,
};

export default Parameters;
