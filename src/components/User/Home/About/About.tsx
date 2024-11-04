import Image from 'next/image';
import React from 'react';
import { SectionTitle } from '../../ui/SectionTitle';
import Link from 'next/link';
import { Button } from 'antd';

export const About = () => {
	return (
		<div className='container mx-auto mt-5'>
			<div className='flex gap-10'>
				<div className='flex-1'>
					<div className='relative pt-[65%]'>
						<Image
							src={'/images/logo.png'}
							alt=''
							fill
						/>
					</div>
				</div>
				<div className='flex-1'>
					<SectionTitle title={'Về Chúng Tôi'} />
					<p>
						An Anh Catering hoạt động theo 4 giá trị cốt lõi: SANG TRỌNG - CHUYÊN NGHIỆP - TINH TẾ - VĂN MINH. Chúng
						tôi không ngừng đổi mới và nâng cao chất lượng dịch vụ từ không gian cho đến cung cách phục vụ để mỗi bữa
						tiệc, mỗi sự kiện đều diễn ra hoàn hảo, vui vẻ và mang lại đầy đủ ý nghĩa.
					</p>
					<p style={{ margin: '10px 0' }}>
						Với thông điệp “Enjoy Happy Time” – An Anh Catering là lựa chọn hoàn hảo cho bữa ăn.
					</p>
					<Button
                    type='primary'
					>
						<Link
							href={'/introduction'}
							style={{
								color: '#fff',
							}}
						>
							Tìm hiểu thêm
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
