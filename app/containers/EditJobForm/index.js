/**
 *
 * EditJobForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEditJobForm from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class EditJobForm extends React.Component {
  render() {
    return <div>This is the edit job form</div>;
  }
}

EditJobForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editjobform: makeSelectEditJobForm(),
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

const withReducer = injectReducer({ key: 'editJobForm', reducer });
const withSaga = injectSaga({ key: 'editJobForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditJobForm);
