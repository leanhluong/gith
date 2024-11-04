'use client';

import { Button, Form, Input } from 'antd';
import { FormProps } from 'antd/lib';
import styles from './style.module.scss';

interface FormValues {
	name?: string;
	email?: string;
	phone?: string;
	service?: string;
	content?: string;
}

export const Contact = () => {
	const onFinish: FormProps<FormValues>['onFinish'] = (values) => {
		console.log('Form Values:', values);
	};

	return (
		<div className={`container mt-5 ${styles['contact-section-wrapper']} mx-auto`}>
			<div
				className='flex'
				style={{ gap: 30 }}
			>
				<div
					style={{
						flex: 7,
					}}
				>
					<h3>Tư Vấn Đặt Dịch Vụ Cơm Công Nghiệp Online</h3>
					<p className='mt-1'>
						Nếu khách hàng muốn đặt dịch vụ thì hãy liên hệ ngay cho An Anh qua hotline 0784.06.06.68. Hoặc điền thông tin
						tiệc của mình dưới form này. Nhân viên của An Anh sẽ liên hệ và tư vấn ngay cho khách hàng!!!
					</p>

					<div className='mt-3 flex'>
						<Form
							onFinish={onFinish}
							style={{ width: '100%', display: 'flex', gap: 10, flexDirection: 'column' }}
						>
							<Form.Item<FormValues>
								name='name'
								rules={[{ required: true, message: 'name!' }]}
							>
								<Input placeholder='Name' />
							</Form.Item>

							<div
								className='flex'
								style={{ gap: 10 }}
							>
								<Form.Item<FormValues>
									name='phone'
									rules={[{ required: true, message: 'Phone' }]}
									className='flex-1'
								>
									<Input placeholder='Phone' />
								</Form.Item>
								<Form.Item<FormValues>
									name='email'
									rules={[{ required: true, message: 'Email' }]}
									className='flex-1'
								>
									<Input placeholder='Email' />
								</Form.Item>
							</div>

							{/* <select
								class='form-select'
								onChange={(e) => {
									handleFormChange('service', e.target.value);
								}}
								data-selected={!!formValues.service}
							>
								<option
									value={''}
									selected
								>
									Dịch vụ cần hỗ trợ *
								</option>
								<option value='order'>Dat mon</option>
								<option value='advisory'>Tu van</option>
							</select> */}

							<Form.Item<FormValues>
								name='content'
								rules={[{ required: true, message: 'Concontent' }]}
								className='flex-1'
							>
								<Input.TextArea placeholder='Concontent' />
							</Form.Item>

							<div>
								<Button htmlType='submit' type='primary'>Liên hệ</Button>
							</div>
						</Form>
					</div>
				</div>
				<div
					style={{
						flex: 3,
						height: '100%',
					}}
				>
					<img
						src='https://naifood.cdn.vccloud.vn/wp-content/uploads/2024/06/dich-vu-nau-an-tai-nha-gia-re.jpg'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};
