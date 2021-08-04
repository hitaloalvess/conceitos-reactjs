import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter as Router} from 'react-router-dom'

import Footer from '../components/templates/Footer';
import Header from '../components/templates/Header';
import Routes from '../routes/Routes';

import './App.css';
function App() {
  return (
    <div className="app">
      <Router>
          <Header />
          <Routes />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
