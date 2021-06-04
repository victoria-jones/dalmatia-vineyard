import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' />
          <Route path='/events' />
          <Route path='/wine_experience' />
          <Route path='/contact' />
        </Switch>

        <Footer />
    </div>
  );
}

export default App;
