import React, { useState } from "react";
import apiUser from "../api/apiUser";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Registration = (props) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    try {
      e.preventDefault();
      const result = await apiUser.create(form);
      console.log(result.data);
      navigate("/login");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div>
      <h2 className="text-uppercase text-center">registrasi</h2>
      <h4 className="text-uppercase text-center">Silahkan Isi Data Anda</h4>
      <Container>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" onChange={(e) => setForm({ ...form, username: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" onChange={(e) => setForm({ ...form, role: e.target.value })}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Control>
            </Form.Group>
            <Button onClick={handleRegistration} type="submit">
              Daftar
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
