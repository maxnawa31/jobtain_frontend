import React from 'react';
import { StyledHeader, StyledSortButton } from '../StyledComponents/UserJobList';

const TableHeader = props => {
  return <StyledHeader><StyledSortButton onClick={props.sort}>{props.header}</StyledSortButton></StyledHeader>;
};

export default TableHeader;