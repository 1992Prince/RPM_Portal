import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button , Modal} from 'react-bootstrap';
import SubmitButton from "../SubComponents/Button";
import  {ApplicationName, ApplicationDomain, AppSkillCategory, AppLifeCycle } from "./ApplicationFields";
import Axios from 'axios';
// import '../SubComponents/ExportExcel';



import AppTable from '../SubComponents/AppTable';

// import App from '../SubComponents/ExportExcel';

// import Table from "../SubComponents/Table";
import CalendarField from "../SubComponents/calendar";
import TextField from "@material-ui/core/TextField";
import { render } from '@testing-library/react';
// import AddApp_popup from "./popup";


function Applications() {
  
  const [appName, setAppName] = useState('')
  const [appDomain, setDomainName] = useState('')
  const [appSkillCat, setAppSkillCat] = useState('')
  const [appLifeCycle, setappLifeCycle] = useState('')
  
  const [viewApplication , setViewApplication] = useState(false);  
  const [addApplicationState, setaddApplicationState] = useState(false); 
  const [viewTable, setViewTable] = useState(true); 
  const [rows, setRows]  = useState([]);
  const [dropDown, setDropdown] = useState([{}]); 
  const [show, setShow] = useState(false);

  const [gridApi, setGridApi] = useState(null);

    const submitReview = function(){ 
       console.log('Inside submit Review');
       Axios.post
       ('http://localhost:5000/api/insert', 
      {appName: appName, 
      appDomain: appDomain,
       appSkillCat: appSkillCat,
       appLifeCycle: appLifeCycle })
      .then(function(){
      alert("Successful Insert");
     })
   };




  

  function handleShow()
  {
    setShow(true);  
  };

function handleClose()
{
  setShow(false);
}

  function submitViewApplication(event)
{
   setViewApplication(!viewApplication);
  // setaddApplicationState(false);
   setViewTable(true); 
}

  function addApplication()
{
  setaddApplicationState(!addApplicationState); 
    // setViewApplication(false);     
    setViewTable(true); 
}


function viewApplicationTable()
{
  setViewTable(!viewTable);
}

console.log(rows)
render() 
  return (
    <div>
    <h3>Applications</h3>

    <div>
    {viewApplication && (
   <div className = "update_competency_search_container">
    {/* <div className = "update_competency_search-filter_container">  */}
    {/* <div className ="update_competency_search-filter"> <Combox /> </div> */}
   <div className ="update_competency_search-filter"> <ApplicationName/> </div>
   <div className ="update_competency_search-filter"> <ApplicationDomain/> </div>
   <div className ="update_competency_search-filter"> <AppSkillCategory /> </div>
   <div className ="update_competency_search-filter"> <AppLifeCycle /> </div>
    <div className ="update_competency_search-filter" onClick = {viewApplicationTable}> <SubmitButton  /> </div>
   {/* </div> */}
   </div>
    )}

   

    </div>
      
    <div className="d-inline-block_bg-primary_text-white" >
          {'                '}
          </div>

    <div className = "comp-page">          
          <Button variant = "outline-secondary" size = "sm" active onClick = {handleShow}>Add Application</Button> {addApplication ? <addApplicationState toggle={addApplication} /> : null}
          <Button variant = "outline-secondary" size = "sm" active onClick = {submitViewApplication}>Edit Application</Button> {submitViewApplication ? <addApplicationState toggle={submitViewApplication} /> : null} 
          <Button variant = "outline-secondary" size = "sm" active onClick={''}>Export Records</Button> {''}
     </div>

     {viewTable &&
 <div>
        {/* <table responsive id = "records" className = "tablecontainer">  */}
        {/* className = "tablecontainer" */}
        {/* <tbody>
          
         <tr>
          <th>Application Name</th>
            <th>Application Domain</th>
            <th>Application Skill Category</th>
            <th>Application Start Date</th>
            <th>Application Life Cycle</th>
            </tr>
         
            
            <tr>
        {rows.map(item => {
          return <>
          <td>appName={item.ApplicationName}</td>
          <td> domain={item.ApplicationDomain}</td>
          <td> appSkillCategory ={item.appSkillCategory}</td>
          <td> app_Start_Date = {item.AppStartDate}</td>
          <td> app_life_cycle = {item.AppLifeCycle}</td>
         </>  
        })
        }
        </tr>
        
         </tbody>        
        </table>  */}

       
<div >
{/* <GridExample/> */}
<AppTable />
{/* <App/> */}
</div>

        </div>
        
 
}
       
  { handleShow &&
    <Modal show={show} onHide={handleClose} animation={false} backdrop={false}  centered={true}>
<Modal.Header className="title-look" closeButton>
<Modal.Title >Add Application</Modal.Title>
</Modal.Header>

<Modal.Body>
  <div>
  <label>Application Name*</label>    
  <div className="d-inline-block_bg-primary_text-white" >
  <TextField  className="fieldsize"  label="App Name" variant="outlined"  onChange ={function(e){
      setAppName(e.target.value)
    }}></TextField>

  </div>
  </div>

  <div>
  <label>Application Domain*</label>
  <div className="d-inline-block_bg-primary_text-white" >
  <TextField  className="fieldsize"  label="App Domain" variant="outlined"  onChange ={function(e){
      setDomainName(e.target.value)
    }}></TextField>
  </div>
  </div>

 <div>
 <label>Application Skill Category*</label>
 <div className="d-inline-block_bg-primary_text-white" >
 <TextField  className="fieldsize"  label="App Skill Category" variant="outlined"  onChange ={function(e){
      setAppSkillCat(e.target.value)
    }}></TextField>
 </div>
 </div>

  {/* <div>
  <label>Application Start Date*</label>
  <div className="d-inline-block_bg-primary_text-white" >
  {'                '}
  <CalendarField className="fieldsize"/>  
  </div>
  </div> */}

  <div>
  <label>Application Life Cycle*</label>
  <div className="d-inline-block_bg-primary_text-white" >
  <TextField  className="fieldsize"  label="App Skill Category" variant="outlined"  onChange ={function(e){
      setappLifeCycle(e.target.value)
    }}></TextField>
  </div>
  </div>
  </Modal.Body>

  <Modal.Footer>
  <Button onClick = {submitReview}> Submit</Button>           
  <Button onClick={handleClose}> Close</Button>        
  <Button>Reset</Button>  
  </Modal.Footer>      
  </Modal>      
  } 
 </div>
   );
  


   function captureDropdownValues(e, o)
{
      const {name, title} = o; 
      setDropdown(prevItems => {
        return {...prevItems, [name]: title };
      }); 
};



function handleDropdownArray()
{
      setRows(prevNotes => {
        return    [...prevNotes, dropDown]
      }) //window.alert("Submitted")
      
      alert("Application Added");
};      
     // eslint-disable-next-line no-unused-vars
function row(props)
{
      return(rows);
};
  // eslint-disable-next-line no-unreachable
  console.log(dropDown); 
  console.log(rows);  

// function AddedPopup()
// {
// return(
// <Modal.Dialog>
//   <Modal.Header closeButton>
//     <Modal.Title>Modal title</Modal.Title>
//   </Modal.Header>

//   <Modal.Body>
//     <p>Modal body text goes here.</p>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="secondary">Close</Button>
//     <Button variant="primary">Save changes</Button>
//   </Modal.Footer>
// </Modal.Dialog>
// );
// }
}


export default Applications;
