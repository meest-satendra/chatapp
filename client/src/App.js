import React, { Fragment } from 'react';
import { BrowserRouter, Routes } from "react-router-dom";
import Routing from '../src/components/Routers'

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routing />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
