import { Route, Switch } from "react-router-dom";
import NewScp from "./components/NewScp";
import ScpList from "./components/ScpList";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
    <Navbar />
    
    <Switch>
      <Route exact path="/SCP's">
        <ScpList />
      </Route>
      <Route exact path="/SCP's/new">
        <NewScp />
      </Route>
      <Route path="/edit/SCP/:id">
        <div>Edit</div>
      </Route>
      <Route path="/">
        <div>Homepage</div>
      </Route>
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
