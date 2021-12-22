import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import StartupDetails from './components/StartupDetails/StartupDetails';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
          <br/><br/><br/><br/>
        <Routes>
          <Route path="/" exact element={() => <Navigate to="startups" />} />
          <Route path="/startups" exact element={<Home />} />
          <Route path="/startups/search" exact element={<Home />} />
          <Route path="/startups/:id" element={<StartupDetails />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
