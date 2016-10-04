import React from 'react';
import QuestionPreview from './QuestionPreview';
import questions from '../data/questions';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="question-selector">
          {questions.map(questionData => <QuestionPreview key={questionData.id} {...questionData} />)}
        </div>
      </div>
    );
  }
}