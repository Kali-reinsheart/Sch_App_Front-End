import React from 'react';
import Api1 from './pages/api1';
import Navbar from './components/navbar';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/header';
import Users from './pages/users';
import Chartme from './pages/chart';






function App(){
  return(
    <div>
    <Router>
    <Navbar/>
      <Header/>
      <Route exact path="/all" component={Api1} />
      <Route exact path="/users" component={Users} />
      <Route exact path = "/chart" component={Chartme}/>
      
    </Router>

    </div>
    

  )
}


export default App;