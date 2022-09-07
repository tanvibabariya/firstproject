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
import { useDispatch, useSelector } from 'react-redux';
import { deletemedicines, updatemedicines } from '../../redux/action/medicine.action';
import { addDoctors, getDoctors } from '../../redux/action/doctors.action';

function Doctors(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [dopen, setDopen] = React.useState(false);
    const [did, setDid] = useState(0);
    const [update, setUpdate] = useState(false);
    const [filterData, setFilterData] = useState([]);

    const dispatch = useDispatch();
    const doctors = useSelector(state => state.doctors);
    // console.log(medicines.medicines);

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


    const handleInsert = (values) => {
        // let id = Math.floor(Math.random() * 1000);

        // let data = {
        //     id: id,
        //     ...values
        // }

        dispatch(addDoctors(values))

        // const localData = JSON.parse(localStorage.getItem('Medicines'));
        // // console.log(values)

        // if (localData === null) {

        //     localStorage.setItem("Medicines", JSON.stringify([data]));
        // }
        // else {
        //     localData.push(data);
        //     localStorage.setItem("Medicines", JSON.stringify(localData));
        // }
        loadData();
        handleClose();

    }

    const handleDelete = () => {

        dispatch(deletemedicines(did))
        // let localData = JSON.parse(localStorage.getItem('Medicines'));
        // // console.log(params.id);

        // let fData = localData.filter((l) => l.id !== did)

        // // console.log(fData);
        // localStorage.setItem("Medicines", JSON.stringify(fData));
        loadData();
        handleClose();
    }

    const handleUpdate = (values) => {

        // const localData = JSON.parse(localStorage.getItem('Medicines'));
        // let uData = localData.map((l) => {
        //     if (l.id === values.id) {
        //         return values;
        //     }
        //     else {
        //         return l;
        //     }
        // })

        dispatch(updatemedicines(values))

        // localStorage.setItem("Medicines", JSON.stringify(uData));
        setUpdate(false);
        loadData();
        handleClose();
        formikObj.resetForm();

    }


    const handleEdit = (params) => {
        handleClickOpen();
        console.log(params);
        setUpdate(true);
        formikObj.setValues(params.row);

    }
    const handleSearch = (val) => {
        // console.log(val);
        let localData = JSON.parse(localStorage.getItem("Medicines"));
        let fData = localData.filter((l) => (
            l.name.toLowerCase().includes(val.toLowerCase()) ||
            l.apt.toString().includes(val) ||
            l.degree.toString().includes(val) 
        ))
        setFilterData(fData);
    }
    const finaleData = filterData.length > 0 ? filterData : data

    let schema = yup.object().shape({
        name: yup.string().required(" please enter doctor name"),
        apt: yup.string().required(),
        degree: yup.string().required(" please enter doctor degree")
    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            apt: '',
            degree: '', 
        },
        validationSchema: schema,
        onSubmit: values => {
            if (update) {
                handleUpdate(values);
            }
            else {
                handleInsert(values);
            }

        },
    });

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'apt', headerName: 'APT', width: 130 },
        { field: 'degree', headerName: 'Degree', width: 130 },
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

    const loadData = () => {
        let localData = JSON.parse(localStorage.getItem('Medicines'));

        if (localData !== null) {

            setData(localData);
        }
    }


    useEffect(() => {
        // loadData();
        dispatch(getDoctors());
    }, [])



    const { errors, handleChange, handleSubmit, handleBlur, touched, values } = formikObj
    return (
        // doctors.isLoading ?
        //     <p>Loading...</p> :
            // doctors.error != '' ?
            //     <p>{doctors.error}</p>
            //     :
                <div>
                    <Button variant="outlined" onClick={handleClickOpen}>
                        Add Doctors
                    </Button>

                    <h1>Doctors</h1>


                    <TextField
                        margin="dense"
                        id="search"
                        name="search"
                        label=" Search Doctors"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={doctors.doctors}
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


                    <Dialog open={open} onClose={handleClose}>
                        <Formik values={formikObj}>
                            <Form onSubmit={handleSubmit}>
                                <DialogTitle> Add Medicines</DialogTitle>
                                <DialogContent>

                                    <TextField
                                        value={values.name}
                                        margin="dense"
                                        id="name"
                                        name="name"
                                        label="Doctors Name"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name ? <p>{errors.name}</p> : ''}

                                    <TextField
                                        value={values.degree}
                                        margin="dense"
                                        id="degree"
                                        name="degree"
                                        label="Degree"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.degree && touched.degree ? <p>{errors.degree}</p> : ''}


                                    <TextField
                                        value={values.apt}
                                        margin="dense"
                                        id="apt"
                                        name="apt"
                                        label="APT"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.apt && touched.apt ? <p>{errors.apt}</p> : ''}


                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    {
                                        update ?
                                            <Button type='submit'>update</Button>
                                            :
                                            <Button type='submit'>submit</Button>
                                    }
                                </DialogActions>
                            </Form>
                        </Formik>
                    </Dialog>

                </div>
    );

}

export default Doctors;