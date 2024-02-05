"use client"
import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import './style.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import QuantityBox from '../../components/quantityBox';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { MyContext } from '@/context/ThemeContext';
import axios from 'axios';

import { useRouter } from 'next/navigation';
import { fetchDataFromApi } from "@/utils/api";
import { deleteData } from '@/utils/api';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const context = useContext(MyContext);
    const history = useRouter();

    useEffect(() => {

        //setCartItems(context.cartItems);
        setCartItems(context.cartItems)

    }, [context.cartItems]);

 
    const updateCart = (items) => {
        setCartItems(items)
    }


    const deleteItem = async (id) => {
        deleteData('/api/cart-datas/',id).then(res=>{
            context.getCartData(`/api/cart-datas`);
        });  
    }


    return (
        <>
            {
                context.windowWidth > 992 && <div className="breadcrumbWrapper mb-4">
                    <div className="container-fluid">
                        <ul className="breadcrumb breadcrumb2 mb-0">
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                Shop
                            </li>
                            <li>
                                Cart
                            </li>
                        </ul>
                    </div>
                </div>

            }


            <section className='cartSection mb-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='d-flex align-items-center w-100'>
                                <div className='left'>
                                    <h1 className='hd mb-0'>Your Cart</h1>
                                    <p>There are <span className='text-g'>{cartItems.length}</span> products in your cart</p>
                                </div>
                            </div>

                            <div className='cartWrapper mt-4'>
                                <div className='table-responsive'>
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                cartItems?.length !== 0 && cartItems?.map((item, index) => {
                                                    return (
                                                        <tr>

                                                            <td width={"50%"}>
                                                                <div className='d-flex align-items-center'>

                                                                    <div className='img'>
                                                                        <Link href={`/product/${item.attributes.productId}`}>
                                                                            <img src={'http://localhost:1337' + item.attributes.imgUrl} className='w-100' />
                                                                        </Link>
                                                                    </div>


                                                                    <div className='info pl-4'>
                                                                        <Link href={`/product/${item.attributes.productId}`}><h4>{item.attributes.productName}</h4></Link>
                                                                        <Rating name="half-rating-read"
                                                                            value={parseFloat(item.attributes.rating)} precision={0.5} readOnly /> <span className='text-light'>({parseFloat(item.attributes.rating)})</span>
                                                                    </div>

                                                                </div>
                                                            </td>

                                                            <td width="20%"><span>Rs:  {item.attributes.price}</span></td>


                                                            <td>
                                                                <QuantityBox item={item} cartItems={cartItems} index={index} updateCart={updateCart} />
                                                            </td>

                                                            <td>
                                                                <span className='text-g'>Rs. {item.attributes.price * parseInt(item.quantity !== NaN && item.quantity !== undefined ? item.quantity : item.attributes.quantity)}</span>
                                                            </td>

                                                            <td align='center'>
                                                                <span className='cursor'
                                                                    onClick={() => deleteItem(item.id)}
                                                                ><DeleteOutlineOutlinedIcon /></span>
                                                            </td>

                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>




                            <div className='d-flex align-items-center'>
                                <Link href="/">
                                    <Button className='btn-g'>
                                        <KeyboardBackspaceIcon /> Continue Shopping</Button>

                                </Link>
                            </div>


                        </div>




                        <div className='col-md-4 cartRightBox'>
                            <div className='card p-4 '>
                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Subtotal</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'><span className='text-g'>
                                        {
                                            cartItems?.length !== 0 &&
                                            cartItems?.map(item => (item.quantity !== NaN && item.quantity !== undefined ? item.quantity : item.attributes.quantity) * item.attributes.price).reduce((total, value) => total + value, 0)
                                        }
                                    </span></h3>
                                </div>

                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Shipping</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'><span >Free</span></h3>
                                </div>


                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Estimate for</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'>United Kingdom</h3>
                                </div>


                                <div className='d-flex align-items-center mb-4'>
                                    <h5 className='mb-0 text-light'>Total</h5>
                                    <h3 className='ml-auto mb-0 font-weight-bold'><span className='text-g'>
                                        {
                                            cartItems?.length !== 0 &&
                                            cartItems?.map(item => (item.quantity !== NaN && item.quantity !== undefined ? item.quantity : item.attributes.quantity) * item.attributes.price).reduce((total, value) => total + value, 0)
                                        }
                                    </span></h3>
                                </div>


                                <br />
                                <Button className='btn-g btn-lg'>Proceed To CheckOut</Button>


                            </div>
                        </div>



                    </div>
                </div>
            </section>

        </>
    )

}

export default Cart;