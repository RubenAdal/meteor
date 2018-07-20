import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

import { Tasks } from '../api/tasks.js';

// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }
  toggleCheckedf() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setCheckedf', this.props.task._id, !this.props.task.checkedf);
  }

  deleteThisTask() {
    Meteor.call('tasks.remove', this.props.task._id);
  }

  togglePrivate() {
    Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      checked: this.props.task.checked,
      checkedf: this.props.task.checkedf,
      private: this.props.task.private,
    });

    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <input
          type="checkbox" 
         
          readOnly
          checked={!!this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        { this.props.showPrivateButton ? (
          <button className="toggle-private" onClick={this.togglePrivatef.bind(this)}>
            { this.props.task.private ? 'Private' : 'Public' }
          </button>
        ) : ''}

        <span className="text">
          <strong>{this.props.task.username}</strong>: {this.props.task.text}
        </span>
        <h4>
        <input
          type="checkbox" 
          readOnly
          checked={!!this.props.task.checkedf}
          onClick={this.toggleCheckedf.bind(this)}
        />
        tarea favorita
        </h4>

        <span><label>  </label>  
          <h4>{this.props.task.fecha}</h4>
        </span>
      </li>
    );
  }
}