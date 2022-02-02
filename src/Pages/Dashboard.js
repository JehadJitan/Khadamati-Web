import SideBar from "../Components/NavBar/SideBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import About from "./About/About"
import LogIn from "../Components/logIn/logIn";
import HealthEmployees from "./MOH/HealthEmployees";
import HealthServices from "./MOH/HealthServices";
import InteriorEmployee from "./MOI/InteriorEmployee";
import InteriorService from "./MOI/InteriorService";
import DashboardContent from "./DashboardContent";
import InteriorRequestTable from "./MOI/InteriorRequestTable";
import TransportationRequestTable from "./MOT/TransportationRequestTable";
import TransportationService from "./MOT/TransportationService";
import TransportationEmployee from "./MOT/TransportationEmployee";
import FinanceEmployee from "./MOF/FinanceEmployee";
import FinanceService from "./MOF/FinanceService";
import FinanceRequestTable from "./MOF/FinanceRequestTable";
import PropertyEmployee from "./MOP/PropertyEmployee";
import PropertyService from "./MOP/PropertyService";
import PropertyRequestTable from "./MOP/PropertyRequestTable";
import Users from "./Users/Users";
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
                    <Route path='/DB/MinistryOfFinance/employees' exact component={FinanceEmployee} />
                    <Route path='/DB/MinistryOfFinance/services' exact component={FinanceService} />
                    <Route path='/DB/MinistryOfFinance/requests' exact component={FinanceRequestTable} />
                    <Route path='/DB/MinistryOfTransportation/requests' exact component={TransportationRequestTable} />
                    <Route path='/DB/MinistryOfTransportation/services' exact component={TransportationService} />
                    <Route path='/DB/MinistryOfTransportation/employees' exact component={TransportationEmployee} />
                    <Route path='/DB/MinistryOfInteriorAffairs/employees' exact component={InteriorEmployee} />
                    <Route path='/DB/MinistryOfInteriorAffairs/services' exact component={InteriorService} />
                    <Route path='/DB/MinistryOfInteriorAffairs/requests' exact component={InteriorRequestTable} />
                    <Route path='/DB/MinistryOfLandMark/employees' exact component={PropertyEmployee} />
                    <Route path='/DB/MinistryOfLandMark/services' exact component={PropertyService} />
                    <Route path='/DB/MinistryOfLandMark/requests' exact component={PropertyRequestTable} />
                    <Route path='/DB/users' exact component={Users} />
                    <Route path="/" exact component={LogIn} />
                </Switch>
            </Router>
        </>
    );
}
export default Dashboard;
