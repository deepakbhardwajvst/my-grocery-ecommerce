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

                            {activeTabs === 1 && (
                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr class="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 18.5″W x 16.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″L x 24″W x 18.5″H</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>60 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr class="width">
                                                    <th>Width</th>
                                                    <td>
                                                        <p>24″</p>
                                                    </td>
                                                </tr>
                                                <tr class="handle-height-ground-to-handle">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45″</p>
                                                    </td>
                                                </tr>
                                                <tr class="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12″ air / wide track slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr class="seat-back-height">
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>21.5″</p>
                                                    </td>
                                                </tr>
                                                <tr class="head-room-inside-canopy">
                                                    <th>Head room (inside canopy)</th>
                                                    <td>
                                                        <p>25″</p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_color">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red, White</p>
                                                    </td>
                                                </tr>
                                                <tr class="pa_size">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M, S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {activeTabs === 2 && (
                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Customer questions & answers</h3>
                                            <br />

                                            {reviewsArr.length !== 0 &&
                                                reviewsArr.map((item, index) => {
                                                    return (
                                                        <div
                                                            className="card p-4 reviewsCard flex-row"
                                                            key={index}
                                                        >
                                                            <div className="image">
                                                                <div className="rounded-circle">
                                                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                                                                </div>
                                                                <span className="text-g d-block text-center font-weight-bold">
                                                                    {item.attributes.userName}
                                                                </span>
                                                            </div>

                                                            <div className="info pl-5">
                                                                <div className="d-flex align-items-center w-100">
                                                                    <h5 className="text-dark">
                                                                        {item.attributes.date}
                                                                    </h5>
                                                                    <div className="ml-auto">
                                                                        <Rating
                                                                            name="half-rating-read"
                                                                            value={parseFloat(item.attributes.rating)}
                                                                            precision={0.5}
                                                                            readOnly
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <p>{item.attributes.review} </p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                            <br className="res-hide" />

                                            <br className="res-hide" />

                                            <form className="reviewForm" onSubmit={submitReview}>
                                                <h4>Add a review</h4> <br />
                                                <div className="form-group">
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Write a Review"
                                                        name="review"
                                                        value={productReview}
                                                        onChange={(e) =>
                                                            changeInput(e.target.name, e.target.value)
                                                        }
                                                    ></textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                value={productReviewUserName}
                                                                className="form-control"
                                                                placeholder="Name"
                                                                name="userName"
                                                                onChange={(e) =>
                                                                    changeInput(e.target.name, e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating
                                                                name="rating"
                                                                value={rating}
                                                                precision={0.5}
                                                                onChange={(e) =>
                                                                    changeInput(e.target.name, e.target.value)
                                                                }
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="form-group">
                                                    <Button type="submit" className="btn-g btn-lg">
                                                        Submit Review
                                                    </Button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-md-4 pl-5 reviewBox">
                                            <h4>Customer reviews</h4>

                                            <div className="d-flex align-items-center mt-2">
                                                <Rating
                                                    name="half-rating-read"
                                                    defaultValue={4.5}
                                                    precision={0.5}
                                                    readOnly
                                                />
                                                <strong className="ml-3">4.8 out of 5</strong>
                                            </div>

                                            <br />

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">5 star</span>
                                                <div
                                                    class="progress"
                                                    style={{ width: "85%", height: "20px" }}
                                                >
                                                    <div
                                                        class="progress-bar bg-success"
                                                        style={{ width: "75%", height: "20px" }}
                                                    >
                                                        75%
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">4 star</span>
                                                <div
                                                    class="progress"
                                                    style={{ width: "85%", height: "20px" }}
                                                >
                                                    <div
                                                        class="progress-bar bg-success"
                                                        style={{ width: "50%", height: "20px" }}
                                                    >
                                                        50%
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">3 star</span>
                                                <div
                                                    class="progress"
                                                    style={{ width: "85%", height: "20px" }}
                                                >
                                                    <div
                                                        class="progress-bar bg-success"
                                                        style={{ width: "55%", height: "20px" }}
                                                    >
                                                        55%
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">2 star</span>
                                                <div
                                                    class="progress"
                                                    style={{ width: "85%", height: "20px" }}
                                                >
                                                    <div
                                                        class="progress-bar bg-success"
                                                        style={{ width: "35%", height: "20px" }}
                                                    >
                                                        35%
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">1 star</span>
                                                <div
                                                    class="progress"
                                                    style={{ width: "85%", height: "20px" }}
                                                >
                                                    <div
                                                        class="progress-bar bg-success"
                                                        style={{ width: "25%", height: "20px" }}
                                                    >
                                                        25%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
