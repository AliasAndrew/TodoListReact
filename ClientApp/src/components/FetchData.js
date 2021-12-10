import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { todoItems: [], loading: true };
  }

  componentDidMount() {
      this.populateTodoItemsData();
  }

  static renderTodoList(todoItems) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Name</th>
            <th>Desc.</th>
            <th>Status</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {todoItems.map(todo =>
            <tr key={todo.id}>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td>{todo.status}</td>
              <td>{todo.deadline}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderTodoList(this.state.todoItems);

    return (
      <div>
        <h1 id="tabelLabel" >Todo List</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateTodoItemsData() {
    const response = await fetch('api/TodoItems');
    const data = await response.json();
    this.setState({ todoItems: data, loading: false });
  }
}
