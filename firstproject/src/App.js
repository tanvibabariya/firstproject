import React, { useEffect, useState } from 'react';
import Loading from './Container/Loading';
import Home from './Container/Home'
import Counter from './Container/Counter';

const LoadingWithHome = Loading(Home);

function App(props) {

const[loading , setLoading]=useState(false);
const[data , setData]=useState([]);

 const orgData=[
   { id:101 , name:"Tanvi" },
   {id:102 , name:"Vruti"}
];

useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{setLoading(false);setData(orgData)} ,2000)
},[])



  return (
    <div>
          <LoadingWithHome
           isloading ={loading}
          data = {data}
          />
          
          
    </div>
  );
}

export default App;