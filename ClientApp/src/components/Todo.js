import React from "react";

export default function Todo(props) {
    return (
        <li className="row list-group-item d-flex justify-content-between">
            {props.name}
            <div className="btn-group align-self-end">
                <button
                    type="button"
                    className="btn btn-outline-warning"
                >
                    Up
                </button>
                <button
                    type="button"
                    className="btn btn-outline-warning"
                >
                    Down
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

