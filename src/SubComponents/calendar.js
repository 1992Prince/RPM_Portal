import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../index.css';
import ReactDOM from 'react-dom';

import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';
import 'primeflex/primeflex.css';

export class CalendarField extends Component {
  constructor(props) {
    super(props);
      this.state = {
      date1: null,
      date2: new Date(),
    };

  }
render() {    
    return (
      <div>
        <div className="card">
          <div className="p-fluid p-grid p-formgrid">
            <div className="p-field p-col-12 p-md-4">
           
              <Calendar
                id="icon"
                value={this.state.date2}
                onChange={(e) => this.setState({ date2: e.value })}
                showIcon
              />
         
          </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<CalendarField />, rootElement);

export default CalendarField;