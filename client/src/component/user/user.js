import React, { useState } from "react";
import Registration from "../auth/registration";

function User() {
  const [users, setUsers] = useState([]);

  const handleRegistration = (newUser) => {
    // Memeriksa apakah username sudah ada
    const existingUser = users.find((user) => user.username === newUser.username);

    if (existingUser) {
      alert("Username sudah digunakan. Silakan gunakan username lain.");
    } else {
      setUsers([...users, newUser]);
      alert("Registrasi berhasil!");
    }
  };

  return (
    <div>
      <Registration onRegister={handleRegistration} />
    </div>
  );
}

export default User;
