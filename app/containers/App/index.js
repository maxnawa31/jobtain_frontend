/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';
import UserHomePage from '../UserHomePage';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NewJobForm from '../NewJobForm';
import EditJobForm from '../EditJobForm';
export default function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/users/:userId/jobs/:postId/edit"
          render = {(props) => <EditJobForm userId={props.match.params.userId} postId={props.match.params.postId}/>}
        />
        <Route exact path="/users/login" component={Login} />
        <Route exact path="/users/signup" component={Signup} />
        <Route exact path="/users/:id" component={UserHomePage} />
        <Route
          exact
          path="/users/:id/applications/new"
          component={NewJobForm}
        />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
