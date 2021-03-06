/**
 *
 * Client
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectClient from './selectors';
import reducer from './reducer';
import saga from './saga';
import { setClient } from './actions';
export class Client extends React.Component {
  render() {
    return <div />;
  }
}

Client.propTypes = {
  setClient: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  client: makeSelectClient(),
});

function mapDispatchToProps(dispatch) {
  return {
    setClient: userObj => dispatch(setClient(userObj)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'client', reducer });
const withSaga = injectSaga({ key: 'client', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Client);
