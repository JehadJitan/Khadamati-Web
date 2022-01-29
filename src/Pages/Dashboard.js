import SideBar from "../Components/NavBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import About from "./About/About"
import Health from "./MOH/Health"
import Finance from "./Finance"
import Transportation from "./Transportation"
import Interior from "./Interior"
import Property from "./Property"
import LogIn from "../Components/logIn/logIn";
import HealthEmployees from "./MOH/HealthEmployees";
import HealthServices from "./MOH/HealthServices";

function Dashboard() {

    return (
        <>
            <style id="backG">
                {
                    'body {background-color: #f5f5f5;}'
                }
            </style>
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
        </>
    );
}

export default Dashboard;
