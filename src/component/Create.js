import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [idStudent, setIdStudent] = useState("");

  const postData = () => {
    axios.post(`https://63490a490b382d796c7c3096.mockapi.io/api/v1/fakeData`, {
      name,
      age,
      idStudent,
    });
  };

  return (
    <Box
      className="create-form"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Ten"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Tuoi"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="ma SV"
          onChange={(e) => setIdStudent(e.target.value)}
        />
      </div>
      <div>
        <Link to="/read">
          <Button onClick={postData} variant="contained" type="submit">
            Create
          </Button>
        </Link>
      </div>
    </Box>
  );
}
