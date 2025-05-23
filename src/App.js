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


import ScrollToTop from './functions/scrollToTop';
import ContactMe from './pages/ContactMe';

function App() {

  return (<>
    <div className="App">

        <Router>


          <Header />
          <div className='body-container'>
        
              
            <Routes>
              {/* <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/treatment" element={<TreatmentModels />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/resources" element={<Resources />} /> */}

              <Route path="/carolsite/" element={<Main />} />
              <Route path="/carolsite/about" element={<AboutMe />} />
              <Route path="/carolsite/treatment" element={<TreatmentModels />} />
              <Route path="/carolsite/supervision" element={<Supervision />} />
              <Route path="/carolsite/faq" element={<FAQ />} />
              <Route path="/carolsite/resources" element={<Resources />} />
              <Route path="/carolsite/contact" element={<ContactMe/>} />

            </Routes>
              
          </div>
          

        </Router>

    </div>
  </>
  );
}

export default App;
