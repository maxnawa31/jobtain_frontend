import React from 'react';
import { StyledHeader } from '../StyledComponents/UserJobList';

const TableHeader = props => {
  return <StyledHeader>{props.header}</StyledHeader>;
};

export default TableHeader;