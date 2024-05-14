import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
// import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login_new/Login";
import { useState } from "react";
import CreatTransection from "./pages/CreatTransection/CreatTransection";

function App() {
  const [globalProvider, setGlobalProvider] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <switch>
          <Route path="/" exact>
            <Dashboard globalProvider={globalProvider}/>
          </Route>
          <Route path="/CreatTransection" exact>
            <CreatTransection globalProvider={globalProvider}/>
          </Route>
          <Route path="/pkg/:hash" exact>
            <ProductDetails />
          </Route>
          <Route path="/login"  exact>
            <Login setGlobalProvider={setGlobalProvider}/>
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
