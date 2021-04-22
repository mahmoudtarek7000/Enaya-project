import "./assets/scss/App.scss";
import "fontsource-roboto";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import About_us from "./components/About_us";
import Contact_us from "./components/Contact_us";
import BookDoctor from "./components/Book/BookDoctor";
import ReserveRoom from "./components/Book/ReserveRoom";
import Signhospital from "./components/sign_up/Signhospital";
// import Signpatient from './components/sign_up/Signpatient';
import Loghospital from "./components/log_in/Loghospital";
// import logpatient from './components/log_in/logpatient';
import HospitalProfile from "./components/HospitalProfile/HospitalProfile";
import PatientProfile from "./components/HospitalProfile/PatientProfile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import Search_results from "./components/Search_results/Search_results";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DoctorPrivacy from "./components/DoctorPrivacy";
import CoronaVirus from "./components/coronavirus/CoronaVirus";
import { Search } from "@material-ui/icons";
import SearchBox from "./components/Search/SearchBox";
import BookDoc from "./components/Book/BookDoc";

function App() {
  const { user, userType } = useContext(AuthContext);
  return (
    <div className="App d-flex flex-column justify-content-between">
      <Router>
        <MyNav />
        {/* <HospitalProfile/> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About_us}></Route>
          <Route path="/contact" component={Contact_us}></Route>
          <Route path="/bookdoctor/:id" component={BookDoctor}></Route>
          <Route path="/reserveroom" component={ReserveRoom}></Route>
          <Route path="/terms" component={TermsOfUse}></Route>
          <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
          <Route path="/drprivacypolicy" component={DoctorPrivacy}></Route>
          <Route path="/coronavirus" component={CoronaVirus} ></Route>
          <Route path="bookdoc" component={BookDoc}></Route>
          <Route
            path="/signhospital"
            render={() => {
              return user ? <Redirect to="/" /> : <Signhospital />;
            }}
          ></Route>
          {/* <Route path="/signpateint" component={Signpatient}></Route> */}
          <Route
            path="/loghospital"
            render={() => {
              return user ? <Redirect to="/" /> : <Loghospital />;
            }}
          ></Route>
          {/* <Route path="/logpateint" component={logpatient}></Route> */}
          <Route path="/searchresults/:searchType/:special/:city/:name" component={Search_results}></Route>
          <Route path="/:id">
            {userType == "hospitals" ? <HospitalProfile /> : <PatientProfile />}
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
