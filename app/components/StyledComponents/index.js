import styled from 'styled-components';

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 40%;
  margin: 0 auto;
  margin-top: 5%;
`;

export const SignupInput = styled.input`
  border: 1px solid rgb(157, 163, 166);
  width: 75%;
  height: 10%;
  margin: 0 auto;
  margin-top: 15px;
  border-radius: 5px;
  padding-left: 5px;
  outline: none;
`;
export const SignupButton = styled.button`
  cursor: pointer;
  border-radius: 1.5rem;
  line-height: 1.5rem;
  min-width: 6rem;
  text-align: center;
  text-decoration: none;
  border: 0.0625rem solid #0070ba;
  width: 20px;
  height: 40px;
  margin: 0 auto;
  margin-top: 3%;
`;

export const SignupH1 = styled.h1`
  color: black;
  text-align: center;
  font-weight: lighter;
  margin-top: 5%;
`;
export const SignupContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SignupSidePanel = styled.div`
  background-color: rgb(245, 247, 250);
  height: 100vh;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

