import React from 'react';

const Work = () => {
  const projects = [
    {
      title: 'Makeup Website ',
      description: 'A makeup website developed using HTML,CSS,Javascript which include validations and product descriptions, its created using basics for these languages to become more proficient with javascript ',
      image: 'project1.jpg',

    },
    {
      title: 'Job Portal ',
      description: 'This is Content Management System developed using PHP and Database system mainly Mysql. In this, users can apply for the jobs created or added by the admins along with specific categories for the IT jobs ',
      image: 'project2.jpg',
      link: 'https://github.com/Manseeratk/myproject',
    },

    {
      title: 'Rails Project On Makeup',
      description: 'Intro to Rails project which include Fetching products, its description and showing its data using open APIs',
      image: 'project3.jpg',
      link: 'https://github.com/Manseeratk/Intro_to_rails_project',
    }
    // Add more projects here...
  ];

  return (
    <section className="work">
      <h2>Work</h2>
      {projects.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title}
           style={{ maxWidth: '100%', height: 'auto' }}
           />
          <a href={project.link}>View Project</a>
        </div>
      ))}
    </section>
  );
};

export default Work;
