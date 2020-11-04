import React, { useState }  from 'react';
import { Button } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';

function Edit_Application() {

  const [appName, setAppName] = useState('')
  const [appDomain, setDomainName] = useState('')
  const [appSkillCat, setAppSkillCat] = useState('')
  const [appLifeCycle, setappLifeCycle] = useState('')

  const submitUpdate = function(){ 
    console.log('Inside submit Review');
  //   Axios.put
  //   ('http://localhost:5000/api/update', 
  //  {appName: appName, 
  //   appDomain: appDomain,
  //   appSkillCat: appSkillCat,
  //   appLifeCycle: appLifeCycle })
  //  .then(function(){
   alert("Successfully  Updated");
  //})
};



  const AppStartDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker 
      closeOnScroll={e => e.target === document}
      selected={startDate}
      onChange={date => setStartDate(date)}
      isClearable
      placeholderText="Click to select application life cycle in years"
      
      // selected={startDate} 
      // onChange={date => setStartDate(date)}
      />
    );
    };
  return (
    
    <div className = "application">
     
    <div>
    <label for="applicationname" >Application Name*</label>
    </div>
    <div>
    <div className="d-inline-block_bg-primary_text-white" >
    <input type="text" id="applicationname" name="applicationName" placeholder="Enter application name" onChange ={function(e){
      setAppName(e.target.value)
    }}></input>
    </div>
    </div>


    <p> 
    <label for="appdomain">Application Domain*</label>    
    <select id="appdomain" name="appdomain" onChange ={function(e){
      setDomainName(e.target.value)
    }}>
    <option value="" disabled selected hidden>Select Application Domain</option> 
    <option value="domain2">Administer Test & Report Scores1</option>
    <option value="domain3">Test Taker Management & Client systems</option>
    <option value="domain1">Reporting</option>
    </select>
    </p>

    <p>
    <label for="appskillcat">Application Skill Category*</label>    
    <select id="appskillcat" name="appskillcat" onChange ={function(e){
      setAppSkillCat(e.target.value)
    }}>
    <option value="" disabled selected hidden>Select Application Skill Category</option> 
    <option value="appskillcat1">Automation Tools</option>
    <option value="appskillcat2">Performance Test Tool</option>
    <option value="appskillcat3">Programming Skill</option>
    <option value="appskillcat3">Certifications</option>
    <option value="appskillcat3">Account Delivery Management</option>
    </select>
    </p>
    
    <p>
    <label for="appstartdate">Application onboarding date*</label>
     <AppStartDate/>
    </p>
    <p>
    <label for="applifecycle">Application Life Cycle*</label>
    <select id="applifecycle" name="applifecycle" onChange ={function(e){
      setappLifeCycle(e.target.value)
    }}>
    <option value="" disabled selected hidden>Select Application Life Cycle*</option> 
    <option value="appskillcat1">Active</option>
    <option value="appskillcat2">Inactive</option>
    </select>
    </p>

    <p>
    <Button style={{ color: '#FFF' }} onClick = {submitUpdate} >Submit1</Button>
    </p>


    </div>
  );
}

export default Edit_Application;
