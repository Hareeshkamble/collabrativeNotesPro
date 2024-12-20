import './App.css';
import React,{useState} from 'react';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NoteState from './Context/Notes/NoteState';
// import Alert from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { Toaster } from 'react-hot-toast';
import Contribute from './Components/Contribute';

function App() {
const [alert, setalert] = useState()

let showAlert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(() => {
  setalert("")
}, 3000);
}

  return (
<>
<NoteState>

<Router>
<Navbar/>
{/* <Alert alert={alert}/> */}
<div><Toaster/></div>
<Routes>
  <Route exact path='/' element={<Home showAlert={showAlert}/>}/>

  <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>
  <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
  <Route exact path='/contribute' element={<Contribute/>}/>

</Routes>
</Router>
</NoteState>
</>
  );
}

export default App;
