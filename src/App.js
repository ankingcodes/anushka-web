import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import Heading from './Heading';
import ProfilePic from './ProfilePic';
import Social from './Social';
import About from './AboutMe';

function App() {
  return (
    <div className="App">
      <Container>
        <ProfilePic/>
        <Heading/>
        <About/>
        <Social/>
      </Container>
    </div>
  );
}

export default App;
