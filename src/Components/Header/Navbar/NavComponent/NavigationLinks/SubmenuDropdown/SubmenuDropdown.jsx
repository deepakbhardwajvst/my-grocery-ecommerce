import { Button } from '@mui/material';
import Link from 'next/link';

const SubmenuDropdown = ({ submenuData, item }) => {

  if (!Array.isArray(submenuData)) {
    // Handle the case where submenuData is not an array
    return <div>Error: Submenu data is not an array</div>;
  }
  return (
    <div className="absolute bg1 border rounded-md shadow-md mt-2 w-max z-10">
      {submenuData.map((item__, index__) => (
        <div key={index__} className="p-2 color1 hover:bg-[#a5d7e8] ">
  
            <a className='color1'>
              <Button>{item__.cat_name}</Button>
            </a>
          
        </div>
      ))}

    </div>
  );
};

export default SubmenuDropdown;
