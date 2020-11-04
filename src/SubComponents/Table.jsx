import React from "react";

function MyTable(props) {
  
  return (
    
    <table>
      <tbody> 
        <tr>
          <td>{props.name}</td>
          <td>{props.skill}</td>
          <td>{props.app}</td>
          <td>{props.prof}</td>
           </tr>
      </tbody>
    </table>
  );
}

export default MyTable;
