import './App.scss';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import EventsPage from './pages/eventspage/eventspage.component';
import WineExperiencePage from './pages/wine-experiencepage/wine-experiencepage.component';
import ContactPage from './pages/contactpage/contactpage.component';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import NotFound from './pages/not-found/not-found.component';

function App() {
  return (
    <div className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/about' component={AboutPage}/>
          <Route path='/events' component={EventsPage}/>
          <Route path='/wine_experience' component={WineExperiencePage}/>
          <Route path='/contact' component={ContactPage}/>
          <Route component={NotFound} />
        </Switch>

        <Footer />
    </div>
  );
}

export default App;
