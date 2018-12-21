import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 60vh;
  width: 30%;
  border: 1px solid rgb(234,236,237);
  margin: 0 auto;
  margin-top: 10%;
`;

export const LoginInput = styled.input`
  border: 1px solid rgb(157,163,166);
  height: 10%;
  width: 70%;
  outline: none;
  margin: 0 auto;
  margin-top: 3%;
  border-radius: 5px;
  padding-left: 3%;
`
export const LoginButton = styled.button`
  height: 10%;
  width: 70%;
  background-color: ${props => props.login ? "#0070ba" : "rgb(225,231,235)"};
  color: ${props => props.login ? 'white' : 'black'};
  margin: 0 auto;
  margin-top:${props => props.login ? "5%" : "none"};
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`

export const LoginSpan = styled.span`
  margin: 0 auto;
  margin-top: 2%;
`
export const LoginH1 = styled.h1`
  text-align: center;
  font-weight: lighter;
  margin-left: 3%;
  margin-right: 3%;
`