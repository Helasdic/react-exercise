import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import apiUser from "../api/apiUser";

const Userall = () => {
  const [user, setUser] = useState([]);
  const getData = async () => {
    const result = await apiUser.findall();
    console.log(result.data);
    setUser(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Table striped bordered hover variant="light" className="responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((data, i) => {
            const { id, username, email, password, role } = data;
            return (
              <tr key={id}>
                <td>{i + 1}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{password}</td>
                <td>{role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Userall;
