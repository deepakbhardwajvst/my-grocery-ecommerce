import Footer from "@/pages/Homepage/Footer/Footer";
import ListingPage from "../../pages/ListingPage/ListingPage";
import Header from "@/Components/Header/Header";

export default function Listing() {
  return (
    <div className="container ">
      <Header />
      <div className="mt-[166px]">
        <ListingPage />
        <Footer />
      </div>
    </div>
  );
}
