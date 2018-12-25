import React from 'react';
import {StyledRow} from '../StyledComponents/UserJobList'
const TableRow = props => {
  return <StyledRow>{props.children}</StyledRow>
}

export default TableRow;