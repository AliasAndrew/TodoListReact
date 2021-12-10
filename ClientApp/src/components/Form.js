import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState('');
    const [deadline, setDeadline] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName('');
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="row">
            <h3 className="">
                    New Todo:
            </h3>
            <div class="form-group">
                <input
                    type="text"
                    id="new-todo-input"
                    className="form-control"
                    name="name"
                    value={name}
                    placeholder="Enter todo name"
                    onChange={handleChange}
                />
            </div>

            <div class="form-group">
                <input
                    type="text"
                    id="new-todo-desc"
                    className="form-control"
                    name="description"
                    value={desc}
                    placeholder="Enter todo description"
                    onChange={handleChange}
                />
            </div>

            <div class="form-group">
                <input
                    type="text"
                    id="new-todo-status"
                    className="form-control"
                    name="status"
                    value={status}
                    placeholder="Enter todo status"
                    onChange={handleChange}
                />
            </div>

            <div class="form-group">
                <input
                    type="date"
                    id="new-todo-date"
                    className="form-control"
                    name="text"
                    value={deadline}
                    onChange={handleChange}
                 />
            </div>

            <button type="submit" className="btn btn-outline-primary">
                Add
            </button>
        </form>
    );
}

export default Form;
