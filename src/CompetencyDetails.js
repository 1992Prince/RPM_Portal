import React, { useState } from 'react';
//import {Link} from 'react-router-dom';
import SubmitButton from "./SubComponents/Button";
import {Button} from 'react-bootstrap';
import Combox, { SkillCategory, ApplicationSupported, ResourceStatus, ProficiencyLevel, ApplicationDomain, QEDomain,
  QESubDomain, QELevel} from './AddCompetencyDropdown';
import Table from "./SubComponents/Table";

function Competency() {
  const [viewCompetency , setViewCompetency] = useState(true);
  const [dropDown, setDropdown] = useState([{}]); 
  const [addCompetencyState, setaddCompetencyState] = useState(false); 
  const [viewTable, setViewTable] = useState(true); 
  const [rows, setRows]  = useState([]);
function submitViewCompetency(event)
{
   setViewCompetency(!viewCompetency);
   setaddCompetencyState(false);
   setViewTable(false); 
}
function addCompetency()
{
  setaddCompetencyState(!addCompetencyState); 
  setViewCompetency(true); 
  setViewTable(false); 
}
function viewCompetencyTable()
{
  setViewTable(!viewTable);
}
console.log(rows)
  return (
    <div>
    <h3>Competency Details Page</h3>
    {viewCompetency && (
   <div className = "update_competency_search_container">
    <div className = "update_competency_search-filter_container"> 
   <div className ="update_competency_search-filter"> <Combox /> </div>
   <div className ="update_competency_search-filter"> <SkillCategory /> </div>
   <div className ="update_competency_search-filter"> <ProficiencyLevel /> </div>
   <div className ="update_competency_search-filter" onClick = {viewCompetencyTable}> <SubmitButton  /> </div>
   </div>
   </div>
    )}
    <div className = "comp-page">
      
          
          <Button variant = "outline-secondary" size = "sm" active onClick = {addCompetency}>Add Competency</Button> {''}
          <Button variant = "outline-secondary" size = "sm" active onClick = {submitViewCompetency}>Update Competency</Button> {''}
          <Button variant = "outline-secondary" size = "sm" active >Delete Competency</Button>
    
    </div>
    
  { addCompetencyState &&
  <div className = "add-comp">
        <div>
    <label>QE Name:</label>
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
          <Combox className = "Combobox1" Change ={captureDropdownValues}  />
</div>
</div>

      <div>
      <label>Resource Status:</label>
      <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
      <ResourceStatus />  
      </div>
      </div>

          <div>
    <label>Skill Category</label>
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
          <SkillCategory Change ={captureDropdownValues}/>
</div>

</div>


<div>
    <label>Application Supported</label>
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
<ApplicationSupported  Change ={captureDropdownValues}/>
</div>

</div>

<div>
    <label>Proficiency Level</label>
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
          <ProficiencyLevel Change ={captureDropdownValues} />
</div>

</div>

<div>
    <label>Application Domain</label>
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
<ApplicationDomain />


</div>

</div>
<div>
    <label>QE Domain</label>
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
          <QEDomain />
</div>

</div>

<div>
    <label>QE Sub-Domain</label>
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
          <QESubDomain />
</div>

</div>

<div>
    <label>QE Level</label>
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
    <QELevel />
</div>

</div>

<div className = "submit-addcomp">
<Button variant = "dark" type = "Submit" size = "sm" onClick = {handleDropdownArray}>Submit</Button>
</div>
</div>
}
 
{viewTable &&
  <div >
        <table className = "tablecontainer"> 
         <thead>
          <tr>
            <th>QE NAME</th>
            <th>SKILL</th>
            <th>APPLICATION</th>
            <th>PROFICIENCY</th>
            </tr>
        </thead>        
        
        {rows.map(item => {
          return <Table name={item.QENAME} skill={item.Application} app ={item.APP} prof = {item.Proficiency}/>;
        })}
       
        </table> 
  </div>
}  
   </div>
  
  );
  


function captureDropdownValues(e, o){
  const {name, title} = o; 
  setDropdown(prevItems => {
    return {...prevItems, [name]: title };
  }); 
     }
     function handleDropdownArray()
     {
      setRows(prevNotes => {
        return    [...prevNotes, dropDown]
      })
      //window.alert("Submitted")
      alert("Competency Added");

     }      
     // eslint-disable-next-line no-unused-vars
     function row(props)

     {
           return(rows)
     }
  // eslint-disable-next-line no-unreachable
  console.log(dropDown); 
  console.log(rows);
  
  
}

export default Competency;
