import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Sailing from './pages/experience/Sailing';
import Photography from './pages/experience/Photography';
import Software from './pages/experience/SoftwareDevlopment';
import Footer from './components/Footer';
import ProjectItem from './components/ProjectItem';
import ProjectDisplay from './pages/ProjectDisplay';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/experience' element={<Experience />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/projects/:id' element={<ProjectDisplay />}/>
          <Route path='/experience/sailing' element={<Sailing />}/>
          <Route  path='/experience/photography' element={<Photography />}/>
          <Route  path='/experience/software' element={<Software/>}/>
        </Routes> 
        <Footer /> 
      </Router>
    </div>
  );
}

export default App;
