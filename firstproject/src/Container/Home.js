import React from 'react';

function Home({data}) {
    console.log(data);
    return (
        <div>
            {
                data.map((d,i)=>{
                   return(
                    <div key={i}>
                    <h2>{d.id}</h2>
                    <h2>{d.name}</h2>
                    </div>
                   )
                })
            }
        </div>
    );
}

export default Home;