"use client";
import React, { useState } from 'react';
import { Table, Input, Button, Space, Pagination, Select, Form, Modal } from 'antd';
import { EyeOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const foodList = [
    { id: 1, name: "Nguyễn Văn A", email: "vana@gmail.com", phone: "0854236234", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "vanb@gmail.com", phone: "0854236234", address: "Hà Nội" },
    { id: 3, name: "Nguyễn Văn C", email: "vanc@gmail.com", phone: "0854236234", address: "Sài Gòn" },
    { id: 4, name: "Nguyễn Văn D", email: "vand@gmail.com", phone: "0854236234", address: "Hà Nội" },
    { id: 5, name: "Nguyễn Văn E", email: "vane@gmail.com", phone: "0854236234", address: "Hà Nội" },
    { id: 6, name: "Nguyễn Văn F", email: "vanf@gmail.com", phone: "0854236234", address: "Hà Nội" },
    { id: 7, name: "Nguyễn Văn G", email: "vang@gmail.com", phone: "0854236234", address: "Hà Nội" },
    { id: 8, name: "Nguyễn Văn H", email: "vanh@gmail.com", phone: "0854236234", address: "Sài Gòn" },
    { id: 9, name: "Nguyễn Văn A", email: "vani@gmail.com", phone: "0854236234", address: "Hà Nội" },
    { id: 10, name: "Nguyễn Văn A", email: "vank@gmail.com", phone: "0854236234", address: "Hà Nội" },
];
interface FoodItem {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
}

const Menu = () => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const pageSizeOptions = [3, 5, 10];

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
            title: 'Người đại diện',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Đại chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Hành Động',
            key: 'action',
            render: (text: any, record: FoodItem) => {
                const router = useRouter();
                return (
                    <Space size="middle" >
                        <Button
                            icon={<EyeOutlined />}
                            onClick={() => {
                                router.push(`/management_headchef/menu/${record.id}`)
                            }}
                        >
                        </Button>
                        <Button
                            icon={<PlusOutlined />}
                            onClick={() => {
                                router.push(`/management_headchef/menu/${record.id}`)
                            }}
                            type="primary"
                        >
                        </Button>
                        <Button
                            icon={<EditOutlined />}
                            onClick={() => {
                                router.push(`/management_headchef/menu/${record.id}`)
                            }}
                        />
                    </Space >
                )
            }
        },

    ];

    const filteredFoodList = foodList.filter(food =>
        food.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const displayedFoodList = filteredFoodList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="p-4">
            <div className="flex justify-between mb-4">
                <div className="flex items-center">
                    <span className="text-lg font mr-2"></span>
                    <Select
                        defaultValue={itemsPerPage}
                        style={{ width: 70 }}
                        onChange={handleItemsPerPageChange}
                    >
                        {pageSizeOptions.map(option => (
                            <Select.Option key={option} value={option}>
                                {option}
                            </Select.Option>
                        ))}
                    </Select>
                </div>
                <div className="flex items-center justify-center flex-1">
                    <span className="text-lg font-semibold">Danh sách khách hàng</span>
                </div>
                <div className='flex gap-6'>
                    <Input.Search
                        placeholder="Tìm kiếm"
                        enterButton
                        onSearch={handleSearch}
                        style={{ width: 200 }}
                    />
                </div>
            </div>

            <Table
                columns={columns}
                dataSource={displayedFoodList}
                rowKey="id"
                pagination={false}
            />
            <Pagination
                current={currentPage}
                pageSize={itemsPerPage}
                total={filteredFoodList.length}
                onChange={(page) => setCurrentPage(page)}
                style={{ marginTop: '16px' }}
            />
        </div>
    );
}

export default Menu;