import './assets/scss/App.scss';
import 'fontsource-roboto';
import MyNav from './components/MyNav';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import About_us from './components/About_us';
import Contact_us from './components/Contact_us';
import BookDoctor from './components/Book/BookDoctor';
import ReserveRoom from './components/Book/ReserveRoom';
import Signhospital from './components/sign_up/Signhospital';
import Signpatient from './components/sign_up/Signpatient';
import loghospital from './components/log_in/loghospital';
import logpatient from './components/log_in/logpatient';
import HospitalProfile from './components/HospitalProfile/HospitalProfile';


function App() {
  return (
    <div className="App">

      <Router>
        <MyNav />
        {/* <HospitalProfile/> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About_us}></Route>
          <Route path="/contact" component={Contact_us}></Route>
          <Route path="/bookdoctor" component={BookDoctor}></Route>
          <Route path="/reserveroom" component={ReserveRoom}></Route>
          <Route path="/signhospital" component={Signhospital}></Route>
          <Route path="/signpateint" component={Signpatient}></Route>
          <Route path="/loghospital" component={loghospital}></Route>
          <Route path="/logpateint" component={logpatient}></Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
