/**
 *
 * NewJobForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNewJobForm from './selectors';
import reducer from './reducer';
import saga from './saga';
import {StyledForm, StyledInput, StyledInputButton} from '../../components/StyledComponents/NewJobForm'
import DropDown from '../../components/DropDown';
/* eslint-disable react/prefer-stateless-function */
export class NewJobForm extends React.Component {
  state = {
    title: '',
    company: '',
    location: '',
    status: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
  }

  handleStatusChange = (status) => {
    this.setState({status}, () => console.log(this.state))
  }
  render() {
    return (
      <div>
        <StyledForm onSubmit = {this.handleSubmit} action="">
          <StyledInput onChange={this.handleChange} name='title' placeholder="title" type="text"/>
          <StyledInput onChange={this.handleChange} name='company' placeholder='company' type="text"/>
          <StyledInput onChange={this.handleChange} name='location' placeholder = 'location' type="text"/>
          <DropDown handleStatusChange={this.handleStatusChange} name='status'/>
          <StyledInputButton>Add Application</StyledInputButton>
        </StyledForm>
      </div>
    );
  }
}

NewJobForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newjobform: makeSelectNewJobForm(),
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

const withReducer = injectReducer({ key: 'newJobForm', reducer });
const withSaga = injectSaga({ key: 'newJobForm', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewJobForm);
