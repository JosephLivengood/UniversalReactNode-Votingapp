import React from 'react';
import { Link } from 'react-router';

export default class QuestionPreview extends React.Component {
  render() {
    return (
      <Link to={`/question/${this.props.id}`}>
        <div className="question-preview">
          <h2 className="question">{this.props.question}</h2>
          <span className="response-count">{this.props.responses.length}</span>
        </div>
      </Link>
    );
  }
}