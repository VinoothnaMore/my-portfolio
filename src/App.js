
import './App.css';
import Home from './Components/Home';
import NavigationBar from './Components/NavigationBar';

function App() {
  const AppStyle = {
    backgroundColor: 'fff7ed',
    minHeight: '100vh',
    width: '100%',
  };

  const ContentStyle = {
    paddingLeft: '20px'
  };

  return (
    <div style={AppStyle}>
      <NavigationBar />
      <div style={ContentStyle}>
        <section id="home"><Home /></section>
      </div>
    </div>
  );
}

export default App;
