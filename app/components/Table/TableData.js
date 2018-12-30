import React from 'react';
import { StyledTableData } from '../StyledComponents/UserJobList';

const TableData = props => {
  if (props.date) {
    let date = props.data;
    date = date.substring(0, 10).split('-');
    date = `${date[1]}-${date[2]}-${date[0]}`;
    const formattedDate = new Date(date);
    return <StyledTableData>{formattedDate.toDateString()}</StyledTableData>;
  }

  return <StyledTableData>{props.data}</StyledTableData>;
};

export default TableData;
