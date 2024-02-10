import { Button } from '@mui/material';
import Link from 'next/link';

const SubmenuDropdown = ({ submenuData, item }) => {
  console.log(item.cat_name)
  if (!Array.isArray(submenuData)) {
    // Handle the case where submenuData is not an array (e.g., display an error message)
    return <div>Error: Submenu data is not an array</div>;
  }
  return (
    <div className="absolute bg1 border rounded-md shadow-md mt-2 w-max z-10">
      {submenuData.map((item__, index__) => (
        <div key={index__} className="p-2 color1 hover:bg-[#a5d7e8] ">

          <Link href={`/${item.cat_name.toLowerCase()}/${item__.cat_name.toLowerCase()}`} className='color1'> <Button>{item__.cat_name}</Button></Link>
        </div>
      ))}
    </div>
  );
};

export default SubmenuDropdown;
