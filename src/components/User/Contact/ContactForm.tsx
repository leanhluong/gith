'use client';

import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Button, Form, FormProps, Input } from 'antd';

interface ContactFormValues {
	name?: string;
	email?: string;
	phone?: string;
	message?: string;
}

export const ContactForm = () => {
	const onFinish: FormProps<ContactFormValues>['onFinish'] = (values) => {
		console.log('Form Values:', values);
	};

	return (
		<div className="container mx-auto mt-8 p-6">
			<img src="/images/user/contact/nencontact.jpg" alt="Contact Image" className="h-full w-full mb-6" />

			<h2 className="text-center font-semibold text-3xl mb-8"> LIÊN HỆ VỚI CHÚNG TÔI</h2>

			<div className="flex flex-col md:flex-row gap-6">
                
				<div className="w-full md:w-1/2">
					<div className="mb-4 leading-loose">
                    
                        <p><strong>Công ty TNHH MTV Đầu tư và dịch Vụ An Anh</strong></p>
						<p><strong>- ĐỊA CHỈ -</strong></p>
						<p>Thôn Thượng, Xã Bình Lãng, Huyện Tứ Kỳ, Tỉnh Hải Dương, Việt Nam</p>
						<p><strong>- LIÊN HỆ -</strong></p>
						<p>Điện thoại: <span style={{ color: 'red' }}> 0972.650.559/0916552537</span></p>
						<p>Email: AnAnh10490@gmail.com</p>
						<p><strong>- THỜI GIAN MỞ CỬA -</strong></p>
						<p>Thứ 2 -- Chủ nhật: Cả ngày</p>
					</div>
				</div>

				<div className="w-full md:w-1/2">
					<Form
						name="contact"
						onFinish={onFinish}
						className="contact-form"
					>
						<Form.Item<ContactFormValues>
							name="name"
							rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
						>
							<Input placeholder="Họ và tên" />
						</Form.Item>

						<Form.Item<ContactFormValues>
							name="email"
							rules={[
								{ required: true, message: 'Vui lòng nhập email!' },
								{ type: 'email', message: 'Email không hợp lệ!' },
							]}
						>
							<Input placeholder="Email" prefix={<MailOutlined />} />
						</Form.Item>

						<Form.Item<ContactFormValues>
							name="phone"
							rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
						>
							<Input placeholder="Điện thoại" prefix={<PhoneOutlined />} />
						</Form.Item>

						<Form.Item<ContactFormValues>
							name="message"
							rules={[{ required: true, message: 'Vui lòng nhập ghi chú!' }]}
						>
							<Input.TextArea placeholder="Ghi chú" rows={4} />
						</Form.Item>

						<Button type="primary" htmlType="submit" className="w-full uppercase">
							Đặt lịch ngay
						</Button>
					</Form>
				</div>
			</div>
            <div className="mt-8">
				<iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.2527765877276!2d106.38765061632523!3d20.851663649423873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31358f833f8ac3ad%3A0xcffd56b00d35bb4b!2zQ8O0bmcgVHkgVE5ISCBN4buZdCBUaMOgbmggVmnDqm4gU8ahbiBUcnVuZyAtIEhE!5e0!3m2!1svi!2s!4v1730191877579!5m2!1svi!2s" 
					width="100%"
					height="400"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
				></iframe>
			</div>
		</div>
	);
};
