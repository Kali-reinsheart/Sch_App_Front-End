import React ,{useState,useEffect}from 'react';
import axios from 'axios';

const List= ()=>{
  const [widow , setWidow] = useState([]);
  

  useEffect(()=>{
    const config = {
        headers:{'Access-Control-Allow-Access':'*'}
    }
      axios.get("http://localhost:4000/lists",config)
      .then(res=>{
          
          setWidow(res.data);
          console.log(res.data)

      }).catch(err => console.log(err))
      


  },[]);

  return(
            
  <div>
  <div className="card">
              <div className="card-header theme1 ">
                Featured
              </div>
              <div className="card-body kwasi">
                <div className="row">
                {widow.map(user=>(
     
     <div className="col-md-3 text-center" key={user.id}>
                  <div className="card tile">
                    <div className="card-body">
                      <h4><i className="fas fa-stopwatch  fa-1.5x"></i> {user.Tally}</h4>
                      <h6> {user.Item}</h6>
                    </div>
                  </div>
                 </div>

    ))}
                  </div>
                 </div>
                </div>

</div>
            



)



}
    


export default List;