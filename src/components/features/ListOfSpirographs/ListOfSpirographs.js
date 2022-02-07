import React from 'react';
import Parameters from '../../views/Parameters/ParametersContainer';
import PropTypes from 'prop-types';
import styles from './ListOfSpirographs.module.scss';

class ListOfSpirographs extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.parameters !== prevProps.parameters) {
      let chosenSpirographID = '';

      if (
        this.props.parameters !== undefined &&
        this.props.parameters.length !== 0
      ) {
        chosenSpirographID = this.props.chosenSpirographId;
      }
      this.setState({ chosenSpirographID: chosenSpirographID });
    }
  }

  constructor(props) {
    super(props);
    this.state = { chosenSpirographID: ' ' };
    this.handleClick = this.handleClick.bind(this);
  }

  _onChangeChosenSpirographID(chosenSpirographID) {
    this.props.setChosenSpirographID(chosenSpirographID);
  }

  handleClick(event) {
    this._onChangeChosenSpirographID(event.target.getAttribute('data-key'));
  }

  render() {
    const { parameters, chosenSpirographId } = this.props;

    return (
      <div className={styles.root}>
        <div>
          {parameters.map((parameter) => (
            <textarea
              className={styles.clickedSpirographName}
              key={parameter.id}
              data-key={parameter.id}
              onClick={this.handleClick}
            >
              {parameter.spirographName}
            </textarea>
          ))}
        </div>
        <div className={styles.parameters}>
          <p className={styles.title}>Parameters:</p>
          <Parameters chosenSpirographID={chosenSpirographId} />
        </div>
      </div>
    );
  }
}

ListOfSpirographs.propTypes = {
  parameters: PropTypes.any,
  spirograph: PropTypes.any,
  chosenSpirographId: PropTypes.any,
  setChosenSpirographID: PropTypes.func,
};

export default ListOfSpirographs;
