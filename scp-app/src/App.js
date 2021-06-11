import { Route, Switch } from "react-router-dom";
import NewScp from "./components/NewScp";
import ScpList from "./components/ScpList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScpDetail from "./components/ScpDetail";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/SCPs">
          <ScpList />
        </Route>
        <Route exact path="/SCP/:id">
          <ScpDetail />
        </Route>
        <Route exact path="/SCPs/new">
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
