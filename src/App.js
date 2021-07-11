import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HotMarket from "./pages/HotMarket";
import TopGainersLosers from "./pages/TopGainersLosers";
import Screener from "./pages/Screener";
import StockDetails from "./pages/StockDetails";
import AboutUs from "./pages/AboutUs";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(false);


  return (
    <Router>
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />

      <Switch>
        <Route path="/hotMarket" >
          <HotMarket />
        </Route>
        <Route path="/topGainersLosers" >
          <TopGainersLosers showSidebar={showSidebar} />
        </Route>
        <Route path="/screener" >
          <Screener showSidebar={showSidebar}/>
        </Route>
        <Route path="/stockDetails" >
          <StockDetails />
        </Route>
        <Route path="/aboutUs" >
          <AboutUs />
        </Route>
        <Route path="/" >
          <LandingPage showSidebar={showSidebar} />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
