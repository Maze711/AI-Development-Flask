import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export const UserTable = ({ users }) => {
  return (
    <div className="table-responsive">
      <MDBTable striped bordered hover className="mb-0">
        <MDBTableHead dark>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </MDBTableBody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-center">
              Total Users: {users.length}
            </td>
          </tr>
        </tfoot>
      </MDBTable>
    </div>
  );
};