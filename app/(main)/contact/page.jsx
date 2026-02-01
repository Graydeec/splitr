"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const ContactsPage = () => {
  const data = useQuery(api.contacts.getAllContacts);
  console.log(data);
  return <div>ContactsPage</div>;
};

export default ContactsPage;
