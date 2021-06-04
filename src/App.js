import './App.scss';
//import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
        <Header />

        <HomePage />

        <Footer />
    </div>
  );
}

export default App;
