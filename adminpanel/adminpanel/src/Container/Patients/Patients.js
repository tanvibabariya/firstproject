import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function Patients(props) {
    const [open, setOpen] = React.useState(false);
    const [data,setData]=useState([])
    const [dopen, setDopen] = React.useState(false);
    const [did,setDid]=useState(0);
    const [update, setUpdate] = useState(false);

    const handleDClickOpen = () => {
        setDopen(true);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDopen(false);
    };


    const handleInsert=(values)=>{
        let id = Math.floor(Math.random() * 1000);

        let data = {
            id: id,
            ...values
        }

        const localData=JSON.parse(localStorage.getItem('patients'));
        // console.log(localData);
        if(localData===null)
        {
            localStorage.setItem('patients',JSON.stringify([data]));
        }
        else{
            localData.push(data);
            localStorage.setItem('patients',JSON.stringify(localData));
        }
        loadData();
        handleClose();
        formikObj.resetForm();
    }


    const  handleDelete=(params)=>{
        
        const localData=JSON.parse(localStorage.getItem('patients'));
        // console.log(params.id);
        let fData = localData.filter((l) => l.id !== did)

        // console.log(fData);
        localStorage.setItem("patients", JSON.stringify(fData));
        loadData();

    }

    const handleEdit=(params)=>{
        handleClickOpen();
        console.log(params);
        setUpdate(true);
        formikObj.setValues(params.row);

    }

    const handleUpdate = (values)=>{
        
        const localData = JSON.parse(localStorage.getItem('patients'));
        let uData=localData.map((l)=>{
            if(l.id===values.id)
            {
                return values;
            }
            else{
                return l;
            }
        })
        
        localStorage.setItem("patients", JSON.stringify(uData));
        setUpdate(false);
        loadData();
        handleClose();
        formikObj.resetForm();
        
    }

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        age: yup.number().required("please enter age").positive().integer(),
        phone: yup.number().required("please enter phone").positive().integer(),
        address: yup.string().required("please enter address"),
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            age: '',
            phone: '',
            address: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if(update){
                handleUpdate(values);
            }
            else{

                handleInsert(values);
            }
        },
    });

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem('patients'));

        if (localData !== null) {

            setData(localData);
        }
    }


    useEffect(() => {
        loadData();
    }, [])

    let { handleBlur, handleChange, handleSubmit, errors, touched,values } = formikObj

    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'age', headerName: 'Age', width: 70 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'address', headerName: 'Address', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" size="large" onClick={() => { handleDClickOpen(); setDid(params.id) }}>
                        <DeleteIcon />
                    </IconButton>

                     <IconButton aria-label="delete" size="large" onClick={() => handleEdit(params)}>
                        <EditIcon />
                    </IconButton> 
                </>

            )

        }
       
    ];

   

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Patients Details
            </Button>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

            <Dialog
                open={dopen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are You Sure to delete?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleDelete} autoFocus>
                        
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle>Add Patients</DialogTitle>
                <Formik values={formikObj}>
                    <Form onSubmit={handleSubmit}>
                        <DialogContent>

                            <TextField
                             value={values.name}
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? <p>{errors.name}</p> : ''}

                            <TextField
                             value={values.age}
                                margin="dense"
                                id="age"
                                label="Age"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.age && touched.age ? <p>{errors.age}</p> : ''}


                            <TextField
                             value={values.phone}
                                margin="dense"
                                id="phone"
                                label="Phone "
                                type="phone"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.phone && touched.phone ? <p>{errors.phone}</p> : ''}

                            <TextField
                             value={values.address}
                                margin="dense"
                                id="address"
                                label="Address"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.address && touched.address ? <p>{errors.address}</p> : ''}


                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            {
                                update ?
                                <Button type='submit'>Update</Button>
                                :
                            <Button type='submit'>Save</Button>
                            }
                        </DialogActions>
                    </Form>
                </Formik>
            </Dialog>
        </div>
    );
}

export default Patients;