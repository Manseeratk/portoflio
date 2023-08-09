import React from 'react';
import './styles.css';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import TechList from './components/TechList';
import DeveloperSetup from './components/DeveloperSetup';

const App = () => {
  return (
    <div className="portfolio">

      <BasicInfo />
      <Work id="work" />
      <TechList id="tech-list" />
      <DeveloperSetup id="developer-setup" />
    </div>
  );
};

export default App;
