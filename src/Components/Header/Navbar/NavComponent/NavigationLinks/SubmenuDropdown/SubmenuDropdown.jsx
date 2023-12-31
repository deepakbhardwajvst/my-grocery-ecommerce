const SubmenuDropdown = ({ submenuData }) => {
  return (
    <div className="absolute bg1 border rounded-md shadow-md mt-2 w-max z-10">
      {submenuData.map((item, index) => (
        <div key={index} className="p-2 color1 hover:bg-[#a5d7e8] ">
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default SubmenuDropdown;
