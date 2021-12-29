import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Hero from './components/hero';
import Simple from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Works from './components/Works';
import Blog from './components/Blog';
import Footer from './components/Footer';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Simple/>

      <Box p={4} spacing={5}>
      <Hero/>
      <Skills/>
      <About/>
      <Works/>
      <Blog/>
      </Box>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
