import React, { Component } from "react";
//import getCalendar from "./getCalendar";
import 'antd/dist/antd.css';
import ButtonDelete from "./Button";
import { Calendar } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";

class TablePage extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
        { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
        { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
        { id: 4, name: "Asad", age: 25, email: "asad@email.com" },
      ],
    };
  }

  ulet;

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, name, age, email } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
          <td>
            <ButtonDelete />
          </td>
          <td>
            <button type="button">Edit</button>
          </td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
        <Link to="/create">Create</Link>
        <div className="site-calendar-demo-card">
          <Calendar fullscreen={false} />
        </div>
        ,
      </div>
    );
  }
}

export default TablePage; //exporting a component make it reusable and this is the beauty of react
