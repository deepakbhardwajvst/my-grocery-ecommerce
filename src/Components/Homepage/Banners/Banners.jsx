import Image from "next/image";

const Banners = () => {
  const data = [1, 2, 3];
  return (
    <div className="bannerSection py-6 px-0">
      <div className="flex justify-between">
        {data.map((item, index) => {
          return (
            <div
              className="bs-box overflow-hidden cursor-pointer rounded-2xl w-[30%] hover:scale-110 transition1 full-overlay"
              key={index}
            >
              <Image
                src={`/images/banner${item}.jpg`}
                alt="Banner Image"
                className="w-full object-cover"
                height={360}
                width={360}
                priority={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banners;
