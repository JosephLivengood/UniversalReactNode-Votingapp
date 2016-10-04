import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import questions from '../data/questions';

export default class QuestionPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const question = question.filter((question) => question.id === id)[0];
    if (!question) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${question.cover})` };
    return (
      <div className="question-full">
        <QuestionMenu/>
        <div className="question">
          <header style={headerStyle}/>
        <h2 className="question">{questions.question}</h2>
          <section className="responses">
            <p>Choose from <strong>{questions.responses.length}</strong> responses:</p>
            <ul>{
              questions.responses.map((response, i) => <response key={i} {...response}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}