//Temp solution for routes until it gets more complicated.

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import QuestionPage from './components/QuestionPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="question/:id" component={QuestionPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;