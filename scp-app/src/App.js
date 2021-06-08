import Route from "Router"
import NewScp from "./components/newScp";
function App() {
  return (
    <div className="App">
    <Navbar />
    
    <Switch>
      <Route exact path="/SCP's">
        <ScpList />
      </Route>
      <Route exact path="/SCP's/new">
        <newScp />
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
