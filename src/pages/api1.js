import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api1= ()=>{
  const [users , setUsers] = useState([]);
  

  useEffect(()=>{
    const config = {
        headers:{'Access-Control-Allow-Access':'*'}
    }
      axios.get("http://localhost:4000/users",config)
      .then(res=>{
          
          setUsers(res.data)

      })
      


  },[]);

  return(
            
  <div>
  <div className="row mt-3">
    {users.map(user=>(
    <div className="col-md-4 text-center" key={user.id}>
        <div className="card m-1 border-aqua z-depth-5">
            <div className="card-header theme1">
                USER ID : {user.id}
                </div>
            <div className="card-body">
               <h6 className="card-title tex">USER NAME: {user.username}</h6>
              <p className="card-text">USER EMAIL: {user.email}</p>
              <p className="card-text">USER PASSWORD: {user.password}</p>
            </div>
        </div>
    </div>


    ))}

  </div>

</div>
            



)



}
    


export default Api1;