import React from 'react';

function About() {
  return (
    <div className='aboutBox'>
      <div className="about mb-4 " id="about">
        <h5 className="mt-5 mb-2"> 🙂 About Me</h5>
        <p>
          In the last couple of years, I have been spending most of my time
          creating simple and complex web projects. <br /> In my spare time, I
          write programming articles on what new stuffs I learnt or on the
          problems I faced and how I solved them.
          <br /> And for my hobbies I enjoy playing games mostly🎮
        </p>
        <p>
          In this portfolio, you will find my Projects, Blog, and all the things
          that I want to brag about.
        </p>
      </div>
      <img
        src="https://miro.medium.com/fit/c/262/262/1*dmV5IPr9x7OZ6Lmr10MKLw.jpeg"
        className="rounded-pill"
        width="150"
        height="150"
        alt="myself"
      />
    </div>
  );
}

export default About;
