import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./../pages/Home";
import Pdf from "./../pages/Pdf";
import Excel from "./../pages/Excel";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:dados" component={Pdf} />
        <Route path="/excel" component={Excel} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
