"use client";

import { MyContext } from "@/context/ThemeContext";
import { useContext, useRef, useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import Link from "next/link";

import Product from "@/components/product";
import axios from "axios";

import { fetchDataFromApi } from "@/utils/api";
import { postData } from "@/utils/api";
import Image from "next/image";

import RelatedProducts from "../RelatedProducts/page";

const ProductDetails = ({ params }) => {
    const [currentProduct, setCurrentProduct] = useState({});
    const [catId, setCatId] = useState();
    const [isAdded, setIsadded] = useState(false);

    const [activeSize, setActiveSize] = useState(null);

    const [activeTabs, setActiveTabs] = useState(0);

    const [rating, setRating] = useState(0.0);

    const [reviewsArr, setReviewsArr] = useState([]);

    //states for product reviews
    const [productReview, setProductReview] = useState();
    const [productReviewUserName, setProductReviewUserName] = useState();
    const [productId, setProductId] = useState();
    const [productReviewDate, setProductReviewDate] = useState();

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        fade: false,
        arrows: context.windowWidth > 992 ? true : false,
    };

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    };

    useEffect(() => {
        getData(`/api/products?populate=*&[filters][id]=${params.productId}`);
        showReviews(
            `/api/product-reviews?populate=*&[filters][productId]=${params.productId}`
        );
    }, []);

    const getData = (url) => {
        fetchDataFromApi(url).then((res) => {
            setCurrentProduct(res.data[0]);
            setCatId(res.data[0].attributes.categories.data[0].id);
        });
    };

    const isActive = (index) => {
        setActiveSize(index);
    };

    const changeInput = (name, value) => {
        if (name === "rating") {
            setRating(value);
        }

        if (name === "userName") {
            setProductReviewUserName(value);
        }

        if (name === "review") {
            setProductReview(value);
        }

        setProductId(params.productId);

        setProductReviewDate(new Date().toLocaleString());
    };

    const submitReview = async (e) => {
        e.preventDefault();

        const formData = {
            data: {
                review: productReview,
                userName: productReviewUserName,
                productId: productId,
                date: productReviewDate,
                rating: rating,
            },
        };

        postData("/api/product-reviews", formData).then((res) => {
            setProductReview("");
            setProductReviewUserName("");
            setRating(0);
            showReviews(
                `/api/product-reviews?populate=*&[filters][productId]=${params.productId}`
            );
        });
    };

    const showReviews = async (url) => {
        fetchDataFromApi(url).then((res) => {
            setReviewsArr(res.data);
        });
    };

    const addToCart = (item) => {
        getCartData(
            `/api/cart-datas?populate=*&[filters][productId]=${params.productId}`,
            item
        );
    };

    const getCartData = (url, item) => {
        fetchDataFromApi(url).then((res) => {
            if (res.data.length === 0) {
                context.addToCart(item);
                setIsadded(true);
            }
        });
    };

    return (
        <>
            {context.windowWidth < 992 && (
                <Button
                    className={`btn-g btn-lg w-100 filterBtn {isAlreadyAddedInCart===true && 'no-click'}`}
                    onClick={() => addToCart(currentProduct)}
                >
                    <ShoppingCartOutlinedIcon />
                    {isAdded === true ? "Added" : "Add To Cart"}
                </Button>
            )}

            <section className="detailsPage mb-5 pt-4">
                <div className="container detailsContainer pt-3 pb-3">
                    <div className="row">
                        {/* productZoom code start here */}
                        <div className="col-md-5">
                            <div className="productZoom">
                                <Slider
                                    {...settings2}
                                    className="zoomSliderBig"
                                    ref={zoomSliderBig}
                                >
                                    {currentProduct?.attributes?.productImages !== undefined &&
                                        currentProduct?.attributes?.productImages?.data?.length !==
                                        0 &&
                                        currentProduct?.attributes?.productImages?.data?.map(
                                            (imgUrl, index) => {
                                                return (
                                                    <div className="item" key={index}>
                                                        <InnerImageZoom
                                                            zoomType="hover"
                                                            zoomScale={1}
                                                            src={`http://localhost:1337${imgUrl.attributes.url}`}
                                                        />
                                                    </div>
                                                );
                                            }
                                        )}
                                </Slider>
                            </div>

                            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                                {currentProduct?.attributes?.productImages !== undefined &&
                                    currentProduct?.attributes?.productImages?.data.length !==
                                    0 &&
                                    currentProduct?.attributes?.productImages?.data?.map(
                                        (imgUrl, index) => {
                                            return (
                                                <div className="item" key={index}>
                                                    <img
                                                        src={`http://localhost:1337${imgUrl.attributes.url}`}
                                                        className="w-100"
                                                        onClick={() => goto(index)}
                                                        alt="productImage"
                                                    />
                                                </div>
                                            );
                                        }
                                    )}
                            </Slider>
                        </div>
                        {/* productZoom code ends here */}

                        {/* product info code start here */}
                        <div className="col-md-7 productInfo">
                            <h1>{currentProduct?.attributes?.name}</h1>
                            <div className="d-flex align-items-center mb-4 mt-3">
                                <Rating
                                    name="half-rating-read"
                                    value={parseFloat(currentProduct?.attributes?.rating)}
                                    precision={0.5}
                                    readOnly
                                />
                                <span className="text-dark ml-2">
                                    ({reviewsArr.length} reviews)
                                </span>
                            </div>

                            <div className="priceSec d-flex align-items-center mb-3">
                                <span className="text-g priceLarge">
                                    Rs {currentProduct?.attributes?.price}
                                </span>
                                <div className="ml-3 d-flex flex-column">
                                    <span className="text-org">
                                        {currentProduct?.attributes?.discount}% Off
                                    </span>
                                    <span className="text-light oldPrice">
                                        Rs {currentProduct?.attributes?.oldPrice}
                                    </span>
                                </div>
                            </div>

                            <p className="mb-5" style={{ fontSize: "25px" }}>
                                {currentProduct?.attributes?.description}
                            </p>

                            {currentProduct?.attributes?.product_rams !== undefined &&
                                currentProduct?.attributes?.product_rams?.data?.length !==
                                0 && (
                                    <>
                                        <div className="productSize d-flex align-items-center pt-0">
                                            <span>RAM:</span>
                                            <ul className={`list list-inline mb-0 pl-4`}>
                                                {currentProduct?.attributes.product_rams !==
                                                    undefined &&
                                                    currentProduct?.attributes.product_rams.data.map(
                                                        (prodRam, index) => {
                                                            return (
                                                                <li className="list-inline-item">
                                                                    <a
                                                                        className={`tag ${activeSize === index ? "active" : ""
                                                                            }`}
                                                                        onClick={() => isActive(index)}
                                                                    >
                                                                        {prodRam.attributes.ram}
                                                                    </a>
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                            </ul>
                                        </div>
                                    </>
                                )}

                            {currentProduct?.attributes?.product_weights !== undefined &&
                                currentProduct?.attributes?.product_weights?.data.length !==
                                0 && (
                                    <div className="productSize d-flex align-items-center">
                                        <span>Size / Weight:</span>
                                        <ul className="list list-inline mb-0 pl-4">
                                            {currentProduct?.attributes?.product_weights !==
                                                undefined &&
                                                currentProduct?.attributes?.product_weights?.data?.map(
                                                    (prodWeight, index) => {
                                                        return (
                                                            <li className="list-inline-item">
                                                                <a
                                                                    className={`tag ${activeSize === index ? "active" : ""
                                                                        }`}
                                                                    onClick={() => isActive(index)}
                                                                >
                                                                    {prodWeight.attributes.weight}
                                                                </a>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                        </ul>
                                    </div>
                                )}

                            {currentProduct?.attributes?.fashion_product_sizes !==
                                undefined &&
                                currentProduct?.attributes.fashion_product_sizes?.data
                                    ?.length !== 0 && (
                                    <div className="productSize d-flex align-items-center">
                                        <span>Size :</span>
                                        <ul className="list list-inline mb-0 pl-4">
                                            {currentProduct?.attributes?.fashion_product_sizes !==
                                                undefined &&
                                                currentProduct?.attributes?.fashion_product_sizes1?.data?.map(
                                                    (prodSize, index) => {
                                                        return (
                                                            <li className="list-inline-item">
                                                                <a
                                                                    className={`tag ${activeSize === index ? "active" : ""
                                                                        }`}
                                                                    onClick={() => isActive(index)}
                                                                >
                                                                    {prodSize.attributes.size}
                                                                </a>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                        </ul>
                                    </div>
                                )}

                            <div className="d-flex align-items-center mt-5">
                                <div className="d-flex align-items-center">
                                    {context.windowWidth > 992 && (
                                        <Button
                                            className={`btn-g btn-lg addtocartbtn`}
                                            onClick={() => addToCart(currentProduct)}
                                        >
                                            <ShoppingCartOutlinedIcon />
                                            {isAdded === true ? "Added" : "Add To Cart"}
                                        </Button>
                                    )}
                                    <Button className=" btn-lg addtocartbtn  ml-3  wishlist btn-border">
                                        <FavoriteBorderOutlinedIcon />{" "}
                                    </Button>
                                    <Button className=" btn-lg addtocartbtn ml-3 btn-border">
                                        <CompareArrowsIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* product info code ends here */}
                    </div>

                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button
                                        className={`${activeTabs === 0 && "active"}`}
                                        onClick={() => {
                                            setActiveTabs(0);
                                        }}
                                    >
                                        Description
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button
                                        className={`${activeTabs === 1 && "active"}`}
                                        onClick={() => {
                                            setActiveTabs(1);
                                        }}
                                    >
                                        Additional info
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button
                                        className={`${activeTabs === 2 && "active"}`}
                                        onClick={() => {
                                            setActiveTabs(2);
                                        }}
                                    >
                                        Reviews (3)
                                    </Button>
                                </li>
                            </ul>

                            <br />

                            {activeTabs === 0 && (
                                <div className="tabContent">
                                    <p>{currentProduct?.attributes?.description}</p>
                                </div>
                            )}


                        </div>
                    </div>

                    <br />

                    {catId !== undefined && (
                        <RelatedProducts prodId={params.productId} catId={catId} />
                    )}
                </div>
            </section>
        </>
    );
};

export default ProductDetails;
