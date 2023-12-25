const SubmenuDropdown = ({ submenuData }) => {
  return (
    <div className="absolute bg-white border rounded-md shadow-md mt-2 w-max">
      {submenuData.map((item, index) => (
        <div key={index} className="p-2 text-black hover:bg-gray-200 ">
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default SubmenuDropdown;
