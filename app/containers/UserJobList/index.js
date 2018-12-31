/**
 *
 * UserJobList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  loadJobsRequest,
  sortCompany,
  sortLocation,
  sortStatus,
  sortTitle,
  sortDate
} from './actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserJobList from './selectors';
import reducer from './reducer';
import saga from './saga';
import Table from '../../components/Table';
import TableHeader from '../../components/Table/TableHeader';
import TableRow from '../../components/Table/TableRow';
import TableData from '../../components/Table/TableData';

/* eslint-disable react/prefer-stateless-function */
export class UserJobList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadJobsRequest();
  }
  render() {
    const { loading, jobs } = this.props.userjoblist;
    const {
      sortCompany,
      sortLocation,
      sortStatus,
      sortTitle,
      sortDate,
    } = this.props;
    if (loading) {
      return <div>Loading jobs.....</div>;
    }
    return (
      <Table>
        <TableRow>
          <TableHeader sort={sortTitle} header="Title" />
          <TableHeader sort={sortLocation} header="Location" />
          <TableHeader sort={sortCompany} header="Company" />
          <TableHeader sort={sortStatus} header="Status" />
          <TableHeader sort={sortDate} header="Date Added" />
        </TableRow>
        {jobs.map((job, i) => {
          const { title, location, company, status, timestamp } = job;
          return (
            <TableRow key={i}>
              <TableData data={title} />
              <TableData data={location} />
              <TableData data={company} />
              <TableData data={status} />
              <TableData date data={timestamp} />
            </TableRow>
          );
        })}
      </Table>
    );
  }
}

UserJobList.propTypes = {
  loadJobsRequest: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userjoblist: makeSelectUserJobList(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadJobsRequest: () => dispatch(loadJobsRequest()),
    sortCompany: () => dispatch(sortCompany()),
    sortLocation: () => dispatch(sortLocation()),
    sortStatus: () => dispatch(sortStatus()),
    sortTitle: () => dispatch(sortTitle()),
    sortDate: () => dispatch(sortDate()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userJobList', reducer });
const withSaga = injectSaga({ key: 'userJobList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserJobList);
