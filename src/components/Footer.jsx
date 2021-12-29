import React from 'react';
import Logo from '../assests/logo.svg';

function Footer() {
  return (
    <div>
      <div class="connect dark_bg p-5 text-center text-white ">
        <a href="mailto:onlygodovbije@gmail.com ">
          {' '}
          <button class="mybutton in ">Want to Work with Me</button>{' '}
        </a>

        <small> I'm currently avialable </small>
      </div>
      <div class="footer__first dark_bg mb-5 ">
        <div class="foot mb-3 ">
          <a href="# ">
            <h6 class="text-secondary ">
              Scroll to Top <i class="fas fa-arrow-up "></i>
            </h6>
          </a>
          <a href="#worka ">Projects</a>
          <a href="#blog ">Blog</a>
          <a href="#about ">About Me</a>
        </div>
        <div class="foot__side mb-5 ">
          <a href="https://drive.google.com/file/d/1AwidT2b146nt0snjxFfq7Gnd-Bv0O_cU/view?usp=sharing">
            <button class="rbutton mb-3 ">
              {' '}
              View Resume <i class="far fa-file-alt "></i>
            </button>
          </a>
          <div class="connect__me ">
            <a href="https://www.instagram.com/onlyg.codes/ ">
              {' '}
              <i class="fab fa-instagram "> </i>
            </a>
            <a href="https://github.com/Onlynfk ">
              <i class="fab fa-github "></i>
            </a>
            <a href="https://www.linkedin.com/in/onlygod-o-b64084166/ ">
              <i class="fab fa-linkedin "></i>
            </a>
            <a href="https://onlygod.medium.com/ ">
              <i class="fab fa-medium "></i>
            </a>
          </div>
        </div>
      </div>
      <footer class="container mb-5 mt-4 " id="footer ">
        <div class="row text-center  ">
          <p id="logo" className="text-center mb-2">
            OG
          </p>
          <div spacing={4} direction="row" align="center">
            <a href="#">
              <img
                src={Logo}
                class="mb-3 "
                width="50px "
                height="50px "
                alt=" "
              />
            </a>
          </div>
          <p id="copyright " class="text-secondary ">
            &copy; OnlyGod Ovbije - 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
