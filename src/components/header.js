import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className="header text-dark">
        <div className="container row">
         
            <div className="col-md-10">
              <h3 className=" float-left text-center" ><i className="fas fa-paper-plane fa-1.5x"></i> <b>Dashboard</b></h3>
            </div>
            <div className="col-md-2">
              <div className="dropdown create">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Options
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <Link className="dropdown-item"to="#">Action</Link>
                  <Link className="dropdown-item" to="#">Another action</Link>
                  <Link className="dropdown-item" to="#">Something else here</Link>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    )
}
