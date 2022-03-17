import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListOfPosters.module.scss';

class ListOfPosters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movingModeOn: false,
      pressed: false,
      scale: ' ',
    };
    this.handleClickPosterNameOnList =
      this.handleClickPosterNameOnList.bind(this);
  }

  _onChangeChosenPosterID(chosenPosterID) {
    this.props.setChosenPosterID(chosenPosterID);
  }

  handleClickPosterNameOnList(event) {
    this._onChangeChosenPosterID(event.target.getAttribute('data-key'));
  }
  
  render() {
    const { parameters } = this.props;

    return (
      <div className={styles.root}>
        <div>
          {parameters.map((parameter) => (
            <textarea
              className={styles.clickedPosterName}
              key={parameter.id}
              data-key={parameter.id}
              onClick={this.handleClickPosterNameOnList}
              defaultValue={parameter.posterName}
            ></textarea>
          ))}
        </div>               
      </div>
    );
  }
}

ListOfPosters.propTypes = {
  parameters: PropTypes.any,
  chosenPosterId: PropTypes.any,  
  setChosenPosterID: PropTypes.func,
};

export default ListOfPosters;
