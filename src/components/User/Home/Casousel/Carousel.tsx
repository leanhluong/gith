import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const IMAGES = [
	'/images/user/contact/nencontact.jpg',
	'/images/user/contact/nencontact.jpg',
	'/images/user/contact/nencontact.jpg',
];

export const ImageCarousel = () => {
	return (
		<Carousel autoplay>
			{IMAGES.map((item, index) => (
				<div
					key={index}
					className='relative w-full pt-[56.65%] 2xl:pt-[33.33%]'
				>
					<Image
						src={item}
						alt={`carousel-image-${index}`}
						fill // Thay cho layout="fill"
						style={{ objectFit: 'cover' }} // Thay cho objectFit="cover"
					/>
				</div>
			))}
		</Carousel>
	);
};

export default ImageCarousel;
