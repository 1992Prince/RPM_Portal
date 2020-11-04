import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Button} from 'react-bootstrap';

function Nav() {


  
  return (
   <nav >
       <div className = "nav-res">     
        <h3>Resource Management Portal</h3> 
        <Link className = "report-links">Reports</Link>
       </div>
       <div className = "Nav-button">     
        <NavLink activeClassName = "active" to ="/homePage">
          <Button variant = "light" size = "lg" >Home</Button>{' '}
        </ NavLink>       
        <Link to ="/CompetencyDetails">
          <Button variant = "dark" size = "lg" active>Competency</Button> {'  '}
        </Link>
        <Link to ="/StaffingDetails">
           <Button variant = "dark" size = "lg" >Staffing</Button> {'  '}
        </Link>
        <Link to ="/ResourceAllocations">
          <Button variant = "dark" size = "lg" >Resource Allocations</Button> {'  '}
        </Link>
        <Link to ="/Applications">
          <Button variant = "dark" size = "lg" >Applications</Button> {'  '}
        </Link>
        <Link to ="/Releases">
          <Button variant = "dark" size = "lg" >Releases</Button> {'  '}
        </Link>
        <Link to ="/TimeEntry">
          <Button variant = "dark" size = "lg" >Time Entry</Button> {'  '}
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
