import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ConversationDetails from "./components/ConversationDetails";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

// components

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/conversations/:id">
              <ConversationDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
