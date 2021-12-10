/*import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}*/
import React, { useState } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";


function App(props) {

    const [tasks, setTasks] = useState(props.tasks);

    fetch('api/TodoItems')
        .then(response => response.json())
        .then(data => setTasks(data));

    function sortTodos() {
        //to be implemented
    }

    function addTask(name) {
        //send data as an object stringified to server, object back is new task (with id now) + update other item task[length]
        const newTask = { id: "id", name: name };
        setTasks([...tasks, newTask]);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    /*
    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    */

    const taskList = tasks.map(task => (
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            //toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
        />
    )
    );

    return (
        <div className="container">
            <h1 className="text-center">TodoListReact</h1>
            <Form addTask={addTask} />
            <ul className="list-group">
                {taskList}
            </ul>
        </div>
    );
}

export default App;
