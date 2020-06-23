import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoForm extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({ title: e.target.value });
    console.log(this.state.title);
  };
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (this.state.title !== '') {
              this.props.addTodo(this.state.title);
            } else {
              return;
            }

            this.setState({ title: '' });
          }}
        >
          <div style={{ width: '300px' }}>
            <input
              type="text"
              placeholder="Add todo..."
              onChange={(e) => this.onChange(e)}
              value={this.state.title}
              style={{ width: '230px' }}
            />
            <button style={{ display: 'inline-block' }} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

let nextId = 0;
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (title) =>
      dispatch({ type: 'ADD_TODO', payload: title, id: nextId++ }),
    deleteTodo: () => dispatch({ type: 'DELETE_TODO' }),
    completeTodo: () => dispatch({ type: 'COMPLETE_TODO' }),
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
