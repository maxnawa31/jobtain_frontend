/**
 *
 * UserHomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import UserJobList from '../UserJobList';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import NewJobForm from '../NewJobForm'
import {Link} from 'react-router-dom';
/* eslint-disable react/prefer-stateless-function */
export class UserHomePage extends React.Component {
  render() {
    return (
      <div>
        <Link to = "/users/applications/new">Add application</Link>
        <UserJobList />
      </div>
    );
  }
}

UserHomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userhomepage: makeSelectUserHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userHomePage', reducer });
const withSaga = injectSaga({ key: 'userHomePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserHomePage);
