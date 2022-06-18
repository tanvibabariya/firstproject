import React, { useEffect, useState } from 'react';
import './App.css';
import Hom1 from './Container/Hom1';
import Load from './Container/Load';


const Loadwithhome=Load(Hom1)

function App() {

  const[load , setLoad]=useState(false);
  const[edata,setEdata]=useState([]);

  const orgData =[

        {
    
            id: 101,
            name: 'Amit',
            joining_date: "01-06-2021",
            salary: 50000
    
        },
    
        {
    
            id: 102,
    
            name: 'Piyush',
    
            joining_date: "01-01-2019",
    
            salary: 60000
    
        },
    
        {
    
            id: 103,
    
            name: 'Meet',
    
            joining_date: "01-03-2020",
    
            salary: 25000
    
        },
    
        {
    
            id: 104,
    
            name: 'Lalit',
    
            joining_date: "01-12-2021",
    
            salary: 30000
    
        }
    
    ]

  useEffect(()=>{
    setLoad(true);
    setTimeout(()=>{setLoad(false);setEdata(orgData)},2000);
  },[]);

   
  return (
  <>
  <Loadwithhome
  isload={load}
  data={edata}
  />
    
  </>
  );
}

export default App;