import logo from './logo.svg';
import './App.css';



// function App() {

// let Data = 
// [
//   {
//     id: 101,
//     name: 'Abacavir',
//     quantity: 25,
//     price: 150,
//     expiry: 2022,
//     status: true
//   },
//   {
//     id: 102,
//     name: 'Eltrombopag',
//     quantity: 90,
//     price: 550,
//     expiry: 2021,
//     status: true
//   },
//   {
//     id: 103,
//     name: 'Meloxicam',
//     quantity: 85,
//     price: 450,
//     expiry: 2025,
//     status: false
//   },
//   {
//     id: 104,
//     name: 'Allopurinol',
//     quantity: 50,
//     price: 600,
//     expiry: 2023,
//     status: true
//   },
//   {
//     id: 105,
//     name: 'Phenytoin',
//     quantity: 63,
//     price: 250,
//     expiry: 2021,
//     status: false
//   }
// ];
// let fData= Data.filter((d , i)=>d.expiry >=2022 && d.status === true);
// let totalprice = fData.reduce((acc , d , i)=> acc+d.price, 0);
// // console.log(totalprice);

// return(

// <div>
//   <table border="1">
//     <tr>
//       <th>Id</th>
//       <th>Name</th>
//       <th>Quantity</th>
//       <th>Price</th>
//       <th>Expiry</th>
//       <th>status</th>
//       <th>Totalprice</th>
//     </tr>

//     {
//       fData.map((d,i)=>{
//         let {id , name , quantity, price, expiry, status } = d;
//         return(
//           <tr key={i}>
//           <td>{id}</td>
//           <td>{name}</td>
//           <td>{quantity}</td>
//           <td>{price}</td>
//           <td>{expiry}</td>
//           <td>{status.toString()}</td>
//           {i === 0 ? <td rowSpan={2}>{totalprice}</td> : null }
//         </tr>
//         )
        
//       }
//     )  }

//   </table>

// </div>
//   )
// }

function App() {
  let Employee =
   [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];
  let eData= Employee.filter((e , i)=> e.status === true);
  let totalrevenue = eData.reduce((acc , e , i)=> acc+e.salary+e.bonus, 0);
  // console.log(totalrevenue);
  
  return (
    <div>
      <table border="1">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Bonus</th>
          <th>Status</th>
          <th>TotalSalary</th>
          <th>Revenue</th>
        </tr>
        {
          eData.map((e, i)=> {
            let {name , age , salary, bonus, status } = e;
            return( 
            <tr key={i}>
             <td>{name}</td>
             <td>{age}</td>
             <td>{salary}</td>
             <td>{bonus}</td>
             <td>{e.status.toString()}</td>
             <td>{e.salary+e.bonus}</td>
                 {i === 0 ? <td rowSpan={4}>{totalrevenue}</td> : null}
              </tr>)
          }
         
           
          )}  
                
      </table>
    </div>
  )
}


export default App;
