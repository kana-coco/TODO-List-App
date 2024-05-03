import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TaskMainList from "./pages/TaskMainList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <routes>
          <Route path="/">
            <TaskMainList />
          </Route>
        </routes>
      </div>
    </Router>
  );
};

export default App;
