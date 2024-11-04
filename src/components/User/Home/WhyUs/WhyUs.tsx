import React from 'react';
import { ReasonItem } from './ReasonItem';
import Image from 'next/image';
import { SafetyCertificateOutlined, ToolOutlined, TeamOutlined, ThunderboltOutlined, DollarCircleOutlined, CustomerServiceOutlined } from '@ant-design/icons';


const IMAGE_SRC = '/images/user/home/carousels/1.jpeg';

export const WhyUs = () => {
	return (
		<div className='container mx-auto mt-5'>
			<div className='flex gap-[30px]'>
				<div className='flex-[7]'>
					<p>Vì sao chọn An Anh</p>
					<h3>LÝ DO CHỌN CƠM CÔNG NGHIỆP TẠI AN ANH</h3>
					<p className='mt-1'>
						Sau đây là những lý do mà khách hàng luôn tin tưởng và ủng hộ An Anh trong thời gian qua. Các bạn hãy xem
						qua để có nhiều thông tin hơn về An Anh khi chọn dịch vụ cơm công nghiệp của chúng tôi.
					</p>

					<div className='mt-3 flex'>
						<div className='flex flex-1 flex-col gap-[14px]'>
							<div className="flex items-start gap-4">
								<SafetyCertificateOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Nguồn nguyên liệu đảm bảo vệ sinh.</p>
							</div>
							<div className="flex items-start gap-4">
								<ToolOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Trang thiết bị mới và hiện đại.</p>
							</div>
							<div className="flex items-start gap-4">
								<TeamOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Đội ngũ nhân viên có chuyên môn cao.</p>
							</div>
						</div>
						<div
							className='flex flex-col flex-1 gap-[14px]'
						>
							<div className="flex items-start gap-4">
								<ThunderboltOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Dịch vụ nhanh chóng và uy tín.</p>
							</div>
							<div className="flex items-start gap-4">
								<DollarCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Giá thành tốt nhất thị trường.</p>
							</div>
							<div className="flex items-start gap-4">
								<CustomerServiceOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
								<p className="text-gray-700">Hỗ trợ nhanh chóng và nhiệt tình 24/7.</p>
							</div>
						</div>
					</div>
				</div>
				<div className='flex-[3] relative h-[600px]'>
					<Image
						src={'/images/user/home/carousels/1.jpeg'}
						alt=''
						fill
                        style={{objectFit: 'cover'}}
					/>
					{/* <img
						src='https://naifood.cdn.vccloud.vn/wp-content/uploads/2024/06/dich-vu-nau-an-tai-nha-gia-re.jpg'
						alt=''
					/> */}
				</div>
			</div>
		</div>
	);
};
