import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
     <section>
       <header>
         <Nav></Nav>
       </header>
       <main>
         <Hero></Hero>
         <About></About>
       </main>
       <Footer></Footer>
     </section>
    
    
  );
}

export default App;
