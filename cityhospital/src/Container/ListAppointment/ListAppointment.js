import React from 'react';
import { NavLink } from 'react-router-dom';


function ListAppointment(props) {
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
                </div>
            </section>
        </div>
    );
}

export default ListAppointment;