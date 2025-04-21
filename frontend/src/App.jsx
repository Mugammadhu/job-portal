// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateJob from './pages/CreateJob';
import AboutUs from './pages/AboutUs';
import Testimonials from './pages/Testimonials';
import FindTalents from './pages/FindTalents';
import Footer from './components/Footer';
// import './styles/App.css';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/create-job" element={<CreateJob />} />
//         <Route path="/about-us" element={<AboutUs />} />
//         <Route path="/testimonials" element={<Testimonials />} />
//         <Route path="/find-talents" element={<FindTalents />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React from 'react'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
       <Router>
       <Nav/>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/create-job" element={<CreateJob />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/find-talents" element={<FindTalents />} />
       </Routes>
      <Footer />
     </Router>
    </div>
  )
}

export default App