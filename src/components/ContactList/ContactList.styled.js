import styled from 'styled-components';

export const List = styled.ul`
  width: 600px;
  display: grid;
  gap: 10px;
  margin: auto;
  padding: 10px;
`;

export const ContactItem = styled.li`
border: 1px solid black;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: greenyellow;
`;

export const SpanName = styled.span`
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 500;
  margin-left: 50px;
`;

export const SpanNumber = styled.span`
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 500;
  margin-left: auto;
  margin-right: 30px;
`;

export const ContactBtn = styled.button`
  margin-right: 20px;
  font-weight: 500;
  text-align: center;
  padding: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
`;
