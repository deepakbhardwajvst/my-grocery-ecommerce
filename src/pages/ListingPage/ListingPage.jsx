import { ArrowRight } from "@mui/icons-material";

const ListingPage = () => {
  return (
    <>
      <div className="breadcrumb flex flex-col w-full h-auto p-11 cardbg1 rounded-3xl mb-7">
        <h1 className="capitalize font-bold opacity-80 text-5xl mb-2">Snack</h1>
        <ul className="flex mb-0">
          <li className="mr-[20px] text-xl">
            Home <ArrowRight />
          </li>
          <li className="mr-[20px] text-xl">
            Shop <ArrowRight />
          </li>

          <li className="mr-[20px] text-xl">Snack</li>
        </ul>
      </div>
    </>
  );
};

export default ListingPage;
