import { Form, Input, Modal, Select } from 'antd';

const FoodModal = ({ isModalVisible, handleModalOk, handleModalCancel, form }: any) => {
	return (
		<Modal
			title='Chỉnh Sửa Thông Tin Món Ăn'
			open={isModalVisible}
			onOk={handleModalOk}
			onCancel={handleModalCancel}
		>
			<Form
				form={form}
				layout='vertical'
			>
				<Form.Item
					label='Tên Sản Phẩm'
					name='name'
					rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label='Số Lượng'
					name='quantity'
					rules={[{ required: true, message: 'Vui lòng nhập số lượng!' }]}
				>
					<Input type='number' />
				</Form.Item>
				<Form.Item
					label='Giá'
					name='price'
					rules={[{ required: true, message: 'Vui lòng nhập giá!' }]}
				>
					<Input type='number' />
				</Form.Item>
				<Form.Item
					label='Trạng Thái'
					name='status'
				>
					<Select>
						<Select.Option value='Còn hàng'>Còn hàng</Select.Option>
						<Select.Option value='Hết hàng'>Hết hàng</Select.Option>
					</Select>
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default FoodModal;
