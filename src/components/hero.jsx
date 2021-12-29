import React from 'react';
function Hero() {
  return (
    <div className="hero">

      <div className="control-svg">
        <div className="content">
          <div className="word-wrap">
            <h4 className="name">
              {' '}
              <span className="hello"> HELLO 👋 </span>I 'm Ovbije OnlyGod
            </h4>
            <h3 className="header_title text-wrapper letter ">
              A Creative Fullstack Web Developer, who loves making awesome web
              apps using Python & Javascript.{' '}
            </h3>
          </div>

          <div className="wrap_button">
            <a href="#works">
              <button
                type="button"
                className="in mybutton "
              >
                View My Works
              </button>
            </a>

            <a href="mailto:onlygodovbije@gmail.com">
              {' '}
              <button
                type="button "
                className="mybutton text-secondary"
              >
                Get in Touch
              </button>
            </a>
          </div>
        </div>
        <div className="me"></div>
      </div>

      <div className="give_space"></div>
    </div>
  );
}

export default Hero;
