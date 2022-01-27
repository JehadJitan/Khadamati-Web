import SideBar from "../Components/SideBar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Dashboard.css';
import About from "./About"
import Health from "./Health"
import Finance from "./Finance"
import Transportation from "./Transportation"
import Interior from "./Interior"
import Property from "./Property"

function Dashboard() {

    return (
        <>
            <Router>
                <SideBar />
                <Switch>
                    <Route path='/DB/about' exact component={About} />
                    <Route path='/DB/MinistryOfHealth' exact component={Health} />
                    <Route path='/DB/MinistryOfFinance' exact component={Finance} />
                    <Route path='/DB/MinistryOfTransportation' exact component={Transportation} />
                    <Route path='/DB/MinistryOfInteriorAffairs' exact component={Interior} />
                    <Route path='/DB/MinistryOfLandMark' exact component={Property} />
                </Switch>
            </Router>
        </>
    );
}

export default Dashboard;
