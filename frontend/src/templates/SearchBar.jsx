import React, { useState, useEffect } from "react";
import { MDBContainer, MDBInput, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { UserTable } from "./UserList";

export const SearchBar = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/get_users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <MDBContainer fluid className="d-flex flex-column justify-content-center align-items-center vh-100">
      <MDBRow className="w-100 d-flex justify-content-center">
        <MDBCol md="6" className="d-flex justify-content-center">
          <MDBInput label="Search" id="typeText" type="text" className="w-100" />
        </MDBCol>
      </MDBRow>
      <UserTable users={users} />
    </MDBContainer>
  );
};