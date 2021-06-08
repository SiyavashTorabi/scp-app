import Route from "Router"
function App() {
  return (
    <div className="App">
    <Navbar />
    
    <Switch>
      <Route exact path="/SCP's">
        <SuperHeroList />
      </Route>
      <Route exact path="/SCP's/new">
        <NewSuperHero />
      </Route>
      <Route path="/SCP/:id">
        <SuperHeroDetail />
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
