import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Work from './components/Work';
import Education from './components/Education';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <main>
        <Education />
        <Skills />
        <Projects />
        <Work />
      </main>
      <Footer />
    </div>
  );
}

export default App;
