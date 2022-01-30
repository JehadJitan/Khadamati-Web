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
import InteriorEmployee from "./MOI/InteriorEmployee";
import InteriorService from "./MOI/InteriorService";
import DashboardContent from "./DashboardContent";

const Hello = ({ children }) => {
    return (<>
        <SideBar />
        {children}
    </>);
}

const Dashboard = () => {

    return (
        <>
            <Router>
                <SideBar />
                <Switch>
                    <Route path='/DB' exact component={DashboardContent} />
                    <Route path='/DB/about' exact component={About} />
                    {/* <Route path='/DB/MinistryOfHealth' exact component={Health} /> */}
                    <Route path='/DB/MinistryOfHealth/employees' exact component={HealthEmployees} />
                    <Route path='/DB/MinistryOfHealth/services' exact component={HealthServices} />
                    {/* <Route path='/DB/MinistryOfHealth' exact component={Health} /> */}
                    <Route path='/DB/MinistryOfFinance' exact component={Finance} />
                    <Route path='/DB/MinistryOfTransportation' exact component={Transportation} />
                    <Route path='/DB/MinistryOfInteriorAffairs' exact component={Interior} />
                    <Route path='/DB/MinistryOfInteriorAffairs/employees' exact component={InteriorEmployee} />
                    <Route path='/DB/MinistryOfInteriorAffairs/services' exact component={InteriorService} />
                    <Route path='/DB/MinistryOfLandMark' exact component={Property} />
                    <Route path="/" exact component={LogIn} />
                </Switch>
            </Router>
        </>
    );
}
export default Dashboard;
