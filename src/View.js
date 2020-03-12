import React from "react";
// import item from "./App";
import "./View.css";
// import Edit from "./Edit";

const View = props => {
  return (
    <div className="table">
      <h1>Employee Details</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>first name</th>
            <th>last name</th>
            <th>email</th>
            <th>gender</th>
            <th>account</th>
            <th>age</th>
            <th>action</th>
          </tr>
        </thead>

        {props.item.map((items, i) => (
          <tbody>
            <tr key={i.id}>
              <td>{items.id}</td>
              <td>{items.first_name}</td>
              <td>{items.last_name}</td>
              <td>{items.email}</td>
              <td>{items.gender}</td>
              <td>{items.account}</td>
              <td>{items.age}</td>
              <td>
                <button onClick={() => props.onEdit(i)}>Edit</button>
                <button onClick={() => props.OnDelete(items.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default View;
