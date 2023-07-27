import React from 'react';

const About = ({ blogLogo, aboutText }) => {
  return (
    <aside>
      <img src={blogLogo || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{aboutText}</p>
    </aside>
  );
};

export default About;
