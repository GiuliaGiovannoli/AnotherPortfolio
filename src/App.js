import React from 'react';

import './App.css';

import TopBar from "./components/topBar";
import AboutMe from './components/aboutMe';
import ProjectGrid from './components/projectGrid';
import Footer from './components/footer';


export default function App() {

  const steps = [
    {
      index: 0,
      stepName: 'Who am I', 
      link: "card"
    }, 
    {
      index: 1,
      stepName: 'What I do', 
      link: "grid"
    }, 
    {
      index: 2,
      stepName: 'Where to find me', 
      link: "contacts"
    }, 
];

  return (
    <>
      <TopBar steps={steps} />
        <div>
          <AboutMe id="card" />
          <ProjectGrid id="grid" />
          <Footer id="contacts" />
        </div>
    </>
  );
}
