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

import { addProduct, deleteProduct, getProduct, updateProduct } from '../../../redux/action/product.action';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { getCategory } from '../../../redux/action/category.action';
import { useHistory } from 'react-router-dom';

export default function Product(props) {

    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);
    const [dopen, setDopen] = React.useState(false);
    const [did, setDid] = useState(0);
    const [update, setUpdate] = useState(false);
    const [filterData, setFilterData] = useState([]);
    
  
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product)
    const category = useSelector((state) => state.category)
    const cdata = category.category
   

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

        dispatch(addProduct(values))
        loadData();
        handleClose();
        formikObj.resetForm();
    }

    const handleDelete = (params) => {

        dispatch(deleteProduct(did))

    }

    const handleUpdate = (values) => {


        dispatch(updateProduct(values))
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
        let localData = JSON.parse(localStorage.getItem("Product"));
        // console.log(localData);
        let fData = localData.filter((l) => (
            l.name.toLowerCase().includes(val.toLowerCase()) ||
            l.price.toString().includes(val) ||
            l.quantity.toString().includes(val) ||
            l.discripation.toLowerCase().includes(val.toLowerCase())
        ))
        setFilterData(fData);
    }
    let finaleData = filterData.lenght > 0 ? filterData : data

    let schema = yup.object().shape({
        categoryname: yup.string().required(),
        name: yup.string().required(" please enter product name"),
        price: yup.string().required(" please enter  product  price"),
        quantity: yup.string().required(" please enter product quantity"),
        discripation: yup.string().required(" please enter product discripation"),
        product_img: yup.mixed().required()

    });

    const formikObj = useFormik({
        initialValues: {
            categoryname: '',
            name: '',
            price: '',
            quantity: '',
            discripation: '',
            product_img: ''
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
        { field: 'categoryname', headerName: 'CategoryName', width: 130 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'quantity', headerName: 'Quantity', width: 130 },
        { field: 'discripation', headerName: 'discripation', width: 130 },
        {
            field: 'product_img',
            headerName: 'Product_Image',
            width: 130,
            renderCell: (params) => (
                <img src={params.row.product_img} width={50} height={50} alt='' />
            )
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => (
                <>
                    <IconButton aria-label="delete" size="large" onClick={() => { handleDClickOpen(); setDid(params.row) }}>
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
        let localData = JSON.parse(localStorage.getItem('Product'));

        if (localData !== null) {

            setData(localData);
        }
    }

    useEffect(() => {
        // loadData();
        dispatch(getProduct());
        dispatch(getCategory());
    }, [])


    const { errors, handleChange, handleSubmit, handleBlur, touched, values, setFieldValue } = formikObj
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add Product
            </Button>
            <TextField
                margin="dense"
                id="search"
                name="search"
                label="Product search"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => handleSearch(e.target.value)}
            />

            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={product.product}
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
                        <DialogTitle> Add Product</DialogTitle>
                        <DialogContent>


                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Category"
                                    name='categoryname'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.categoryname}
                                >
                                    <MenuItem value="">Select Category</MenuItem>
                                    {cdata.map((d) => {
                                        return (

                                            <MenuItem value={d.name}>{d.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                            {errors.categoryname && touched.categoryname ? <p>{errors.categoryname}</p> : ''}



                            <TextField
                                value={values.name}
                                margin="dense"
                                id="name"
                                name="name"
                                label="Product Name"
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
                                label="Product price"
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
                                label="Product quantity"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.quantity && touched.quantity ? <p>{errors.quantity}</p> : ''}

                            <TextField
                                value={values.discripation}
                                margin="dense"
                                id="discripation"
                                name="discripation"
                                label="Product discripation"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.discripation && touched.discripation ? <p>{errors.discripation}</p> : ''}

                            <input
                                name="product_img"
                                type="file"
                                onChange={(e) => setFieldValue("product_img", e.target.files[0])}
                            />
                            {errors.product_img && touched.product_img ? <p>{errors.product_img}</p> : ''}

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