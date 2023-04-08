import './App.scss';
import Navbar from './components/navbar/Navbar.component';

const App = ({ children }) => {
  return (
    <div className="App">
      <Navbar />
      {children}
    </div>
  );
}

export default App;
