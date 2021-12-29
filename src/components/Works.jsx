import React from 'react';
import NetFlix from '../assests/netflix.png';
import TrackIm from '../assests/health.svg';
import Abba from '../assests/abbas.png';

import { Button } from '@chakra-ui/react';

function Works() {
  return (
    <div class="works" id="works">
      <h5 class="text-center mt-5 fw-bold"> 💻 My Works</h5>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-5 ">
        <div class="col ">
          <div class="card h-100 works__bg">
            <div class="card-body ">
              <h5 class="card-title ">Abba's Clan</h5>
            </div>
            <a href="http://abbasclan.com ">
              <img src={Abba} alt="Abba's Clan " />
            </a>

            <p class="card-text p-2 light ">
              Abba's Clan is a Writers and Readers Platform for writing and sharing short stories.
            </p>

            <div class="ml-3 mb-3">
              <a
                href="http://abbasclan.com "
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
              A unique and functional pediatrics immunization managment system for tracking immunization records of children in Nigeria .
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
              <h5 class="card-title ">NetFlix Clone</h5>
            </div>
            <a href="https://netflixclone-5ebe4.web.app/">
              <img src={NetFlix} alt="... " />
            </a>
            <p class="card-text m-3  ">
              {' '}
              A simple Netfilx model clone web app made with Reactjs,
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
        <Button> View All Projects</Button>
      </div>
    </div>
  );
}

export default Works;
