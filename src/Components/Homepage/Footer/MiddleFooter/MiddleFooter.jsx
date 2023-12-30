import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import Image from "next/image";

const MiddleFooter = () => {
  const footerData = [
    {
      heading: "Company",
      items: [
        "About Us",
        "Delivery Informationd",
        "Privacy Policyd",
        "Terms & Conditionsd",
        "Contact Us",
        "Support Centerd",
        "Careersd",
      ],
    },
    {
      heading: "Account",
      items: [
        "Sign In",
        "View Cart",
        "My Wishlist",
        "Track My Order",
        "Help Ticket",
        "Shipping Details",
        "Compare products",
      ],
    },
    {
      heading: "Corporate",
      items: [
        "Become a Vendor",
        "Affiliate Program",
        "Farm Business",
        "Farm Careers",
        "Our Suppliers",
        "Accessibility",
        "Promotions",
      ],
    },
    {
      heading: "Popular",
      items: [
        "Milk & Flavoured Milk",
        "Butter and Margarine",
        "Eggs Substitutes",
        "Marmalades",
        "Sour Cream and Dips",
        "Tea & Kombucha",
        "Cheese",
      ],
    },
  ];
  return (
    <div className="flex w-full">
      <div className=" w-[24%] p-4">
        {" "}
        <div className="flex flex-col w-[90%]">
          <div className="f-img-box">
            <Image
              height={144}
              width={144}
              priority={false}
              loading="lazy"
              alt="footer img"
              src="/images/logo.svg"
              className="  object-contain h-16 w-[70%]"
            />
          </div>

          <p className="my-4">Awesome grocery store website template</p>

          <p className="mb-2">
            <LocationOnOutlinedIcon /> <strong>Address</strong>: 5171 W Campbell
            Ave undefined Kent, Utah 53127 United States
          </p>
          <p className="mb-2">
            <HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) -
            540-025-124553{" "}
          </p>
          <p className="mb-2">
            <EmailOutlinedIcon /> <strong>Email:</strong> sale@Nest.com
          </p>
          <p className="mb-2">
            <WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 - 18:00,
            Mon - Sat
          </p>
        </div>
      </div>
      <div className="flex w-[56%] justify-between">
        {footerData.map((category, index) => (
          <div key={index} className="col">
            <h3 className=" font-bold text-lg hover:underline">
              {category.heading}
            </h3>
            <ul className="flex flex-col mt-6 h-full">
              {category.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="mb-3  hover:underline cursor-pointer transition1 hover:scale-110"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-[20%] ml-7">
        <h3 className="pl-4">Install App</h3>
        <div className="p-4">
          <p>From App Store or Google Play</p>

          <div className="flex my-3 w-[80%]">
            <Image
              height={144}
              width={144}
              priority={false}
              loading="lazy"
              alt="footer img"
              src="/images/app-store.jpg"
              className="h-10 object-cover cursor-pointer  hover:scale-105"
            />
            <Image
              height={144}
              width={144}
              priority={false}
              loading="lazy"
              alt="footer img"
              src="/images/google-play.jpg"
              className="h-10 mx-2 object-cover cursor-pointer  hover:scale-105"
            />
          </div>
          <div className=" w-[80%]">
            <p className="my-3">Secured Payment Gateways</p>
            <Image
              height={144}
              width={144}
              alt="footer img"
              priority={false}
              loading="lazy"
              src="/images/payment-method.png"
              className="h-10  object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleFooter;
