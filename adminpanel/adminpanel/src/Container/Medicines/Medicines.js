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


export default function Medicines(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [dopen, setDopen] = React.useState(false);
    const [did, setDid] = useState(0);
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


    const handleInsert = (values) => {
        let id = Math.floor(Math.random() * 1000);

        let data = {
            id: id,
            ...values
        }

        const localData = JSON.parse(localStorage.getItem('Medicines'));
        // console.log(values)

        if (localData === null) {

            localStorage.setItem("Medicines", JSON.stringify([data]));
        }
        else {
            localData.push(data);
            localStorage.setItem("Medicines", JSON.stringify(localData));
        }
        loadData();
        handleClose();
        formikObj.resetForm();
    }

    const handleDelete = (params) => {
        let localData = JSON.parse(localStorage.getItem('Medicines'));
        // console.log(params.id);

        let fData = localData.filter((l) => l.id !== did)

        // console.log(fData);
        localStorage.setItem("Medicines", JSON.stringify(fData));
        loadData();
    }

    const handleUpdate = (values)=>{
        
        const localData = JSON.parse(localStorage.getItem('Medicines'));
        let uData=localData.map((l)=>{
            if(l.id===values.id)
            {
                return values;
            }
            else{
                return l;
            }
        })
        
        localStorage.setItem("Medicines", JSON.stringify(uData));
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


    let schema = yup.object().shape({
        name: yup.string().required(" please enter medicine name"),
        price: yup.string().required(" please enter medicine price"),
        quantity: yup.string().required(" please enter medicine quantity"),
        expiry: yup.string().required(" please enter medicine expiry"),

    });

    const formikObj = useFormik({
        initialValues: {
            name: '',
            price: '',
            quantity: '',
            expiry: '',
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

    const columns = [
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'expiry', headerName: 'Expiry', width: 130 },
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
        loadData();
    }, [])


    const { errors, handleChange, handleSubmit, handleBlur, touched, values } = formikObj
    return (
        <div>


            <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicines
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
                                label="Medicines Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.name && touched.name ? <p>{errors.name}</p> : ''}

                            <TextField
                                value={values.price}
                                margin="dense"
                                id="price"
                                name="price"
                                label="Medicines price"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.price && touched.price ? <p>{errors.price}</p> : ''}


                            <TextField
                                value={values.quantity}
                                margin="dense"
                                id="quantity"
                                name="quantity"
                                label="Medicines quantity"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.quantity && touched.quantity ? <p>{errors.quantity}</p> : ''}

                            <TextField
                                value={values.expiry}
                                margin="dense"
                                id="expiry"
                                name="expiry"
                                label="Medicines expiry"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.expiry && touched.expiry ? <p>{errors.expiry}</p> : ''}
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



