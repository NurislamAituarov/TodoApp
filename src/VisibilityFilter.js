import React, { Component } from 'react';
import { connect } from 'react-redux';

class VisibilityFilter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.filterTodos('all')}>Show All</button>
        <button onClick={() => this.props.filterTodos('notCompleted')}>
          Show Not Completed
        </button>
        <button onClick={() => this.props.filterTodos('completed')}>
          ShoW Completed
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterTodos: (chosenType) =>
      dispatch({ type: 'SET_VISIBILITY', payload: chosenType }),
  };
};

export default connect(null, mapDispatchToProps)(VisibilityFilter);
