import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// import Sort from "./Sort";
import Tree from "./Tree";
import ReverseArrayComponent from './ReverseArray';

const App = () => {
  return (
    <Router>
      <div>        

        <div className="about-u">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatibus, voluptates, nesciunt, quod voluptate quae quia quos a 
            voluptatum quibusdam quae quia quos a voluptatum quibusdam quae quia
            quibusdam quae quia quos a voluptatum quibusdam quae quia quos a
            voluptatum quibusdam quae quia quos a voluptatum quibusdam quae quia
            quos a voluptatum quibusdam quae quia quos a voluptatum quibusdam
            quae quia quos a voluptatum quibusdam quae quia quos a voluptatum
          </p>
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/sort">Sort</Link>
            </li>
            <li>
              <Link to="/tree">Tree</Link>
            </li>
          </ul>
        </nav>  
        <Switch>
          <Route path="/sort">
            <Sort />
          </Route>
          <Route>
            <Tree />
          </Route>
        </Switch> */}

        <div>
          <ReverseArrayComponent />
        </div>

      </div>
    </Router>
  );
};

render(<App />, document.getElementById("app"));
