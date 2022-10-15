import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Update() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [idStudent, setIdStudent] = useState("");
  const [id, setID] = useState(null);
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name"));
    setAge(localStorage.getItem("Age"));
    setIdStudent(localStorage.getItem("IdStudent"));
  }, []);

  const updateAPIData = (e) => {
    axios.put(
      `https://63490a490b382d796c7c3096.mockapi.io/api/v1/fakeData/${id}`,
      {
        name,
        age,
        idStudent,
      }
    );
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Tuoi"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="ma SV"
          value={idStudent}
          onChange={(e) => setIdStudent(e.target.value)}
        />
      </div>
      <div>
        <Link to="/read">
          <Button onClick={updateAPIData} variant="contained" type="submit">
            Update
          </Button>
        </Link>
      </div>
    </Box>
  );
}
