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
import {
  StyledForm,
  StyledInput,
  StyledInputButton,
} from '../../components/StyledComponents/NewJobForm';
import DropDown from '../../components/DropDown';
import { editJobRequest } from './actions';
/* eslint-disable react/prefer-stateless-function */
export class EditJobForm extends React.Component {
  constructor(props) {
    super(props);
    // const {foundJob} = props;
    const foundJob = props['foundJob'][0];
    const { title, company, location, status } = foundJob;
    this.state = {
      title,
      company,
      location,
      status,
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state),
    );
  };
  handleStatusChange = status => {
    this.setState({ status }, () => console.log(this.state));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { userId, jobId } = this.props;
    this.props.editJob(this.state, userId, jobId);
  };
  render() {
    const { title, company, location, status } = this.state;
    return (
      <div>
        <StyledForm onSubmit={this.handleSubmit} action="">
          <StyledInput
            onChange={this.handleChange}
            name="title"
            placeholder="title"
            type="text"
            value={title}
          />
          <StyledInput
            onChange={this.handleChange}
            name="company"
            placeholder="company"
            type="text"
            value={company}
          />
          <StyledInput
            onChange={this.handleChange}
            name="location"
            placeholder="location"
            type="text"
            value={location}
          />
          <DropDown
            handleStatusChange={this.handleStatusChange}
            name="status"
          />
          <StyledInputButton type="submit">
            Update Application
          </StyledInputButton>
        </StyledForm>
      </div>
    );
  }
}

EditJobForm.propTypes = {
  editJob: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const jobs = state.get('userJobList').get('jobs');
  const foundJob = jobs.filter(job => {
    return job.id.toString() === ownProps.jobId;
  });
  return {
    foundJob,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    editJob: (jobData, userId, jobId) =>
      dispatch(editJobRequest(jobData, userId, jobId)),
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
