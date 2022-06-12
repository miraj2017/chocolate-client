import { Alert, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleAdminForm = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json)
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.targetDefault();
  };
  const handleAdminOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <Typography>Make an Admin</Typography>
      <form onSubmit={handleAdminForm}>
        <TextField
          onBlur={handleAdminOnBlur}
          type="email"
          label="Email"
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin Created Successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
