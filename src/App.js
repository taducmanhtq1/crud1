import "./App.css";
import Create from "./component/Create";
import Read from "./component/Read";
import Update from "./component/Update";

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <nav>
        <ul>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/read">Read</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
