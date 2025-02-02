//Package Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router';



//styles
import './App.css';

//Components
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BodySection from './components/BodySection';

//Pages
import Main from './pages/Main';
import AboutMe from './pages/AboutMe';
import TreatmentModels from './pages/TreatmentModels';
import Supervision from './pages/Supervision';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';

function App() {

  

  return (<>
    <div className="App">
      <div className='left-column'></div>
      <div className='middle-column'>
        <Router>


          <Header />
          <div className='body-container'>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/treatment" element={<TreatmentModels />} />
              <Route path="supervision" element={<Supervision />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>


          </div>
          <Footer />

        </Router>
      </div>
      <div className='right-column'>
        <Contact />
      </div>
    </div>
  </>
  );
}

export default App;
