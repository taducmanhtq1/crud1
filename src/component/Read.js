import * as React from "react";

import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://63490a490b382d796c7c3096.mockapi.io/api/v1/fakeData`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  const setData = (data) => {
    let { id, name, age, idStudent } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("IdStudent", idStudent);
  };
  const getData = () => {
    axios
      .get(`https://63490a490b382d796c7c3096.mockapi.io/api/v1/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(
        `https://63490a490b382d796c7c3096.mockapi.io/api/v1/fakeData/${id}`
      )
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {APIData.map((data) => {
              return (
                <TableRow>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.age}</TableCell>
                  <TableCell>{data.idStudent}</TableCell>
                  <TableCell>
                    <Link to="/update">
                      <Button onClick={() => setData(data)}>update</Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Read;
