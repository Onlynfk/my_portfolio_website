import React from 'react';
import NetFlix from '../assests/netflix.png';
import TrackIm from '../assests/health.svg';
import { Button } from '@chakra-ui/react';

function Works() {
  return (
    <div class="works" id="work">
      <h5 class="text-center mt-5 fw-bold"> 💻 My Works</h5>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-5 ">
        <div class="col ">
          <div class="card h-100 works__bg">
            <div class="card-body ">
              <h5 class="card-title ">NetFlix Clone</h5>
            </div>
            <a href="https://netflixclone-5ebe4.web.app/">
              <img src={NetFlix} alt="Netflix " />
            </a>

            <p class="card-text p-2 light ">
              A simple web app that displays latest trending movies on netfllix
              and plays their trailers
            </p>

            <div class="ml-3 mb-3">
              <a
                href="https://netflixclone-5ebe4.web.app/ "
                class="text-decoration-none m-2 text-secondary button_me  "
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div class="col ">
          <div class="card h-100 works__bg ">
            <div class="card-body ">
              <h5 class="card-title ">TrackImmunize</h5>
            </div>
            <a href="https://github.com/Onlynfk/trackimmunize">
              <img src={TrackIm} alt=" trackimmunize" />
            </a>
            <p class="card-text m-3 ">
              A unique and functional pediatrics immunization managment system .
            </p>
            <div class="ml-3 mb-3 ">
              <a
                href="https://github.com/Onlynfk/trackimmunize "
                class="text-decoration-none text-secondary m-2 button_me "
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div class="col ">
          <div class="card h-100 works__bg ">
            <div class="card-body ">
              <h5 class="card-title ">ListIt</h5>
            </div>
            <a href="https://github.com/Onlynfk/django_react_todo_app">
              <img src={NetFlix} alt="... " />
            </a>
            <p class="card-text m-3 ">
              {' '}
              A simple todo app web app, for storing todos and list
            </p>
            <div class="ml-3 mb-3 ">
              <a
                href="https://github.com/Onlynfk/django_react_todo_app "
                class="text-decoration-none m-2 text-secondary button_me"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div spacing={4} direction="row" align="center">
        <Button > View All Projects</Button>
      </div>
    </div>
  );
}

export default Works;
