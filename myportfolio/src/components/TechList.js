import React from 'react';

const TechList = () => {
  const skills = ['I possess a diverse set of skills encompassing various aspects of web development. With a strong foundation in web technologies, I am proficient in creating visually appealing and responsive user interfaces using HTML and CSS. My backend expertise extends to PHP, enabling me to develop dynamic and data-driven web applications. I am adept at harnessing the power of React to build interactive and engaging frontends, providing users with seamless experiences. Furthermore, my proficiency in Ruby on Rails empowers me to create robust and feature-rich web applications efficiently. In terms of tools, I am well-versed in utilizing npm and yarn for package management, ensuring streamlined development workflows.'];
  const languages = ['HTML&CSS', 'PHP', 'React','Ruby on Rails'];
  const tools = ['npm (Node Package Manager), yarn', 'JavaScript Frameworks/Libraries', 'phpMyAdmin, MySQL','Git, GitHub, GitLab'];
  const resources = [
    {
      title: 'W3Schools',
      icon: 'resource1.png',

      link: ' https://www.w3schools.com/',
    },
    {
      title: 'PHP Manual',
      icon: 'resource2.png',

      link: ' https://www.php.net/manual/en/',
    },
    {
      title: 'React Official Documentation',
      icon: 'resource3.png',

      link: 'https://reactjs.org/docs/getting-started.html',
    },
    {
      title: 'npm (Node Package Manager) Documentation',
      icon: 'resource4.png',

      link: 'https://docs.npmjs.com/',
    },
    // Add more resources here...
  ];

  return (
    <div>
    <section className="tech-list">
      <section classname="skills-container">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      </section>
      <section className="languages-container">
      <h3>Languages/Frameworks</h3>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      </section>

      <section className="tools-container">
      <h3>Tools</h3>
      <ul>
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul>
      </section>

      <section className="resources-container">
      <h2>Resources</h2>
      {resources.map((resource, index) => (
        <div key={index} className="resource">
          <h3>{resource.title}</h3>
          <img src={resource.icon} alt={resource.title} style={{ maxWidth: '16%', height: 'auto' }} />
          <p>{resource.summary}</p>
          <a href={resource.link}>Learn More</a>
        </div>
      ))}
      </section>
    </section>
    </div>
  );


};


export default TechList;
