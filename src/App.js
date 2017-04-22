import React, { Component } from 'react';
import './App.css';

class App extends Component {

  addTodo(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let completed = this.refs.completed.value;
    let counter = this.state.counter;

    let todo = {
      name,
      completed
    };

    counter +=1;

    let todos = this.state.todos;

    todos.push(todo);

    this.setState({
      todos: todos,
      counter: counter
    });

    this.refs.todoForm.reset();

  }

  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todos: [],
      title: "My React simple todo",
      counter: 0
    }
  }


  render() {
    let title = this.state.title;
    let todos = this.state.todos;
    return (
      <div className="App">
          <h2>{title}</h2>

          <form ref="todoForm">
          <input type="text" ref="name" placeholder="What do you do" />
          <input type="text" ref="completed" placeholder="Is it done" />
          <button onClick={this.addTodo}>Add todo</button>
          </form>

          <ul>
            {todos.map( (todo => <li key={todo.counter}> {todo.name} </li>) )}
          </ul>
      </div>
    );
  }
}

export default App;
