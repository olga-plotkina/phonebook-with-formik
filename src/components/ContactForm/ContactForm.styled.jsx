import styled from 'styled-components';

export const FormBox = styled.form`
  border: 1px solid black;
  width: 300px;
  height: 250px;
  padding: 15px;

  input {
    display: block;
    margin-bottom: 10px;
    margin-top: 5px;
  }

  button {
    border: 1px solid grey;
    background-color: white;
    border-radius: 4px;
    margin-top: 20px;
    cursor: pointer;
  }
`;
