import React from 'react';
import Image from 'next/image';

const WeProvide = ({ services }) => {
    return (
        <div className="">
            <div className="flex container items-center justify-between h-72">
                {services.map((service, index) => (
                    <div key={index} className="text-center flex flex-col justify-center items-center w-[32%]">
                        <Image
                            src={service.imageSrc}
                            alt={service.title}
                            width={300}
                            height={200}
                            priority={true}
                            className='h-[150px] w-[150px]'
                        />
                        <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                        <p className="text-gray-600">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
};

export default WeProvide;
