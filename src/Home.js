import React , {useState}  from 'react';
import './Home.css';
import Homepage from "./homePage.js";
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import Axios from "axios";

function LoginPage() {
  return (
    <Router>
      <div className="App">
        <Login />
        <Route path = "/homePage"  component = {Homepage}/>
      </div>
    </Router>
  );
}


function Login () 
  {
    const [cred, setCred] = useState({ fName: "" , pass: ""});
    const [loginState, setLoginState] = useState( false) ;
    function handleSubmit(e) 
    {   
      e.preventDefault(); 
      let request = 
      { 
        name: cred.fName ,  
        pass: cred.pass
         } 
        
        //fetching the login flag fron backend
        Axios.post('http://localhost:9000/login', request)
        .then
          (res =>{
            if (res.data.flag === 0)
              {
                setLoginState(true);
                console.log(res.data.flag);
              }
              else { setLoginState(false);  }
          })
        .catch(err => 
          {
          console.log(err); 
          })  

        console.log(request);
       
        setLoginState(true)
                 
         
        
        
      }
      if(loginState)
      {
      return (<Redirect to = "/homePage" />  ) ; 
    } 
      

      console.log(loginState);
      function handleChange(event) {
        const { value, name } = event.target;
    
        setCred(prevValue => {
          if (name === "fName") {
            return {
              fName: value,
              pass: prevValue.pass                                                                                                                                                                                                                                                                                                                                                                                                           
            }                                              
          } else if (name === "pass") {
            return {
              fName: prevValue.fName,
              pass: value
            }
          }
        });
      }

  return (
      <div> 
        
        <div className="container">
            <h1>
              Hello User
            </h1>
            <input
              name="fName"
              onChange={handleChange}
              placeholder="First Name"
              value={cred.fName}
            />
            <input
              name="pass"
              type = "password" 
              onChange={handleChange}
              placeholder="Last Name"
              value={cred.pass}
            />
             <Button
             onClick = {handleSubmit} >Submit
            </Button> 
      
        </div>  
        </div> 
    
   );
  }

  







export {LoginPage} ;
