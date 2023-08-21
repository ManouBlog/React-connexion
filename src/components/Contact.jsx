import { Form } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
const Contact = () => {
  const contact = {
    first: "Adjobi",
    last: "Pierre",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };
  const navigate = useNavigate()
  const deconnecteUser = ()=>{
    navigate(-1)
  }

  return (
    <div id="contact">
      <button onClick={deconnecteUser} style={{background:'red',cursor:'pointer'}}>Deconnexion</button>
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>contact : {contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
            
                event.preventDefault();
           
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  console.log(favorite)
  return (
    <Form method="post">
      
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

export default Contact;
