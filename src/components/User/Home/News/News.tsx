import Image from 'next/image';
import Link from 'next/link';

export const News = () => {
	return (
		<div className='container mx-auto mt-5'>
			<div className='flex gap-10'>
				<div className='flex-1'>
					<Link
						href={'/'}
						style={{
							width: '100%',
							height: '100%',
							display: 'block',
							color: 'var(--bs-body-color)',
							textDecoration: 'none',
						}}
					>
						<div className='relative w-full pt-[75%]'>
							<Image
								src={'/images/user/home/carousels/1.jpeg'}
								alt=''
								fill
                                style={{
                                    objectFit: 'cover'
                                }}
							/>
						</div>
						<h5 className='font-semibold'>Thưởng thức ngay khô gà sa tế tỏi – Nốt son của “làng” ăn vặt</h5>
						<p>7 Tháng Sáu, 2021</p>
					</Link>
				</div>
				<div className='flex-1'>
					<Link
						href={'/'}
						style={{
							width: '100%',
							height: '100%',
							display: 'block',
							color: 'var(--bs-body-color)',
							textDecoration: 'none',
						}}
					>
						<div className='relative w-full pt-[75%]'>
							<Image
								src={'/images/user/home/carousels/1.jpeg'}
								alt=''
								fill
                                style={{
                                    objectFit: 'cover'
                                }}
							/>
						</div>
						<h5 className='font-semibold'>Thưởng thức ngay khô gà sa tế tỏi – Nốt son của “làng” ăn vặt</h5>
						<p>7 Tháng Sáu, 2021</p>
					</Link>
				</div>
				<div className='flex-1'>
					<Link
						href={'/'}
						style={{
							width: '100%',
							height: '100%',
							display: 'block',
							color: 'var(--bs-body-color)',
							textDecoration: 'none',
						}}
					>
						<div className='relative w-full pt-[75%]'>
							<Image
								src={'/images/user/home/carousels/1.jpeg'}
								alt=''
								fill
                                style={{
                                    objectFit: 'cover'
                                }}
							/>
						</div>
						<h5 className='font-semibold'>Thưởng thức ngay khô gà sa tế tỏi – Nốt son của “làng” ăn vặt</h5>
						<p>7 Tháng Sáu, 2021</p>
					</Link>
				</div>
			</div>
		</div>
	);
};
