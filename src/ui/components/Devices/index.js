import React from 'react'; 
import Device from '../Device';

const Devices = ({ devices, image, type }) => {
    return (
        <>
            {devices.map(({ brand, name, price }, index) => (
                <Device
                    key={index}
                    src={image}
                    alt={name}
                    brand={brand}
                    name={name}
                    type={type}
                    sizePrice="medium"
                    price={price}
                    rateText="/mo."
                    signDirection="left"
                    notificationText="Get 3 months of Apple Fitness+ 5 free when you buy Apple Watch."
                />
            ))}
        </>
    )
};

export default Devices