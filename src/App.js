import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import NotFound from './pages/not-found/not-found.component';

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
          <Route component={NotFound} />
        </Switch>

        <Footer />
    </div>
  );
}

export default App;
