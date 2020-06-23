import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import VisibilityFilter from './VisibilityFilter';
class App extends Component {
  render() {
    return (
      <div style={{ width: '300px' }}>
        <TodoForm />
        <VisibilityFilter />
        <div>
          {this.props.todos.map((todo) => (
            <Todo todo={todo} key={todo.id} id={todo.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(App);
