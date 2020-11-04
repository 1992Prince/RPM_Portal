import React , {useState}  from 'react';
import './Home.css';
import Nav from './Nav';
import Competency from './CompetencyDetails';
import Staffing from './StaffingDetails';
import Resource from './ResourceAllocations';
import Releases from './ReleasesAndCers';
import Applications from './Applications/Applications_mainPage';
import Releasedetails from './Releases';
import Timeentry from './TimeEntry';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'; 
import Button from 'react-bootstrap/Button';


function homePage ()
{
    return (
        <Router>
      <div className="App">
       <Nav />
       <Switch>
       <Route path = "/homePage"  component = {Home}/>
       <Route path = "/CompetencyDetails" component = {Competency}/>
       <Route path = "/StaffingDetails" component = {Staffing}/>
       <Route path = "/ResourceAllocations" component = {Resource}/>
       <Route path = "/ReleasesAndCers" component = {Releases}/>
       <Route path = "/Applications" component = {Applications}/>
       <Route path = "/Releases" component = {Releasedetails}/>
       <Route path = "/TimeEntry" component = {Timeentry}/>
       </Switch>
      </div>
      </Router>
    );
  
}

const Home = () => (

    <div className = "myHome">
    <Jumbotron>
    <h1>Hello there!</h1>
    <p>
      Welcome to Resource Management Tool.
      This is the 'GoTo' place for all the updates with respect to resources.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
  </Jumbotron>
    </div>
  
  )  

export default homePage;
