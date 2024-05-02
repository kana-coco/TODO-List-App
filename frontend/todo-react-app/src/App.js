import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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

        <Switch>
          <Route path="/">
            <TaskMainList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
