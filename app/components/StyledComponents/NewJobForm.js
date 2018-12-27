import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  // border: 1px solid black;
`;

export const StyledInput = styled.input`
  width: 30%;
  height: 30px;
  border: 1px solid black;
  margin-left: 2%;
  margin-top: 2%;
  outline: none;
`;

export const StyledInputButton = styled.button`
  margin-left: 2%;
  margin-top: 2%;
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid black;
  background: white;
  cursor: pointer;
  width: 10%;
`;
