import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
const data = [
  {
    name: "MyAccount",
    logo: <Person2OutlinedIcon />,
    id: 1,
  },
  {
    name: "Order Tracking",
    logo: <LocationOnOutlinedIcon />,
    id: 2,
  },
  {
    name: "My Wishlist",
    logo: <FavoriteBorderOutlinedIcon />,
    id: 3,
  },
  {
    name: "Setting",
    logo: <SettingsOutlinedIcon />,
    id: 4,
  },
  {
    name: "Sign out",
    logo: <LogoutOutlinedIcon />,
    id: 5,
  },
];
const AccountBoxDropdown = () => {
  return (
    <div className="abd-box w-[200px] h-max bg1 color1 absolute top-[38px] right-0 border-[aqua] py-1 rounded-md z-10">
      <ul className="abd-list flex flex-col h-full">
        {data.map((item, index) => {
          return (
            <li
              className="abd-item color1 hover:bg-[#11171e] hover:text-[#b8bec8] border-t-[1px]  border-[#182029]"
              key={item.id}
            >
              <button className="flex justify-start p-1 w-full h-full py-2">
                <span className="abd-logo-span  ml-1 h-full items-center opacity-60 ">
                  {item.logo}
                </span>
                <p className="abd-heading ml-3 text-[14px] ">{item.name}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AccountBoxDropdown;
