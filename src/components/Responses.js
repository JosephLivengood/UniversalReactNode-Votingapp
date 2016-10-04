import React from 'react';

export default class Responses extends React.Component {
  render() {
    return (
      <li className="responses">
        <span className="id">{this.props.id}</span>
        <span className="response"> {this.props.response}</span>
      </li>
    );
  }
}