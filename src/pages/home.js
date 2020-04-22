import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

const Home= ()=>{
  const [loading, setLoading] = useState(false);
  const [users , setUsers] = useState([]);
  
  console.log(loading);
  useEffect(()=>{
    const config = {
        headers:{'Access-Control-Allow-Access':'*'}
    }
      axios.get("http://localhost:4000/users",config)
      .then(res=>{
          
          setUsers(res.data);
          setLoading({loading : true});
          

      })
      


  },[]);

  return(
            
  <Fragment>
      <div className="card">
                  <h5 className="card-header theme1 m-0">Featured</h5>
                  <div className="card-body">
                  {loading ? (
    <div>
    <div className="row mt-12">
          
    <table className="highlight">
          <thead>
            <tr>
                <th>User Name</th>
                <th>Email</th>
                
            </tr>
          </thead>
          <tbody>
      {users.map(user=>(
  
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
             
            </tr>
  
      ))}
      </tbody>
        </table>
      
  
    </div>
  
  </div>
  )

  : (

    <div className="preloader-wrapper big active text-center loading">
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
      </div>
  )} 
              
                  </div>
                </div>
  </Fragment>
            



)



}
    


export default Home;