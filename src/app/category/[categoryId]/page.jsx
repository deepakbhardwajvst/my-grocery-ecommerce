"use client"

import { useContext, useEffect, useState } from "react";
import { MyContext } from "@/context/ThemeContext";
import { Button } from '@mui/material';
import Link from "next/link";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Sidebar from "@/components/Sidebar";
import { fetchDataFromApi } from "@/utils/api";
import Product from "@/components/product";

import noData from '../../../assets/images/noData.webp';
import Image from "next/image";

const ProductListingPage = ({ params }) => {

    const [catData, setcatData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [productsData2, setProductsData2] = useState([]);

    const context = useContext(MyContext);

    useEffect(() => {
        getCat("/api/categories?populate=*");
        getData(`/api/products?populate=*&[filters][categories][title]=${params.categoryId}`);
    }, []);


    const getCat = (apiUrl) => {
        fetchDataFromApi(apiUrl).then(res => {
            setcatData(res.data);
        })
    }

    const getData = (url) => {
        fetchDataFromApi(url).then(res => {
           
            setProductsData(res.data)
            setProductsData2(res.data)
        })
    }

    const filterByRating = (keyword) => {
        getData(`/api/products?populate=*&[filters][categories][title]=${params.categoryId}&[filters][rating]=${keyword}`);
    }

    var filterArr = [];
    const filterByPrice = ([min, max]) => {
        filterArr = [];
        productsData2.length !== 0 && productsData2.map((item) => {
            var price = parseInt(item.attributes.price);
            if (min <= price && max >= price) {
                filterArr.push(item);
            }
        })

        setProductsData(filterArr)
    }

    return (
        <>
            {
                context.windowWidth < 992 &&
                <Button className='btn-g btn-lg w-100 filterBtn' onClick={() => context.openFilters()}>Filters</Button>
            }

            <section className='listingPage'>
                <div className='container-fluid'>

                    {
                        <div className='breadcrumb flex-column'>
                            <h1 className="text-capitalize">{params.categoryId.split('-').join(' ')} </h1>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Link href={''}>Home </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link href={`/${sessionStorage.getItem('cat')}`} className='text-capitalize'>{params.categoryId} </Link>
                                </li>

                            </ul>
                        </div>

                    }



                    <div className='listingData'>
                        <div className='row'>
                            <div className={`col-md-3 sidebarWrapper ${context.isOpenFilters === true && 'click'}`}>
                                {
                                    catData?.length !== 0 &&
                                    <Sidebar catData={catData}
                                        filterByRating={filterByRating}
                                        filterByPrice={filterByPrice} />
                                }

                            </div>


                            <div className='col-md-9 rightContent homeProducts pt-0'>

                                <div className='topStrip d-flex align-items-center pt-3'>
                                    <p className='mb-0'>We found <span className='text-success'>{productsData.length}</span> items for you!</p>
                                  
                                </div>


                                <div className='productRow pl-4 pr-3'>




                                    {
                                        productsData.length !== 0 ?
                                            productsData.map((item, index) => {
                                                return (
                                                    <div className='item' key={index}>
                                                        <Product item={item}  itemId={item.id}  />
                                                    </div>
                                                )
                                            })

                                            :

                                            <div className="noData text-center w-100 pt-5 mt-5">
                                                <Image src={noData} alt="nodata" />
                                            </div>
                                    }


                                </div>


                            </div>

                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default ProductListingPage;