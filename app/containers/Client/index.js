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

function Client() {
  return <div />;
}

Client.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  client: makeSelectClient(),
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

const withReducer = injectReducer({ key: 'client', reducer });
const withSaga = injectSaga({ key: 'client', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Client);
