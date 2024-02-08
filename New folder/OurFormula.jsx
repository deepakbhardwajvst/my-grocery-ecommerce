import React from 'react';
import ButtonOne from '@/Components/Button/ButtonOne';
import Image from 'next/image';

const OurFormula = ({ HairCareFeatures }) => {
    return (
        <div className="container ">
            <div className="mx-auto mt-8 rounded-lg  flex justify-center flex-col items-center">
                <h2 className="text-3xl font-bold mb-4">Our FDA approved hair growth formula</h2>
                <div className="flex  justify-between w-[100%]">
                    {HairCareFeatures.map((feature, index) => (
                        <div key={index} className="w-[20%] md:w-1/2 lg:w-1/4 mb-4 m-4 bg-white rounded-lg ">
                            <div className=" overflow-hidden  p-4">
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="mb-4">{feature.description}</p>
                                <button className="focus:outline-none bg-black text-white py-2 px-4 rounded-full hover:bg-gray-900">
                                    View
                                </button>
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={300}
                                    height={200}
                                    loading="lazy"
                                    className="w-full h-[300px] object-cover mt-4"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <ButtonOne buttonName="TAKE FREE HAIR TEST" />
                </div>
            </div></div>
    );
};

export default OurFormula;
