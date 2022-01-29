import SideBar from "../Components/NavBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import About from "./About/About"
import Health from "./MOH/Health"
import Finance from "./MOF/Finance"
import Transportation from "./MOT/Transportation"
import Interior from "./MOI/Interior"
import Property from "./MOP/Property"
import LogIn from "../Components/logIn/logIn";
import HealthEmployees from "./MOH/HealthEmployees";
import HealthServices from "./MOH/HealthServices";
import * as BsIcons from 'react-icons/bs';

function Dashboard() {

    return (
        <>
            <Router>
                <SideBar />
                <Switch>
                    <Route path='/DB/about' exact component={About} />
                    <Route path='/DB/MinistryOfHealth' exact component={Health} />
                    <Route path='/DB/MinistryOfHealth/employees' exact component={HealthEmployees} />
                    <Route path='/DB/MinistryOfHealth/services' exact component={HealthServices} />
                    <Route path='/DB/MinistryOfHealth' exact component={Health} />
                    <Route path='/DB/MinistryOfFinance' exact component={Finance} />
                    <Route path='/DB/MinistryOfTransportation' exact component={Transportation} />
                    <Route path='/DB/MinistryOfInteriorAffairs' exact component={Interior} />
                    <Route path='/DB/MinistryOfLandMark' exact component={Property} />
                    <Route path="/" exact component={LogIn} />
                </Switch>
            </Router>
            <div id="parent">
                <div id="left">
                    <BsIcons.BsPeopleFill /><h1>عدد المواطنين</h1>
                    <h2>5,297,327</h2>
                </div>
                <div id="center">
                    <BsIcons.BsPeopleFill /><h1>عدد الموظفين</h1>
                    <h2>2,134,882</h2>
                </div>
                <div id="right">
                    <BsIcons.BsPeopleFill /><h1>عدد المستخدمين</h1>
                    <h2>297,327</h2>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
