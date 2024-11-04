import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

export const Services = () => {
	return (
		<div className='container mx-auto mt-5'>
			<div className='flex gap-10'>
				<div className='flex-1'>
					<p>An Anh Catering</p>
					<h3>Dịch vụ xuất ăn</h3>
					<p>
						An Anh Catering chuyên nhận phục vụ các loại hình cơm công nghiệp. 
					</p>
					<Link href={'/'}>
						<Button type='primary'>Tìm hiểu thêm</Button>
					</Link>
				</div>
				<div className='aspect-square flex-1'>
					<div className='relative pt-[100%]'>
						<Image
							src={'/images/user/introduction/cty/cty5.jpg'}
							alt=''
							fill
						/>
						<Link
							href={'/'}
							className='absolute bottom-0 end-0 start-0 top-0 flex items-end justify-center'
						>
							<p className='text-2xl mb-3 font-bold text-white'>Suất ăn công nghiệp </p>
						</Link>
					</div>
				</div>
				<div className='aspect-square flex-1'>
					<div className='relative pt-[100%]'>
						<Image
							src={'/images/user/introduction/com/c3.jpg'}
							alt=''
							fill
						/>
						<Link
							href={'/'}
							className='absolute bottom-0 end-0 start-0 top-0 flex items-end justify-center'
						>
							<p className='text-2xl mb-3 font-bold text-white'>Cơm trưa văn phòng</p>
						</Link>
					</div>
				</div>
				<div className='aspect-square flex-1'>
					<div className='relative pt-[100%]'>
						<Image
							src={'/images/user/introduction/com/c4.jpg'}
							alt=''
							fill
						/>
						<Link
							href={'/'}
							className='absolute bottom-0 end-0 start-0 top-0 flex items-end justify-center'
						>
							<p className='text-2xl mb-3 font-bold text-white'>Suất ăn trong các trường học</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
