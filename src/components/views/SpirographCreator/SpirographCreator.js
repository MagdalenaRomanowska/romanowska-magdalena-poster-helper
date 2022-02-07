import React from 'react';
import uuid from 'uuid';

class SpirographCreator extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.onCreate({
    //   id: uuid.v4(),
    // });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Add Spirograph</button>
      </form>
    );
  }
}

export default SpirographCreator;
