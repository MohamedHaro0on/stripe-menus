import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <>
          <Header />
          <Route component={HomePage} />
        </>
      </Switch>
    </Router>
  );
}

export default App;