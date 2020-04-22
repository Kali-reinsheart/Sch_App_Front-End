import React from 'react'
import Home from './home'
import List from '../components/list';
import Links from '../components/links';

export default function Users() {
    return (
        <section id="main">
      <div className="col-md-10 m-auto tulus">
        <div className="row">
          <div className="col-md-3 mt-2">
           <Links/>

          </div>
          <div className="col-md-9">
                <List/>
                <Home/>
              </div>
            </div>

        
      </div>
    </section>

    )
}
