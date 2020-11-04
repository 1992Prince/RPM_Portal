import React, { useState }  from 'react';
import { Button} from 'react-bootstrap';
import { render } from '@testing-library/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Timeentry() {

  const ReportDate = () => {
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
  
render()
 
return (
    <div className="time-entry">
       <h2>Time Entry</h2>       
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
    <label for="releasenumber">Release Version*</label>    
    <select id="releasenumber" name="releasenumber">
    <option value="" disabled selected hidden>Select Release Version</option> 
    <option value="version1">1.0.0</option>
    <option value="version2">1.1.0</option>
    <option value="version3">1.2.0</option>
    </select>
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
        <select id="pvid" name="pvid">          
        <option value="" disabled selected hidden>Select Plan View Id</option>     
      <option value="PV1">1111</option>
      <option value="PV2">2222</option>
        </select>
       
       
    </p>

    <p>
      <label for="pscc">People Soft Charge Code(s)*</label>
      <select id="pscc" name="pscc">
        {/* <option value="" disabled selected hidden>Select Charge Code - project/product/activityid/resourcetype</option>      */}
      <option value="" disabled selected hidden>Select Charge Code</option>     
      <option value="pscc">1111/2058/101/98</option>
      <option value="pscc">1111/2058/101/99</option>
       </select>
    </p>

    <p>
    <label for="startDate">Report Date*</label> 
    <ReportDate/>    
    </p>

     
    <p>
        <label for="quantity">Quantity*</label>
        <input type="text" id="quantity" name="quantity" placeholder="Enter the time spent"></input>        
    </p>

    <p>
        <label for="comments">Comments</label>
        <input type="text" id="comments" name="comments" placeholder="Enter comments"></input>        
    </p>

    <p>
    <Button onclick={' '}>Submit</Button>
    </p>

    </form>    
    </div>
 );

};

export default Timeentry; 

