"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./style.css";
import { DeleteOutlineOutlinedIcon } from "@mui/icons-material/DeleteOutlineOutlined";
import { Rating } from "@mui/material/Rating";
import { Button } from "@mui/material";

import { useRouter } from "next/navigation";

import { KeyboardBackspaceIcon } from "@mui/icons-material/KeyboardBackspace";

const Carts = () => {
    const [cartItems, setCartItems] = useState([]);

    const history = useRouter();

    const updateCart = (items) => {
        setCartItems(items);
    };

    const deleteItem = async (id) => { };

    return (
        <>

            <div className="breadcrumbWrapper mb-4">
                <div className="container-fluid">
                    <ul className="breadcrumb breadcrumb2 mb-0">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>Shop</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>


            <section className="cartSection mb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="d-flex align-items-center w-100">
                                <div className="left">
                                    <h1 className="hd mb-0">Your Cart</h1>
                                    <p>
                                        There are <span className="text-g">{cartItems.length}</span>{" "}
                                        products in your cart
                                    </p>
                                </div>
                            </div>

                            <div className="cartWrapper mt-4">
                                <div className="table-responsive">
                                    <table className="table">



                                    </table>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <Link href="/">
                                    <Button className="btn-g">
                                        <KeyboardBackspaceIcon /> Continue Shopping
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-4 cartRightBox">
                            <div className="card p-4 ">
                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="mb-0 text-light">Subtotal</h5>
                                    <h3 className="ml-auto mb-0 font-weight-bold">
                                        <span className="text-g">

                                        </span>
                                    </h3>
                                </div>

                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="mb-0 text-light">Shipping</h5>
                                    <h3 className="ml-auto mb-0 font-weight-bold">
                                        <span>Free</span>
                                    </h3>
                                </div>

                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="mb-0 text-light">Estimate for</h5>
                                    <h3 className="ml-auto mb-0 font-weight-bold">
                                        United Kingdom
                                    </h3>
                                </div>

                                <div className="d-flex align-items-center mb-4">
                                    <h5 className="mb-0 text-light">Total</h5>
                                    <h3 className="ml-auto mb-0 font-weight-bold">
                                        <span className="text-g">

                                        </span>
                                    </h3>
                                </div>

                                <br />
                                <Button className="btn-g btn-lg">
                                    TopProductsceed To CheckOut
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Carts;
