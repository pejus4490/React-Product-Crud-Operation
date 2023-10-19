
import { getSingleProduct, updateProduct } from '@/services/product/product.service';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Edit = () => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState();

    const router = useRouter()
    let count = 0
    const id = router.query.id;
   
    const [imagePreviewUrl, setImagePreviewUrl] = useState('');
    const selectedState = (e) => {
        setCountry(e.target.value);
      
      };

      useEffect(() => {
        const getData = async (id) => {
           
                const getAllData = await getSingleProduct(id);
                setData(getAllData);
                // if(!country&&country!=getAllData.countryId){
                //     setCountry(getAllData.countryId);
                //     const dataState = await getStateByCountry(getAllData.countryId);
                //     setStates(dataState);
                // }
                // if(!state&&state!=getAllData.stateId){
                //     setState(getAllData.stateId);
                //     const dataCity = await getCityByState(getAllData.stateId);
                //     setCities(dataCity);
                // }
                // setIsLoading(false);
            
        };
        if (id !== undefined) {
            getData(id);
        }
        

    //  getData()

       


    }, [id]);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

     
        if (type === 'checkbox') {
            setData((prevData) => ({
                ...prevData,
                [name]: checked,
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };
    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            console.log(id)
            const proData = new FormData(e.target)
            const addEmp = await updateProduct(id, proData);
            router.push("/product")
        } catch (error) {
            console.error('Error adding country:', error);
        }
    }

    return (
        <div>
        <div>
        <>
            <div className='product-bg'>
                <section className="content">
                    <div className="container">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Edit Product</h3>
                            </div>
                            <form onSubmit={(e) => handleEdit(e)}>
                                <div className="card-body">

                                    <input type="hidden" name="id" value={data.id} />
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="productname"> ProductName</label>
                                                <div className="col-md-9">
                                                    <input value={data.productName} onChange={(e) => handleChange(e)} className="form-control" type="text" name="Productname" />
                                                </div>
                                            </div>
                                           

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="productdescription">ProductDescription </label>
                                                <div className="col-md-9">
                                                    <input value={data.productDescription} onChange={(e) => handleChange(e)} className="form-control" type="text" name="productdescription" />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="rating">Rating </label>
                                                <div className="col-md-9">
                                                    <input value={data.rating} onChange={(e) => handleChange(e)} className="form-control" type="text" name="rating" />
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="price">Price </label>
                                                <div className="col-md-9">
                                                    <input value={data.price} onChange={(e) => handleChange(e)} className="form-control" type="text" name="price"/>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="barcode">Barcode </label>
                                                <div className="col-md-9">
                                                    <input value={data.barcode} onChange={(e) => handleChange(e)} className="form-control" type="text" name="barcode"/>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="sellPrice">Sell Price </label>
                                                <div className="col-md-9">
                                                    <input value={data.sellPrice} onChange={(e) => handleChange(e)} className="form-control" type="text" name="sellPrice"/>
                                                </div>
                                            </div>

                                            <div className="row mb-2">
                                                <label className="col-md-3 col-form-label" htmlFor="countryId">Country Id </label>
                                                <div className="col-md-9">
                                                    <input value={data.countryId} onChange={(e) => handleChange(e)} className="form-control" type="text" name="countryId"/>
                                                </div>
                                            </div>
                                            {/* <div className="mb-3 col-md-8 d-flex">
                                        <label className="form-label col-md-3">Con Id</label>
                                        <select onChange={(e) => handleChange(e)} type="number" className="form-select" name='countryId' value={.countryId}>
                                         <option value=" " >Select A Country</option>
                                        {
                                            Array.isArray(country) && country.map((val, index) => (
                                            <option key={index} value={val.id}>{val.countryName}</option>
                                            ))
                                             }
                                          </select>
                                        </div> */}


                                        </div>
                                        
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <div className="text-end">
                                        <button type="submit" className="btn btn-outline-primary btn-sm">
                                            <i className="far fa-save"></i> Edit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

        </>
    </div>
    </div>
    );
};

export default Edit;