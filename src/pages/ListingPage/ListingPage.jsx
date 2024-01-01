import Breadcrump from "./Breadcrump/Breadcrump";
import FilterBar from "./FilterBar/FilterBar";
import Products from "./Products/Products";

const ListingPage = () => {
  return (
    <>
      <Breadcrump />
      <div className="flex">
        <div className="w-[20%]">
          <FilterBar />
        </div>
        <div className="w-[80%]">
          <Products />
        </div>
      </div>
    </>
  );
};

export default ListingPage;
