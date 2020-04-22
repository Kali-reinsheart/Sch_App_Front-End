import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        
  <nav>
  <div className="nav-wrapper theme1">
    <Link to="/all" className="brand-logo">Logo</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      
      <li><Link to="/all">all</Link></li>
      <li><Link to="/users">Sass</Link></li>
      <li><Link to="/chart">Chart</Link></li>
    </ul>
  </div>
</nav>
      
    )
}
