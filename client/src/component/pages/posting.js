import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import apiNews from "../api/apiNews";
import { useNavigate } from "react-router-dom";

const Posting = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
  });

  const navigate = useNavigate();

  const handlePosting = async (e) => {
    try {
      e.preventDefault();
      const result = await apiNews.create(form);
      console.log(result.data);
      navigate("/");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  return (
    <div>
      <h2 className="text-uppercase text-center">posting</h2>
      <div className="text-center">
        <Button variant="danger">Add Posting</Button>
      </div>
      <Form>
        <Form.Group>
          <Form.Label>title</Form.Label>
          <Form.Control type="text" onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>content</Form.Label>
          <Form.Control type="text" onChange={(e) => setForm({ ...form, content: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>author</Form.Label>
          <Form.Control type="password" onChange={(e) => setForm({ ...form, author: e.target.value })} />
        </Form.Group>
        <Form.Group>
          <Form.Label>category</Form.Label>
          <Form.Control as="select" onChange={(e) => setForm({ ...form, category: e.target.value })}>
            <option value="politik">Politik</option>
            <option value="Budaya">Budaya</option>
          </Form.Control>
        </Form.Group>
        <div className="text-center">
          <Button onClick={handlePosting} type="submit">
            Tambah Posting
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Posting;
