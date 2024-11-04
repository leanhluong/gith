import Image from 'next/image';
import React from 'react';

interface ReasonItemProps {
	text?: string;
	imgSrc?: string;
}

export const ReasonItem = ({ text, imgSrc }: ReasonItemProps) => {
	return (
		<div
			className='flex items-center gap-[14px]'
			style={{
				gap: 14,
			}}
		>
            <div className='w-14 aspect-square relative'>
                <Image src={imgSrc ?? ''} alt='' fill />
            </div>
			<span>{text}</span>
		</div>
	);
};
