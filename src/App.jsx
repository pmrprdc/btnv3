// App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Projects from './components/Project'; // Make sure the path is correct based on your project structure
import Header from './components/Header';
import Footer from './components/Footer'



const AppDiv = styled.div`
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: 1px solid #007bff;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 1s ease-in-out;
  text-align: center;
  &:hover {
    background-color: darkblue;
  }

`;

const items = [
  "ghostRacr", "Beautiful Robot Written Letters", "Candle Like Focus Trainer", "vintage-royal-tees",
  "iterate88", "rejuvenate88", "disrupt88", "lazyoldmanfitnessnewsletters", "inbox 0", "omnipresentsocial",
  "buildthisnext.com",
  "nextsteppresents.com",
  "rejuvenate88.com"
  // Add other items here
];

function App() {
  // If you need to manage state for the projects, you can do it here in the App component
  // const [projects, setProjects] = useState(items);

  return (
    <>
      <Header />
      <AppDiv>
       
        <h3>You can vote on your favorite project below</h3>
        <h2>Projects QUEUE</h2>
        
        {/* Use ProjectsList component to render items */}
        <Projects projects={items} />
      </AppDiv>
      <Footer />
    </>
  );
}

export default App;
