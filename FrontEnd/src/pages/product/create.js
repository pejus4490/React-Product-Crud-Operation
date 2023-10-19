

import { GetAllCountry, addProduct } from '@/services/product/product.service';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const Create = () => {
    const [country, setCountry] = useState([]);
    const router= useRouter();
   const [formdata, setFormData]= useState([]);
   const [imagePreviewUrl, setImagePreviewUrl] = useState("");
   useEffect(() => {
    const getCountry = async () => {
        setCountry(await GetAllCountry())
    }
    getCountry();
}, []);
 
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        if (type === "file") {
            const selectedImage = files[0];
            if (selectedImage) {
              const reader = new FileReader();
              reader.onload = (e) => {
                setImagePreviewUrl(e.target.result);
              };
              reader.readAsDataURL(selectedImage);
            }
          }
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const data = new FormData(e.target)
           
            const addEmp = await addProduct(data);
            e.target.reset()
            router.push("/product")
        } catch (error) {
            console.error('Error adding:', error); 
        }


    }

    return (
        <div>
           <div className='emp-bg'>
            <section className="content">
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Add New Product</h3>
                        </div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="card-body">

                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <div className="row mb-2">
                                            <label className="col-md-3 col-form-label" htmlFor="name"> ProductName</label>
                                            <div className="col-md-9">
                                                <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="Productname" />
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <label className="col-md-3 col-form-label" htmlFor="description">ProductDescription</label>
                                            <div className="col-md-9">
                                                <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="Productdescription" />
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <label className="col-md-3 col-form-label" htmlFor="rating">Rating </label>
                                            <div className="col-md-9">
                                                <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="rating" />
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <label className="col-md-3 col-form-label" htmlFor="price">Price </label>
                                            <div className="col-md-9">
                                                <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="price" />
                                            </div>
                                        </div>

                                        <div className="row mb-2">
                                            <label className="col-md-3 col-form-label" htmlFor="barcode">BarCode</label>
                                            <div className="col-md-9">
                                                <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="barcode" />   
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <label className="col-md-3 col-form-label" htmlFor="sellPrice">Sell Price</label>
                                            <div className="col-md-9">
                                                <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="sellPrice" />   
                                            </div>
                                        </div>
                                        
                                        <div className="row mb-2">
                                            <label className="col-md-3 col-form-label" htmlFor="countryId">Country Id</label>
                                            <div className="col-md-9">
                                                <input onChange={(e) => handleChange(e)} className="form-control" type="text" name="countryId" />   
                                            </div>
                                        </div> 

                                                

                                   
                                    </div>
                                  
                                </div>
                            </div>

                            <div className="card-footer">
                                <div className="text-end">
                                    <button type="submit" className="btn btn-outline-primary btn-sm">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

export default Create;