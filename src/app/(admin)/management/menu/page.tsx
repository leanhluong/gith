'use client';
import React, { useState } from 'react';
import { Table, Input, Button, Space, Pagination, Select, Form, Modal } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import FoodModal from './components/FoodModal';

const foodList = [
	{ id: 1, image: '/images/2.jpg', name: 'Phở Bò', quantity: 10, price: 50000, status: 'Còn hàng' },
	{ id: 2, image: '/images/2.jpg', name: 'Bánh Mì', quantity: 20, price: 30000, status: 'Còn hàng' },
	{ id: 3, image: '/images/2.jpg', name: 'Gỏi Cuốn', quantity: 15, price: 20000, status: 'Hết hàng' },
	{ id: 4, image: '/images/2.jpg', name: 'Cơm Tấm', quantity: 5, price: 45000, status: 'Còn hàng' },
	{ id: 5, image: '/images/2.jpg', name: 'Mì Quảng', quantity: 7, price: 55000, status: 'Còn hàng' },
	{ id: 6, image: '/images/2.jpg', name: 'Phở Bò', quantity: 10, price: 50000, status: 'Còn hàng' },
	{ id: 7, image: '/images/2.jpg', name: 'Bánh Mì', quantity: 20, price: 30000, status: 'Còn hàng' },
	{ id: 8, image: '/images/2.jpg', name: 'Gỏi Cuốn', quantity: 15, price: 20000, status: 'Hết hàng' },
	{ id: 9, image: '/images/2.jpg', name: 'Cơm Tấm', quantity: 5, price: 45000, status: 'Còn hàng' },
	{ id: 10, image: '/images/2.jpg', name: 'Mì Quảng', quantity: 7, price: 55000, status: 'Còn hàng' },
	{ id: 11, image: '/images/2.jpg', name: 'Phở Bò', quantity: 10, price: 50000, status: 'Còn hàng' },
	{ id: 12, image: '/images/2.jpg', name: 'Bánh Mì', quantity: 20, price: 30000, status: 'Còn hàng' },
	{ id: 13, image: '/images/2.jpg', name: 'Gỏi Cuốn', quantity: 15, price: 20000, status: 'Hết hàng' },
	{ id: 14, image: '/images/2.jpg', name: 'Cơm Tấm', quantity: 5, price: 45000, status: 'Còn hàng' },
	{ id: 15, image: '/images/2.jpg', name: 'Mì Quảng', quantity: 7, price: 55000, status: 'Còn hàng' },
];
interface FoodItem {
	id: number;
	name: string;
	quantity: number;
	price: number;
	status: string;
	image: string;
}

const Menu = () => {
	const [searchText, setSearchText] = useState('');
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);
	const pageSizeOptions = [5, 10, 15];

	const [isModalVisible, setIsModalVisible] = useState(false);
	const [currentFood, setCurrentFood] = useState<FoodItem | null>(null);
	const [form] = Form.useForm();

	const handleSearch = (value: string) => {
		setSearchText(value);
		setCurrentPage(1);
	};

	const handleEdit = (food: FoodItem) => {
		setCurrentFood(food);
		form.setFieldsValue(food);
		setIsModalVisible(true);
	};

	const handleDelete = (id: number) => {
		console.log('Delete item with ID:', id);
	};

	const handleAdd = () => {
		setCurrentFood(null);
		form.resetFields();
		setIsModalVisible(true);
	};

	const handleItemsPerPageChange = (value: number) => {
		setItemsPerPage(value);
		setCurrentPage(1);
	};

	const handleModalOk = () => {
		const updatedFood = form.getFieldsValue();
		console.log('Updated Food:', updatedFood);
		setIsModalVisible(false);
	};

	const handleModalCancel = () => {
		setIsModalVisible(false);
	};

	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: 'Tên Sản Phẩm',
			dataIndex: 'name',
			key: 'name',
			render: (text: string, record: FoodItem) => (
				<div className='flex items-center'>
					<img
						src={record.image}
						alt={text}
						className='mr-2 h-10 w-10 object-cover' // Định dạng ảnh
					/>
					{text}
				</div>
			),
		},
		{
			title: 'Số Lượng',
			dataIndex: 'quantity',
			key: 'quantity',
		},
		{
			title: 'Giá',
			dataIndex: 'price',
			key: 'price',
			render: (text: number) => <span>{text.toLocaleString()} VNĐ</span>,
		},
		{
			title: 'Trạng Thái',
			dataIndex: 'status',
			key: 'status',
		},
		{
			title: 'Hành Động',
			key: 'action',
			render: (text: any, record: FoodItem) => (
				<Space size='middle'>
					<Button
						icon={<EditOutlined />}
						onClick={() => handleEdit(record)}
					/>
					<Button
						icon={<DeleteOutlined />}
						onClick={() => handleDelete(record.id)}
						danger
					/>
				</Space>
			),
		},
	];

	const filteredFoodList = foodList.filter((food) => food.name.toLowerCase().includes(searchText.toLowerCase()));

	const displayedFoodList = filteredFoodList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

	return (
		<div className='p-4'>
			<div className='mb-4 flex justify-between'>
				<div className='flex items-center'>
					<span className='font mr-2 text-lg'>Show:</span>
					<Select
						defaultValue={itemsPerPage}
						style={{ width: 70 }}
						onChange={handleItemsPerPageChange}
					>
						{pageSizeOptions.map((option) => (
							<Select.Option
								key={option}
								value={option}
							>
								{option}
							</Select.Option>
						))}
					</Select>
				</div>
				<div className='flex gap-6'>
					<Button
						type='primary'
						icon={<PlusOutlined />}
						onClick={() => handleAdd()}
					>
						Thêm món ăn
					</Button>
					<Input.Search
						placeholder='Tìm kiếm món ăn'
						enterButton
						onSearch={handleSearch}
						style={{ width: 200 }}
					/>
				</div>
			</div>

			<Table
				columns={columns}
				dataSource={displayedFoodList}
				rowKey='id'
				pagination={false}
			/>
			<Pagination
				current={currentPage}
				pageSize={itemsPerPage}
				total={filteredFoodList.length}
				onChange={(page) => setCurrentPage(page)}
				className='mt-4'
			/>
			<FoodModal
				isModalVisible={isModalVisible}
				handleModalOk={handleModalOk}
				handleModalCancel={handleModalCancel}
				form={form}
			/>
		</div>
	);
};

export default Menu;
