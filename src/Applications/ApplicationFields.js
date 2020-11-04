/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "react-datepicker/dist/react-datepicker.css";
// import { render } from '@testing-library/react';
// import { Button , Modal} from 'react-bootstrap';
// import CalendarField from "./SubComponents/calendar";

// export default function ComboBox(props) {
//   return (
//     <Autocomplete
//       id="combo-box-demo"
//             options={appName}
//             onChange = {props.Change}
//       getOptionLabel={option => option.title}
//       style={{ width: 250 }}
//       renderInput={params => (
//         <TextField {...params} label="App Name" variant="outlined" />
//       )}
//     />
//   );
// };

function ApplicationName() {

  return (  
    // eslint-disable-next-line react/jsx-no-duplicate-props
      //     onChange = {props.Change}  
    <TextField   className = "fieldsize"  label="App Name" variant="outlined"/>  
    
  //  <Autocomplete
      // id="combo-box-demo"
  //     onChange = {props.Change} 
  //     options={appName}        
  //     getOptionLabel={option => option.title}
      // style={{ width: 250 }}
  //     renderInput={params => (
  //     <TextField {...params} label="App Name" variant="outlined" />
  //     )}
    // />

  );
};

function ApplicationDomain(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      onChange = {props.Change}      
      options={AppDomain}
      getOptionLabel={option => option.title}
      style={{ width: 250 }}
      renderInput={params => (
      <TextField {...params} label="App Domain" variant="outlined" />
      )}
    />
  );
};


function AppSkillCategory(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      onChange = {props.Change}      
      options={ApplicationSkillCategory}
      getOptionLabel={option => option.title}
      style={{ width: 250 }}
      renderInput={params => (
      <TextField {...params} label="App Skill Category" variant="outlined" />
      )}
    />
  );
};

function AppLifeCycle(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      onChange = {props.Change}      
      options={ApplicationLifeCycle}
      getOptionLabel={option => option.title}
      style={{ width: 250 }}
      renderInput={params => (
      <TextField {...params} label="App lifeCycle" variant="outlined" />
      )}
    />
  );
};



export {ApplicationName, ApplicationDomain, AppSkillCategory, AppLifeCycle};
//Array of Selections for different dropdowns  

const AppDomain = [
{ title: "Administer Test & Report Scores", name:"ApplicationDomain" },
{ title: "Test Taker Management & Client systems", name:"ApplicationDomain" },
{ title: "Reporting", name:"ApplicationDomain"}

];

const ApplicationSkillCategory = [
  { title: "Automation Tools"  , name: "AppSkillCategory" },
  { title: "Performance Test Tool" ,name: "AppSkillCategory"  },
  { title: "Programming Skill",  name: "AppSkillCategory" },
  { title: "Certifications" , name: "AppSkillCategory" }
];

const ApplicationLifeCycle = [
  { title: "Active" , name: "APP"  },
  { title: "Inactive", name: "APP"  }
];



