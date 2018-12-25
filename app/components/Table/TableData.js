import React from 'react';
import { StyledTableData } from '../StyledComponents/UserJobList';

const TableData = props => {
  return <StyledTableData>{props.data}</StyledTableData>
}

export default TableData;