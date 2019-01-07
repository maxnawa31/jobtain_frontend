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

/* eslint-disable react/prefer-stateless-function */
export class EditJobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      company: '',
      location: '',
      status: '',
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state),
    );
  };
  render() {
    const { userId, postId } = this.props;
    console.log(userId, postId);
    return (
      <div>
        <StyledForm action="">
          <StyledInput
            onChange={this.handleChange}
            name="title"
            placeholder="title"
            type="text"
          />
          <StyledInput
            onChange={this.handleChange}
            name="company"
            placeholder="company"
            type="text"
          />
          <StyledInput
            onChange={this.handleChange}
            name="location"
            placeholder="location"
            type="text"
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
