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
        <div>
          <img className="scpimg" src="./scp.jpg" alt="scp-logo" />
            <h2>welcome to site 15,& our Archive of captured/contained Anomalies. </h2>
          </div>
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
          <div>
          <img src="./scp.jpg" alt="scp-logo" />
            <h2> Homepage </h2>
            <h4>Welcome to SCP foundation where we Secure-Contain-Protect Anomalys in order to keep humanity safe & use this app in order to keep records of captured Anomalys! </h4>
            <h5>we fight in dark in ordr to keep humanity in light, any refrence/mention to/of this Facility by any party (no exaption) to the Outside world is to be TERMINATED!</h5>
            
            </div>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
