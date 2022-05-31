import logo from './logo.svg';
import './App.css';

// const person = {
//   name: "Amit",
//   age: 25
// }
// console.log(person.name , person.age);


// const person = [
//   {
//       name: "Amit",
//       age: 25,
//   },
//   {
//       name: "Piyush",
//       age: 40,
//   },


// ]; 

// person.map((p)=>{
//   console.log(p.name , p.age);
// })

// const person = {
//   name: "Amit",
//   age: 25,
//   course: [
//       "C",
//       "HTML"
//   ]
// }

// console.log(person.name , person.age);
// person.course.map((p)=>{
//   console.log(p);
// });


// const person = [
//   {
//       name: "Amit",
//       age: 25,
//       course: [
//           "C",
//           "HTML"
//       ]
//   },
//   {
//       name: "Ajay",
//       age: 40,
//       course: [
//           "Java",
//           "JavaScript"
//       ]
//   }
// ]

// person.map((p)=>{
//   console.log(p.name ,p.age , p.course[0] , p.course[1]);
// });


// const myObj = {
//   name: "John",
//   age: 30,
//   cars: {
//       car1: "Ford",
//       car2: "BMW",
//       car3: "Fiat"
//   }
// }

// for(let k in myObj){
//   if(myObj[k] === myObj.cars){

//      for(let i in myObj.cars)
//      {

//        console.log(myObj.cars[i]);
//      }
//   }
//   else
//   {
//     console.log(myObj[k]);

//   }
// }

let data = {
  personal_info: {
    name: 'amit',
    age: 25,
    city: 'surat'
  },
  courses: ["C", "Javascript", "React"],
  branches: {
    rw1: {
      admission: 50,
      vacant_seat: 10
    },
    rw2: {
      admission: 30,
      vacant_seat: 20
    },
    rw3: {
      admission: 25,
      vacant_seat: 25
    },
    rw4: {
      admission: 40,
      vacant_seat: 10
    }
  }
}

for (let i in data.personal_info) {
  console.log(data.personal_info[i]);

}
for (let j in data.courses) {
  console.log(data.courses[j]);

}
for (let k in data.branches) {
  console.log(data.branches[k].admission, data.branches[k].vacant_seat);

}





function App() {
  return (
    <>Demo</>
  );
}

export default App;
