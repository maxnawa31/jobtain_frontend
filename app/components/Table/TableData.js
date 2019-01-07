import React from 'react';
import { Link } from 'react-router-dom';
import { StyledTableData } from '../StyledComponents/UserJobList';
import { getId } from '../../services/token';
const TableData = props => {
  if (props.date) {
    let date = props.data;
    date = date.substring(0, 10).split('-');
    date = `${date[1]}-${date[2]}-${date[0]}`;
    const formattedDate = new Date(date);
    return <StyledTableData>{formattedDate.toDateString()}</StyledTableData>;
  } else if (props.edit) {
    const id = getId();
    const { postId } = props;
    return (
      <StyledTableData>
        <Link to={`/users/${id}/jobs/${postId}/edit`}>Edit</Link>
      </StyledTableData>
    );
  }

  return <StyledTableData>{props.data}</StyledTableData>;
};

export default TableData;
