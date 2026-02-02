import { useState } from "react";
import { nanoid } from "nanoid/non-secure";

export const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const inputData = (name, number) => {
    const nameUpper = name.toUpperCase();
    const numberUpper = number;

    const nameExist = contacts.some((contact) => {
      return contact.name.toUpperCase() === nameUpper;
    });

    const numberExist = contacts.some((contact) => {
      return contact.number === numberUpper;
    });

    if (nameExist) {
      alert(`${name} is already in contacts!`);
      return;
    }

    if (numberExist) {
      alert(`${numberUpper} is already exist!`);
      return;
    }

    const objectValue = {
      name: name,
      number: number,
      id: nanoid(),
    };

    setContacts((prev) => [...prev, objectValue]);
  };

  const deleteData = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  const filterData = (value) => {
    setFilter(value);
  };

  return {contacts, filter, inputData, deleteData, filterData};
};
