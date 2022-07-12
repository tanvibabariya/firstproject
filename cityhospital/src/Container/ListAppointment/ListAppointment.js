import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
    </Box>
);

function ListAppointment(props) {
    const [data, setData] = useState([]);
    const history=useHistory()

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const localData = JSON.parse(localStorage.getItem('apt'));
        console.log(localData);
        setData(localData);
    }

    const handleDelete = (id) => {
        // console.log(id);
        let localData = JSON.parse(localStorage.getItem('apt'));

        let fData = localData.filter((l) => l.id !== id);
        console.log(fData);
        localStorage.setItem("apt", JSON.stringify(fData));
        getData();
    }

    const handleEdit=(id)=>{
        history.push("/appointment",{id});
    }

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>

                    <div className='row'>
                        <div className='col-6 text-center mb-4'>
                            <NavLink to={"/appointment"}>BookAppointment</NavLink>
                        </div>
                        <div className='col-6 text-center mb-4'>
                            <NavLink to={"/listappointment"}>ListAppointment</NavLink>
                        </div>
                    </div>

                    <div className='row '>
                        {
                            data.map((d, i) => {
                                return (
                                    <div className='col-3 mb-5' >
                                        <Card sx={{ minWidth: 275 }}>
                                            <CardContent >

                                                <Typography variant="h5" component="div">
                                                    {d.name}
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                    {d.email}
                                                </Typography>
                                                <Typography variant="body2">
                                                    {d.phone}
                                                    <br />
                                                    {d.date}
                                                    <br/>
                                                    {d.department}

                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" type='submit'onClick={()=>handleEdit(d.id)}>Edit</Button>
                                                <Button size="small" type='submit' onClick={() => handleDelete(d.id)}>Delete </Button>
                                            </CardActions>
                                        </Card>
                                    </div>
                                )

                            })
                        }

                    </div>



                </div>
            </section>
        </div>
    );
}

export default ListAppointment;