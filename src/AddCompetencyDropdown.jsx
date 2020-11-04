/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function ComboBox(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
            options={qename}
            onChange = {props.Change}
      getOptionLabel={option => option.title}
      style={{ width: 250 }}
      renderInput={params => (
        <TextField {...params} label="QE Name" variant="outlined" />
      )}
    />
  );
}
function SkillCategory(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      onChange = {props.Change}
      options={Skill}
      getOptionLabel={option => option.title}
      style={{ width: 250 }}
      

      renderInput={params => (
        <TextField {...params} label="Skill" variant="outlined" />
      )}
    />
  );
}


function ApplicationSupported(props) {
    return (
      <Autocomplete
        id="combo-box-demo"
        onChange = {props.Change}
        options={Applications}
        getOptionLabel={option => option.title}
        style={{ width: 250 }}
        
  
        renderInput={params => (
          <TextField {...params} label="Applications" variant="outlined" />
        )}
      />
    );
  }
  
  function ResourceStatus() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={Status}
        getOptionLabel={option => option.title}
        style={{ width: 250 }}
        renderInput={params => (
          <TextField {...params}  label="Status" variant="outlined" />
        )}
      />
    );
  }
  function ProficiencyLevel(props) {
    return (
      <Autocomplete
        id="combo-box-demo"
        onChange = {props.Change}
        options={proficiency}
        getOptionLabel={option => option.title}
        style={{ width: 250 }}
        
  
        renderInput={params => (
          <TextField {...params} label="Proficiency" variant="outlined" />
        )}
      />
    );
  }
  
  function ApplicationDomain() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={appdomain}
        getOptionLabel={option => option.title}
        style={{ width: 250 }}
        renderInput={params => (
          <TextField {...params}  label="App Domain" variant="outlined" />
        )}
      />
    );
  }
  function QEDomain() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={domain}
        getOptionLabel={option => option.title}
        style={{ width: 250 }}
        renderInput={params => (
          <TextField {...params}  label="Domain" variant="outlined" />
        )}
      />
    );
  }
  function QESubDomain() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={qesubdomain}
        getOptionLabel={option => option.title}
        style={{ width: 250 }}
        renderInput={params => (
          <TextField {...params}  label="Sub Domain" variant="outlined" />
        )}
      />
    );
  }
  function QELevel() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={qelevel}
        getOptionLabel={option => option.title}
        style={{ width: 250 }}
        renderInput={params => (
          <TextField {...params}  label="Level" variant="outlined" />
        )}
      />
    );
  }
  

  export { SkillCategory, ApplicationSupported, ResourceStatus, ProficiencyLevel, ApplicationDomain, QEDomain,
    QESubDomain, QELevel};
  //Array of Selections for different dropdowns  
const Skill = [
  { title: "Automation Testing", name:"Application" },
  { title: "Manual Testing", name:"Application" },
  { title: "UI Testing", name:"Application"},
  { title: "Database Testing", name:"Application"},
  { title: "Web Service Testing", name:"Application"}
];

const qename = [
    { title: "Bhagya"  , name: "QENAME" },
    { title: "Manjunath" ,name: "QENAME"  },
    { title: "Nikhil",  name: "QENAME" },
    { title: "Somi" , name: "QENAME" }
];

const Applications = [
    { title: "Business Intelligence" , name: "APP"  },
    { title: "Data Analytics", name: "APP"  },
    { title: "Cloud Computing" , name: "APP" },
    { title: "Amazon Web Services" , name: "APP"}
];

const Status = [
    { title: "Auto Poulated" }
];
const proficiency = [
    { title: "P1" , name: "Proficiency"},
    { title: "P2" , name: "Proficiency" },
    { title: "P3" , name: "Proficiency"},
    { title: "P4", name:  "Proficiency"},
    { title: "P5", name: "Proficiency"}
];

const appdomain = [
    { title: "Auto Poulated" }
  
];

const domain = [
    { title: "Auto Poulated" }
  
];

const qesubdomain = [
    { title: "Auto Poulated" }
  
];

const qelevel = [
    { title: "Auto Poulated" }
  
];
