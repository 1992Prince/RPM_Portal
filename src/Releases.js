import React, { useState }  from 'react';
import { Button} from 'react-bootstrap';
import { render } from '@testing-library/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from "axios"; 



function Releasedetails() {

  const StartDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker 
      closeOnScroll={e => e.target === document}
      selected={startDate}
      onChange={date => setStartDate(date)}
      isClearable
      placeholderText="Click to select start date"
      
      // selected={startDate} 
      // onChange={date => setStartDate(date)}
      />
    );
    };
    const EndDate = () => {
      const [endDate, setEndDate] = useState(new Date());
      return (
        <DatePicker 
        closeOnScroll={e => e.target === document}
        selected={endDate}
        onChange={date => setEndDate(date)}
        isClearable
        placeholderText="Click to select end date"
        />
      );
  };
  
  render()

  return (
    <div className = "releasesPage">
    <p>
          <h3>Releases Page</h3>
          </p>
          <form>

          <p>
    <label for="appname">Application Name*</label>    
    <select id="appname" name="appname">
    <option value="" disabled selected hidden>Select Application Name</option> 
    <option value="domain2">ABC</option>
    <option value="domain3">XYZ</option>
    <option value="domain1">DYX</option>
    </select>
    </p>

    <p>
    <label for="releaseVersion" >Release Version*</label>
    <input type="text" id="releaseVersion" name="releaseVersion" placeholder="Enter Release Version"></input>
    </p>

    <p>
    <label for="st_type">Software Testing Type*</label>
    <select id="st_type" name="st_type">
    <option value="" disabled selected hidden>Select ST Type</option> 
    <option value="PT">PT</option>
    <option value="FT">FT</option>
    <option value="WAT">WAT</option>
    </select>
    </p>

    <p>
    <label for="st_type">Software Testing Model*</label>
    <select id="st_type" name="st_type">
    <option value="" disabled selected hidden>Select ST Model</option>     
    <option value="PT">Agile</option>
    <option value="FT">Waterfall</option>
    </select>
    </p>


    <p>
        <label for="pvid">Plan View Id*</label>
        <input type="text" id="pvid" name="pvid" placeholder="Enter Plan View Id"></input>            
    </p>

    <p>
      <label for="pscc">People Soft Charge Code(s)*</label>
      <input type="text" id="pscc" name="pscc" placeholder="Enter Charge Code"></input>            
    </p>

    <p>
    <label for="startDate">Release Start Date*</label> 
    <StartDate/>    
    </p>

    <p>
    <label for="endDate">Release End Date*</label> 
    <EndDate/>    
    </p>

    <p>
        <label for="estimatedHours">Enter The Estimated Hours*</label>
        <input type="text" id="estimatedHours" name="estimatedHours" placeholder="Enter The Estimated Hours"></input>        
    </p>


    <p>
    <Button onclick={' '}>Add</Button>
    </p>


    </form>
    </div>
  );
};

export default Releasedetails;
