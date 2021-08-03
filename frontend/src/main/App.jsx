import './App.css';

import Nav from '../components/templates/Nav';
import Main from '../components/templates/Main';
import Footer from '../components/templates/Footer';
import Header from '../components/templates/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
