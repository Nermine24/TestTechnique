import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {AddPredictionContainer} from "./containers/add-prediction.container";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AddPredictionContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
