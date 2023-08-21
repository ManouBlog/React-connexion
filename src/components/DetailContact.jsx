import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const DetailContact = () => {
  const data = [
    {
      id: 1,
      name: "Carlos Santana",
      email: "carlos.santana@dev.education",
      phone: "415-307-3112",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@dev.education",
      phone: "223-344-5122",
    },
    {
      id: 3,
      name: "Alexis Nelson",
      email: "alexis.nelson@dev.education",
      phone: "664-291-4477",
    },
  ];
  const {contactId} = useParams();
  const [contacts, setContacts] = useState(data);
  
   const findeElement = contacts.filter((contact) => contact.id === Number(contactId));
  const renderSingleContact = (item) => (
    <>
    {item.map((item)=>(
        <div key={item.id}>
           <p>{item.name}</p>
           <p>{item.phone}</p>
        </div>
        
    ))}
    </>
    )
  return (
    <div>
      <h1>DetailContact</h1>
     {renderSingleContact(findeElement)}
    </div>
  );
};
export default DetailContact;
