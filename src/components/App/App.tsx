import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PersonPage from "../../pages/PersonPage";

import People from '../People';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#1c1e22', }} >
        <Switch>
          <Route path="/" exact>
            <People />
          </Route>
          <Route path="/people/:id" exact component={PersonPage} />
        </Switch>
      </div >
    </Router>

  );
}

export default App;
