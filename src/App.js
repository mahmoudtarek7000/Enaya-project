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
import Loghospital from "./components/log_in/Loghospital";
import HospitalProfile from "./components/HospitalProfile/HospitalProfile";
import PatientProfile from "./components/HospitalProfile/PatientProfile";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthProvider";
import Search_results from "./components/Search_results/Search_results";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DoctorPrivacy from "./components/DoctorPrivacy";
import CoronaVirus from "./components/coronavirus/CoronaVirus";
import { Search } from "@material-ui/icons";
import SearchBox from "./components/Search/SearchBox";
import BookDoc from "./components/Book/BookDoc";
import HospitalAppointments from "./components/Book/HospitalAppointments";

function App() {
  const { user, userType } = useContext(AuthContext);
  useEffect(() => {
    console.log(userType)
  }, [userType])
  return (
    <div className="App d-flex flex-column justify-content-between">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About_us}></Route>
          <Route path="/contact" component={Contact_us}></Route>
          <Route exact path="/bookdoctor/:special/:id/:hospitalId" component={BookDoctor}></Route>
          <Route path="/reserveroom" component={ReserveRoom}></Route>
          <Route path="/terms" component={TermsOfUse}></Route>
          <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
          <Route path="/drprivacypolicy" component={DoctorPrivacy}></Route>
          <Route path="/coronavirus" component={CoronaVirus} ></Route>
          <Route path="/bookdoc" component={BookDoc}></Route>
          <Route exact path="/hospitals/:id" component={HospitalProfile}></Route>
          <Route exact path="/appointments/:id" component={HospitalAppointments}/>
          <Route
            path="/signhospital"
            exact
            render={() => {
              return user ? <Redirect to="/" /> : <Signhospital />;
            }}
          ></Route>
          <Route
            path="/loghospital"
            exact
            render={() => {
              return user ? <Redirect to="/" /> : <Loghospital />;
            }}
          ></Route>
          <Route exact path="/:id" children={userType == "hospitals" ? <HospitalProfile/> : <PatientProfile/>}/>
          <Route exact path="/searchresults/:searchType/:special/:city/:name" component={Search_results}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
