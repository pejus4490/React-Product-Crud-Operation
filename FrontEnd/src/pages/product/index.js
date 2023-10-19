
import { deleteProduct, getProduct, getSearchData } from '@/services/product/product.service';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {  Button, Table } from 'react-bootstrap';

const Product = () => {
    const [data, setData] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [limit, setLimit] = useState(2);

    
  useEffect(() => {
    const getData = async () => {
      const getAllData = await getProduct(0, limit);
      setData(getAllData);
      setPageCount(getAllData.totalPage);

    };
    getData();
  }, [limit]);

  const handlePageClick = async (index) => {
    const newPage = index.selected;
    setCurrentPage(newPage);
    const employees = await getEmployee(newPage, limit);
    setData(employees);
  };

  const handleShowItem = (e) => {
    setLimit(e.target.value);
    setCurrentPage(0);
  };

  

const handleDelete = async (id) => {
  const confirm = window.confirm("Are you sure to delete this product?");
  if (confirm) {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.error("Error deleting country:", error);
    }
  }
};


    return (
        <div>
      <div className="emp-bg">
        <div className="my-3">
          <div className="container">
            <div className="card">
              <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h1 className="display-6 mb-3">Product List</h1>
                  </div>
                  <div>
                    <Link
                      className="btn btn-outline-primary btn-sm"
                      href={"/product/create"}
                    >
                      {" "}
                      Add Product
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between my-3">
                  <div>
                    <div>
                      <span className="me-3"> Show</span>
                      <select
                        onChange={(e) => handleShowItem(e)}
                        className="form-control-sm"
                      >
                        <option value="2">2</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </div>
                  </div>
               
                </div>
                <div className="product-table">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th> ProductName </th>
                        <th>ProductDescription </th>
                        <th>Rating </th>
                        <th>Price </th>
                        <th>BarCode</th>
                        <th>SellPrice</th>
                        <th>CountryId</th>
                        
                        <th>Action</th>
                     


                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((da, index) => {
                       
                        return (
                          <tr key={index}>
                           <td> {da.id} </td>
                            <td> {da.productName} </td>

                            <td> {da.productDescription} </td>
                            <td> {da.rating} </td>

                            <td> {da.price} </td>
                            <td> {da.barcode} </td>
                            <td> {da.sellPrice} </td>
                            <td> {da.countryId} </td>
                            

                           
                            <td>
                              <Link
                                href={`product/edit/${da.id}`}
                                className="btn btn-sm me-3 btn-success"
                              >
                                {" "}
                                Edit{" "}
                              </Link>
                              <Link
                                href={`product /details/${da.id}`}
                                className="btn btn-sm me-3 btn-primary"
                              >
                                {" "}
                                Details{" "}
                              </Link>
                              <Button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDelete(da.id)}
                              >
                                Delete
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                  <div className="text-end">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Product;