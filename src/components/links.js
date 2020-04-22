import React from 'react';
import {Link} from 'react-router-dom';
class Links extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                 <div className="list-group">
              <Link to="#" className="list-group-item list-group-item-action active theme1"><i className="fas fa-paper-plane fa-1.5x"></i>
                Dashboard
              </Link>
              <Link to="#" className="list-group-item list-group-item-action"><i className="fas fa-stopwatch  fa-1.5x"></i> Stock <span className="new badge float-right">232</span></Link>
              <Link to="#" className="list-group-item list-group-item-action"><i className="fas fa-pen-alt fa-1.5x"></i> Employees<span className=" new badge  float-right">212</span></Link>
              <Link to="#" className="list-group-item list-group-item-action waves-effect waves-light"><i className="fas fa-list-alt fa-1.5x"></i> Orders<span className="new badge float-right">32</span></Link>
            </div>
            <div className="well">
              <h4>Profit</h4>
              <div className="progress">
                <div className="progress-bar bar1" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
              
              </div>
              <h4>Sales</h4>
              <div className="progress ">
                <div className="progress-bar bar2" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
              
              </div>
            </div>

            </div>
         );
    }
}
 
export default Links;