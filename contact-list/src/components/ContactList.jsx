import { useState } from "react";
import {useEffect} from 'react';
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }