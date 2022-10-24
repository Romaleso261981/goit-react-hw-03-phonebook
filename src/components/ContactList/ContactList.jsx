
import {
  ContactItem,
  List,
  SpanName,
  SpanNumber,
  ContactBtn,
} from './ContactList.styled';


const ContactList = ({ contactsData, deleteContact }) => {
  return (
    <List>
      {contactsData.map(contact => (
        <ContactItem key={contact.id}>
          <SpanName>{contact.name}</SpanName>
          <SpanNumber>{contact.number}</SpanNumber>
          <ContactBtn
            type="button"
            onClick={() => {
              deleteContact(contact.id);
            }}
          >
            Delete
          </ContactBtn>
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
