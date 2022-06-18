import React from 'react';

function Hom1({data}) {
    // console.log(data);
    
const fdata= data.filter((e , i)=>e.salary>25000);
    return (
        <div>
             <table border='1px'>
                <tr>
                     <th>Id</th>
                     <th>Name</th>
                     <th>Joining_date</th>
                     <th>Salary</th>
                </tr>

                {
                    fdata.map((e, i) => {
                        let { id, name, joining_date, salary } = e;
                        return (
                            <tr key={i}>
                                <th>{id}</th>
                                <th>{name}</th>
                                <th>{joining_date}</th>
                                <th>{salary}</th>
                            </tr>
                        )
                    })
                }

            </table>
        </div>
    );
}

export default Hom1;

// function Hom1(props) {
    
//    const EmployeeData=
//     return (
//         <div>
//            

//         </div>
//     );
// }

