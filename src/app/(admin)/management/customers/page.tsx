"use client";
import React, { useState } from 'react';
import { Table, Input, Button, Space, Pagination, Select, Form, Tag } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import CustomerModal from './components/CustomerModal';

const userList = [
    { id: 1, company: "Công ty A", fullname: "Nguyễn Văn A", sex: "Nam", email: "user1@example.com", phone: "0123456789", status: ["Active"], date: '2014-12-24 23:12:00', name: 'This is production name', upgradeNum: 'Upgraded: 56' },
    { id: 2, company: "Công ty A", fullname: "Trần Thị B", sex: "Nữ", email: "user2@example.com", phone: "0987654321", status: ["Suspended"], date: '2014-12-24 23:12:00', name: 'This is production name', upgradeNum: 'Upgraded: 56' },
    { id: 3, company: "Công ty A", fullname: "Lê Văn C", sex: "Nam", email: "user3@example.com", phone: "0123456789", status: ["Active"], date: '2014-12-24 23:12:00', name: 'This is production name', upgradeNum: 'Upgraded: 56' },
    { id: 4, company: "Công ty A", fullname: "Lê Văn C", sex: "Nam", email: "user3@example.com", phone: "0123456789", status: ["Suspended"], date: '2014-12-24 23:12:00', name: 'This is production name', upgradeNum: 'Upgraded: 56' },
    { id: 5, company: "Công ty A", fullname: "Lê Văn C", sex: "Nam", email: "user3@example.com", phone: "0123456789", status: ["Suspended"], date: '2014-12-24 23:12:00', name: 'This is production name', upgradeNum: 'Upgraded: 56' },
    { id: 6, company: "Công ty A", fullname: "Lê Văn C", sex: "Nam", email: "user3@example.com", phone: "0123456789", status: ["Inactive"], date: '2014-12-24 23:12:00', name: 'This is production name', upgradeNum: 'Upgraded: 56' },
];

interface UserItem {
    id: number;
    company: string;
    fullname: string;
    sex: string;
    email: string;
    phone: string;
    status: string[];
    date: string;
    name: string;
    upgradeNum: string;
}

const Customers = () => {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const pageSizeOptions = [5, 10, 15];
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState<UserItem | null>(null);
    const [form] = Form.useForm();

    const handleSearch = (value: string) => {
        setSearchText(value);
        setCurrentPage(1);
    };

    const handleEdit = (user: UserItem) => {
        setCurrentUser(user);
        form.setFieldsValue(user);
        setIsModalVisible(true);
    };

    const handleDelete = (id: number) => { };

    const handleAdd = () => {
        setCurrentUser(null);
        form.resetFields();
        setIsModalVisible(true);
    };

    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(1);
    };

    const handleModalOk = () => {
        const updatedUser = form.getFieldsValue();
        setIsModalVisible(false);
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
    };

    const columns = [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'Tên công ty', dataIndex: 'company', key: 'company' },
        { title: 'Người đại diện', dataIndex: 'fullname', key: 'fullname' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Phone', dataIndex: 'phone', key: 'phone' },
        {
            title: 'Status', dataIndex: 'status', key: 'status',
            render: (status: string[]) => (
                <span>
                    {status.map((sta) => {
                        let color = sta === 'Active' ? 'green' : 'geekblue';
                        if (sta === 'Suspended') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={sta}>
                                {sta.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: any, record: UserItem) => (
                <Space size="middle">
                    <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
                    <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} danger />
                </Space>
            ),
        },
    ];

    const expandColumns = [
        { title: 'Date', dataIndex: 'date', key: 'date' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    ];

    const expandedRowRender = (record: UserItem) => (
        <Table
            columns={expandColumns}
            dataSource={[{ date: record.date, name: record.name, upgradeNum: record.upgradeNum }]}
            pagination={false}
        />
    );

    const filteredUserList = userList.filter(user =>
        user.fullname.toLowerCase().includes(searchText.toLowerCase())
    );

    const displayedUserList = filteredUserList.slice(
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
                <div className='flex gap-6'>
                    <Button type='primary' icon={<PlusOutlined />} onClick={() => handleAdd()}>
                        Thêm người dùng
                    </Button>
                    <Input.Search
                        placeholder="Tìm kiếm người dùng"
                        enterButton
                        onSearch={handleSearch}
                        style={{ width: 200 }}
                    />
                </div>
            </div>

            <Table<UserItem>
                columns={columns}
                expandable={{ expandedRowRender }}
                dataSource={displayedUserList}
                rowKey="id"
                pagination={false}
                size="small"
            />
            <Pagination
                current={currentPage}
                pageSize={itemsPerPage}
                total={filteredUserList.length}
                onChange={(page) => setCurrentPage(page)}
                style={{ marginTop: '16px' }}
            />
            <CustomerModal isModalVisible={isModalVisible} handleModalOk={handleModalOk} handleModalCancel={handleModalCancel} form={form} />
        </div>
    );
};

export default Customers;
