import React from 'react';
import { Button } from '@chakra-ui/react';

function Blog() {
  return (
    <div class="blog container  " id="myblog ">
      <h5 class="text-center mt-3 mb-4  "> ✍🏼 Blog</h5>
      <a
        href="https://medium.com/codex/how-to-integrate-react-and-django-framework-in-a-simple-way-c8b90f3ce945 "
        class=" text-decoration-none "
      >
        <div class="create text-white mb-3 ">
          <h5>
            How to Integrate React and Django framework, in a simpler way 😉.
          </h5>
          <p>#django #react #python #programing</p>
          <div class="icon ">
            <span>
              {' '}
              <i class="fas fa-eye "></i> 5.6k
            </span>
            <span>
              {' '}
              <i class="fas fa-thumbs-up "></i> 37
            </span>
            <span>
              <i class="fas fa-comments mr-2 "></i> 2
            </span>
          </div>
        </div>
      </a>

      <a
        href="https://onlygod.medium.com/using-foreign-keys-in-django-models-826a03b902e7 "
        class=" text-decoration-none "
      >
        <div class="create text-white mb-3 ">
          <h5>How to Use Foreign Keys in Django Models 🎡👀.</h5>
          <p>#django #python #programing </p>
          <div class="icon ">
            <span>
              {' '}
              <i class="fas fa-eye "></i> 2.4k
            </span>
            <span>
              {' '}
              <i class="fas fa-thumbs-up "></i> 3{' '}
            </span>
            <span>
              <i class="fas fa-comments mr-2 "></i>{' '}
            </span>
          </div>
        </div>
      </a>

      <a
        href="https://onlygod.medium.com/writing-your-first-django-app-535fabe4cb70"
        target="_blank"
        class=" text-decoration-none "
      >
        <div class="create text-white mb-3 ">
          <h5>Writing your First Django App (The Beginner’s Guide) 😎.</h5>
          <p>#django #python #programing </p>
          <div class="icon ">
            <span>
              {' '}
              <i class="fas fa-eye "></i> 145
            </span>
            <span>
              {' '}
              <i class="fas fa-thumbs-up "></i> 1
            </span>
            <span>
              <i class="fas fa-comments mr-2 "></i>{' '}
            </span>
          </div>
        </div>
      </a>

      <div class="articles text-center ">
        <a href="https://onlygod.medium.com/ ">
          <Button class="mybutton mb-5 text-secondary ">View All Articles on Medium</Button>
        </a>
      </div>
    </div>
  );
}

export default Blog;
