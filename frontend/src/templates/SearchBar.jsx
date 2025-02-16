import React from 'react';
import { MDBContainer, MDBInput, MDBCol, MDBRow } from 'mdb-react-ui-kit';

export const SearchBar = () => {
  return (
    <MDBContainer fluid className="d-flex flex-column justify-content-center align-items-center vh-100">
      <MDBRow className="w-100 d-flex justify-content-center">
        <MDBCol md="6" className="d-flex justify-content-center">
          <MDBInput label="Search" id="typeText" type="text" className="w-100" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
