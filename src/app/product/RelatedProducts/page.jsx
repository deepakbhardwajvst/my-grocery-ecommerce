import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";

import { MyContext } from "@/context/ThemeContext";
import { fetchDataFromApi } from "@/utils/api";

import Product from "@/components/product";

const RelatedProducts = (props)=>{

    const [relatedProducts, setRelatedProducts] = useState([]);
    const context = useContext(MyContext);

    var related = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: context.windowWidth > 992 ? true : false
    };


    useEffect(()=>{
        getRelatedProducts(`/api/products?populate=*&[filters][id][$ne]=${props.prodId}&[filters][categories][id]=${props.catId}`);
    },[]);


    const getRelatedProducts=(url)=>{
        fetchDataFromApi(url).then(res => {
            setRelatedProducts(res.data);
        })
    }

    return(
        <>
          <div className='relatedProducts homeProductsRow2  pt-5 pb-4'>
                        <h2 class="hd mb-0 mt-0">Related products</h2>
                        <br className='res-hide' />
                        <Slider {...related} className='prodSlider'>

                            {

                                relatedProducts.length !== 0 &&
                                relatedProducts.map((product, index) => {
                                    return (
                                        <div className='item' key={index}>
                                            <Product item={product} itemId={product.id}   />
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>

        </>
    )
}

export default RelatedProducts;