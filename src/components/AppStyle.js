import styled from 'styled-components';

export const FilterInput = styled.input`
  display: block;
  width: 200px;
  height: 20px;
  border: 1px solid black;
  margin: auto;
  margin-top: 10px;
  background-color: whitesmoke;
`;


export const NotificationSpan = styled.div`
text-align: center;
color: black;
`;


// localStorage.setItem('contacts', JSON.stringify(contacts));

// getFilteredContacts = () => {
//     const savedSettings = localStorage.getItem('contacts');
//     let localContact = JSON.parse(savedSettings);
//     if (localContact === null) {
//       localContact = this.state;
//     }
//     return localContact;
//   };