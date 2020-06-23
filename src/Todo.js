import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  render() {
    const { id } = this.props;
    return (
      <React.Fragment>
        <p
          style={{
            textDecoration:
              this.props.todo.completed === true ? 'line-through' : '',
            display: this.props.todo.visible === true ? 'block' : 'none',
            width: '300px',
            fontSize: '18px',
            border: '1px grey solid',
            padding: '5px',
          }}
          onClick={() => this.props.completeTodo(id)}
        >
          {this.props.todo.title}
          <span
            style={{
              color: 'red',
              float: 'right',
              cursor: 'pointer',
            }}
            onClick={() => this.props.deleteTodo(id)}
          >
            X
          </span>
        </p>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: () => dispatch({ type: 'ADD_TODO' }),
    deleteTodo: (id) => dispatch({ type: 'DELETE_TODO', payload: id }),
    completeTodo: (id) => dispatch({ type: 'COMPLETE_TODO', payload: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
