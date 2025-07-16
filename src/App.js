
import './App.css';
import Home from './Components/Home';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Hobbies from './Components/Hobbies';
import Contact from './Components/Contact';
import NavigationBar from './Components/NavigationBar';

function App() {
  const AppStyle = {
    backgroundColor: 'fff7ed',
    minHeight: '100vh',
    width: '100%',
  };

  const ContentStyle = {
    paddingLeft: '20px',
    paddingTop: '100px'
  };

  return (
    <div style={AppStyle}>
      <NavigationBar />
      <div style={ContentStyle}>
        <section id="home"><Home /></section>
        <section id="education" style={{ paddingTop: '100px', marginTop: '-100px'}}><Education /></section>
        <section id="experience" style={{ paddingTop: '100px', marginTop: '-100px'}}><Experience /></section>
        <section id="projects" style={{ paddingTop: '100px', marginTop: '-100px'}}><Projects /></section>
        <section id="skills" style={{ paddingTop: '100px', marginTop: '-100px'}}><Skills /></section>
        <section id="hobbies" style={{ paddingTop: '100px', marginTop: '-100px'}}><Hobbies /></section>
        <section id="contact" style={{ paddingTop: '100px', marginTop: '-100px'}}><Contact /></section>
      </div>
    </div>
  );
}

export default App;
