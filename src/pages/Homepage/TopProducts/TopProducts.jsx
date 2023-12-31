import TopProductsCard from "./TopProductsCard/TopProductsCard";

const TopProducts = () => {
  const data = [
    {
      title: "Top Selling",
      carddetail: [
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
      ],
    },
    {
      title: "Trending Products",
      carddetail: [
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
      ],
    },
    {
      title: "Recently added",
      carddetail: [
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
      ],
    },
    {
      title: "Top Rated",
      carddetail: [
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
        {
          img: "/images/thumbnail-1.jpg",
          heading: "Nestle Original Coffee-Mate Coffee Creamer",
          rating: 4,
          currentPrice: 80,
          normalPrice: 100,
        },
      ],
    },
  ];
  return (
    <section className="top-products-section ">
      <div className="top-product-container flex gap-2">
        {data.map((section, index) => (
          <div key={index} className="flex mt-5 ">
            <TopProductsCard data={section} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopProducts;
