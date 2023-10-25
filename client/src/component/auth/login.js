import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {
  const { loginCbHandler } = props;
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const loginUser = async () => {
    try {
      let result = await axios({
        method: "POST",
        url: "http://localhost:3600/api/users/login",
        data: form,
      });
      const access_token = result.data.access_token;
      localStorage.setItem("access_token", access_token);

      loginCbHandler(true);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = () => {
    loginUser();
  };
  // const [form, setForm] = useState({
  //   email: "",
  //   password: "",
  // });

  // const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   try {
  //     event.preventDefault();
  //     const result = await apiUser.login(form);
  //     console.log(result.data.message);
  //     navigate("/");
  //   } catch (error) {
  //     console.error(error.response.data.message);
  //   }
  // };

  return (
    <div className="Login">
      <h2 className="text-uppercase text-center">login</h2>
      <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>

          <Form.Control autoFocus type="email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        </Form.Group>

        <Button onClick={handleSubmit} block size="lg" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
