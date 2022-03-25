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
    this.handleClickRemovePoster = this.handleClickRemovePoster.bind(this);
  }

  _onChangeChosenPosterID(chosenPosterID) {
    this.props.setChosenPosterID(chosenPosterID);    
  }

  handleClickPosterNameOnList(event) {
    this._onChangeChosenPosterID(event.target.getAttribute('data-key'));
  }

  _onChangeRemovePoster(chosenPosterID) {
    this.props.removePoster(chosenPosterID);
  }

  handleClickRemovePoster(event) {
    this._onChangeRemovePoster(event.target.getAttribute('data-key'));
  }

  render() {
    const { posters } = this.props;

    return (
      <div className={styles.root}>
        <div>
          {posters.map((poster) => (
            <div key={poster.id}>
              <textarea
                className={styles.clickedPosterName}
                data-key={poster.id}
                onClick={this.handleClickPosterNameOnList}
                defaultValue={poster.posterName}
              ></textarea>
              <button className={styles.removePoster}>
                <i
                  className={'fa fa-trash-o'}
                  data-key={poster.id}
                  onClick={this.handleClickRemovePoster}
                ></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ListOfPosters.propTypes = {
  posters: PropTypes.any,
  chosenPosterId: PropTypes.any,
  setChosenPosterID: PropTypes.func,
  removePoster: PropTypes.func,
};

export default ListOfPosters;
