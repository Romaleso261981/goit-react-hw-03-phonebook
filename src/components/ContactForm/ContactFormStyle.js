import styled from 'styled-components';

export const List = styled.ul`
  padding: 10px;
  background-color: grey;
`;

export const ContactItem = styled.li`
  display: flex;
  gap: 20px;
`;

export const FormWrap = styled.form`
  margin: auto;
  display: grid;
  padding: 20px;
  width: 400px;
  height: auto;
  background-color: aquamarine;
`;


export const InputLabel = styled.label`
`;


export const InputSpan = styled.label`
font-size: medium;
margin-right: 20px;
`;
export const InputSpanName = styled.label`
margin-right: 35px;
`;

export const InputForm = styled.input`
margin-bottom: 10px;
width: 200px;
height: 20px;
border: 1px solid black;

`;
export const FormBtn = styled.button`
font-weight: 500;
margin: auto;
text-align: center;
padding: 5px;
width: 100px;
height: 30px;
border: 1px solid black;
border-radius: 5px;
background-color: white;
`;
