import React from 'react';

import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      todos: [
        {
          id: 1,
          title: 'Go to grocery store',
          completed: false,
        },
        {
          id: 2,
          title: 'Pick up dry cleaning',
          completed: false,
        },
        {
          id: 3,
          title: 'Go to gym',
          completed: true,
        },
        {
          id: 4,
          title: 'Prepare meals',
          completed: true,
        }
      ]
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleCheckbox(e) {
    let todos = this.state.todos;

    todos.forEach(todo => {
      if (todo.id == e.target.value) {
        todo.completed = !todo.completed;
        return false;
      }
    });

    this.setState({todos: todos});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      title: '',
      todos: [
        ...this.state.todos,
        {
        id: new Date().getTime(),
        title: this.state.title,
        completed: false
        }
      ]
    })
  }

  countCompleted() {
    return this.state.todos.filter(todo => todo.completed).length;
  }

  render() {
    const todoItems = this.state.todos.map((item) => 
      <TodoItem key={item.id} item={item} handler={this.handleCheckbox} />
    );
    
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label className="mb-2 mr-sm-2" htmlFor="title">Task</label>
          <input type="text" id="title" className="form-control mb-2 mr-sm-2" placeholder="Task" value={this.state.title} onChange={this.handleTitleChange} />
          <button type="submit" className="btn btn-primary mb-2">Add</button>
        </form>

        <p className="mt-2 text-muted">Completed {this.countCompleted()} of {this.state.todos.length}</p>

        <ul className="list-group mb-3">{todoItems}</ul>
      </div>
    );
  }
}