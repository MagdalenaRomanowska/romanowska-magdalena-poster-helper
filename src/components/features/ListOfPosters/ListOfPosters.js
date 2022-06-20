import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListOfPosters.module.scss';

class ListOfPosters extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.handleClickPosterNameOnList =
      this.handleClickPosterNameOnList.bind(this);
    this.handleClickRemovePoster = this.handleClickRemovePoster.bind(this);
    this.handleClickMovePosterUp = this.handleClickMovePosterUp.bind(this);
    this.handleClickMovePosterDown = this.handleClickMovePosterDown.bind(this);
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

  _onChangeMovePosterUp(chosenPosterIndex) {
    this.props.movePosterUp(chosenPosterIndex);
  }

  handleClickMovePosterUp(event) {
    this._onChangeMovePosterUp(event.target.getAttribute('data-key'));
  }

  _onChangeMovePosterDown(chosenPosterIndex) {
    this.props.movePosterDown(chosenPosterIndex);
  }

  handleClickMovePosterDown(event) {
    this._onChangeMovePosterDown(event.target.getAttribute('data-key'));
  }

  render() {
    const { posters, chosenPosterId } = this.props;

    return (
      <div className={styles.root}>
        <div>
          {posters.map((poster, index) => (
            <div key={poster.id}>
              <textarea
                id={'clickedPosterName'}
                className={
                  chosenPosterId === poster.id
                    ? styles.notClickedPosterName
                    : styles.clickedPosterName
                }
                data-key={poster.id}
                onClick={this.handleClickPosterNameOnList}
                value={poster.pictureName}
              ></textarea>
              <button className={styles.buttons}>
                <i
                  className={'fa fa-arrow-up'}
                  data-key={poster.id}
                  onClick={this.handleClickMovePosterUp}
                ></i>
                <i
                  className={'fa fa-arrow-down'}
                  data-key={poster.id}
                  onClick={this.handleClickMovePosterDown}
                ></i>
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
  selectedProjectName: PropTypes.func,
  movePosterDown: PropTypes.func,
  movePosterUp: PropTypes.func,
};

export default ListOfPosters;
