// HairCareComponent.jsx

import React from 'react';
import ButtonOne from '@/Components/Button/ButtonOne';
import Image from 'next/image';

const HairCareComponent = ({ features }) => {
    return (
        <div className="container">
            <div className=" mx-auto mt-8  rounded-lg  flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-2">Why choose Pattrn for healthy hair?</h2>
                <h2 className="text-[20px] font-medium  mb-6 p">Customised plans for every customer</h2>  {/*p class added for color */}

                <div className="flex flex-wrap justify-between">
                    {features.map((feature, index) => (
                        <div key={index} className="w-[23%]  h-[300px]  bg-white rounded-lg p-4 mb-6 relative ">
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className=" mb-4">{feature.description}</p>
                            <Image src={feature.img} alt={feature.title} width={300}
                                height={200}
                                loading='lazy' className="w-auto h-48 rounded-lg  object-cover absolute right-0 bottom-0" />
                        </div>
                    ))}
                </div>
                <div className="">
                    <ButtonOne buttonName="TAKE FREE HAIR TEST" />
                </div>
            </div><hr /></div>
    );
};

export default HairCareComponent;
