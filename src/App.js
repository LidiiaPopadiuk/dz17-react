import { useState } from "react";
import { Form } from "./components/Form";
import { Contacts } from "./components/Contacts";
import { Filter } from "./components/Filter";
// import { nanoid } from "nanoid";
import styled from "styled-components";
import { useContacts } from "./hooks/useContacts";

const Title = styled.h2`
  margin-bottom: 20px;
  margin-top: 0;
`;

const Div = styled.div`
  margin: 0 auto;
  width: 650px;
  background-color: #fff1ec;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App = () => {
  const {contacts, filter, inputData, deleteData, filterData} = useContacts()

  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");


  // const inputData = (name, number) => {
  //   const nameUpper = name.toUpperCase();
  //   const numberUpper = number;

  //   const nameExist = contacts.some((contact) => {
  //     return contact.name.toUpperCase() === nameUpper;
  //   });

  //   const numberExist = contacts.some((contact) => {
  //     return contact.number === numberUpper;
  //   });

  //   if (nameExist) {
  //     alert(`${name} is already in contacts!`);
  //     return;
  //   }

  //   if (numberExist) {
  //     alert(`${numberUpper} is already exist!`);
  //     return;
  //   }

  //   const objectValue = {
  //     name: name,
  //     number: number,
  //     id: nanoid(),
  //   };

  //   setContacts((prev) => [...prev, objectValue]);

  // };

  // const deleteData = (id) => {
  //   setContacts((prev) => prev.filter((contact) => contact.id !== id));
  // };

  // const filterData = (value) => {
  //   setFilter(value)
  // };

  return (
    <Div className="App">
      <Title>
        Phonebook |{" "}
        <span style={{ backgroundColor: "pink", borderRadius: "10px" }}>
          Зроблено з любов'ю!
        </span>
      </Title>
      <Form inputData={inputData} />
      <Filter filterData={filterData} />
      <Contacts contacts={contacts} filter={filter} deleteData={deleteData} />
    </Div>
  );
};

export default App;
