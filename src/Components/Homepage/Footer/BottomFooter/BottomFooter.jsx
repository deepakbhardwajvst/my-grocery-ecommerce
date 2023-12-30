import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";

const BottomFooter = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="w-[25%]">
        <p>© 2022, Nest - HTML Ecommerce Template All rights reserved</p>
      </div>

      <div className=" flex part_2">
        <div className="m-auto flex items-center ">
          <div className=" flex items-center mx-5">
            <span>
              <HeadphonesOutlinedIcon className=" text-[40px] opacity-80" />
            </span>
            <div className="info ml-3 ">
              <h3 className="mb-0 text-2xl">1900 - 888</h3>
              <p className="mb-0 text-xs opacity-80">24/7 Support Center</p>
            </div>
          </div>

          <div className="phNo flex items-center  mx-5">
            <span>
              <HeadphonesOutlinedIcon className=" text-[40px] opacity-80" />
            </span>
            <div className="info ml-3">
              <h3 className=" text-2xl mb-0">1900 - 888</h3>
              <p className="mb-0 text-xs opacity-8">24/7 Support Center</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center">
          <h5 className="mb-0">Follow Us</h5>
          <ul className="pl-6 flex">
            <li className=" flex items-center justify-center w-10 h-10 rounded-[50%]  trasition1 cursor-pointer hover:scale-125">
              <FacebookOutlinedIcon className="text-[#1877f2]" />
            </li>
            <li className=" flex items-center justify-center w-10 h-10 rounded-[50%]  trasition1 cursor-pointer hover:scale-125">
              <TwitterIcon className="text-[#1da1f2]" />
            </li>
            <li className=" flex items-center justify-center w-10 h-10 rounded-[50%]  trasition1 cursor-pointer hover:scale-125">
              <InstagramIcon className="text-[#c32aa3]" />
            </li>
            <li className=" flex items-center justify-center w-10 h-10 rounded-[50%]  trasition1 cursor-pointer hover:scale-125">
              <YouTubeIcon className="text-[#ff0000]" />
            </li>
          </ul>
        </div>
        <p className="text-sm mb-0">Up to 15% discount on your first Order</p>
      </div>
    </div>
  );
};

export default BottomFooter;
