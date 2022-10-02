import './App.css';
import Dashboard from './components/Dashboard';
import Adduser from './components/Adduser';
import Sidebar from './components/Sidebar';
import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  let data={
    earningsMonthly:"40,000",
    earningsAnnual:"2,15,000",
    task:"20",
    pendingRequest:"18"
  }

  const [data1, setData1] = useState([
    {
      name: "usha",
      email: "usha@gmail.com",
      phno: "12356789",
    },
    {
      name: "heena",
      email: "heena@gmail.com",
      phno: "12356789",
    },{
      name: "siva",
      email: "siva@gmail.com",
      phno: "12356789",
    }
  ])
  
  // const [value, setValue]=useState(0)
  return <>
    <div id="wrapper">
          <BrowserRouter>
            <Sidebar/>
              <Routes>
                <Route path='/dashboard' element={<Dashboard data={{data,data1}}/>}/>
                <Route path='/adduser' element={<Adduser data={{data1,setData1}}/>}/>
              </Routes>
          </BrowserRouter>
          
          {/* <h1>{value}</h1> */}
          {/* <Dashboard data={{data, setValue}}/> */}
    </div>
  </>
}

export default App

