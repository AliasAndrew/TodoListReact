import React, { useState } from "react";

function Form(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [deadline, setDeadline] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name, description, status, deadline);
        setName('');
        setDescription('');
        setStatus('');
        setDeadline('');
    }

    function handleChange(e) {
        setName(e.target.value);
    }
    function handleChangeDesc(e) {
        setDescription(e.target.value);
    }
    function handleChangeStatus(e) {
        setStatus(e.target.value);
    }
    function handleChangeDeadline(e) {
        setDeadline(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit} className="row m-3 justify-content-between">
            <h3 className="text-muted">
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
                    value={description}
                    placeholder="Enter todo description"
                    onChange={handleChangeDesc}
                />
            </div>

            <div class="form-group">
                <select name="status" id="new-todo-status"
                    className="form-control" onChange={handleChangeStatus}>
                    <option value="in progress">in progress</option>
                    <option value="done">done</option>
                    <option value="postponed">postponed</option>
                    <option value="pending">pending</option>
                </select>
            </div>

            <div class="form-group">
                <input
                    type="date"
                    id="new-todo-date"
                    className="form-control"
                    name="text"
                    value={deadline}
                    onChange={handleChangeDeadline}
                 />
            </div>

            <button type="submit" className="btn btn-outline-primary">
                Add
            </button>
        </form>
    );
}

export default Form;
