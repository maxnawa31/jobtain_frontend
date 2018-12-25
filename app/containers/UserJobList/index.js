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
import { loadJobsRequest } from './actions';
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
    console.log(this.props)
    const { loading, jobs } = this.props.userjoblist;
    console.log(loading,jobs)
    if (loading) {
      return <div>Loading jobs.....</div>;
    } else {
      return (
        <Table>
          <TableRow>
            <TableHeader header={'Title'} />
            <TableHeader header={'Location'} />
            <TableHeader header={'Company'} />
            <TableHeader header={'Status'} />
          </TableRow>
          {jobs.map((job, i) => {
            const { title, location, company, status } = job;
            return (
              <TableRow key={i}>
                <TableData data={title} />
                <TableData data={location} />
                <TableData data={company} />
                <TableData data={status} />
              </TableRow>
            );
          })}
        </Table>
      );
    }
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
