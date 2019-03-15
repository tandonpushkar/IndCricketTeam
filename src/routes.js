import React from "react";
import Layout from './HOC/Layout.js';
import Home from './Components/Home/Index.js';

import {Switch , Route} from 'react-router-dom';

const Routes = (props) => {
  return(
    <Layout>
      <Switch>
          <Route exact component = {Home} path="/"/>
      </Switch>
    </Layout>
  );
}

export default Routes;
