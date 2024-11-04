import { Form, Input, Modal, Select } from "antd"

const CustomerModal = ({ isModalVisible, handleModalOk, handleModalCancel, form }: any) => {
    return (
        <Modal
            title="Chỉnh Sửa Thông Tin Món Ăn"
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
        >
            <Form form={form} layout="vertical">
                <Form.Item label="Họ tên" name="fullname" rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Giới tính" name="sex">
                    <Select>
                        <Select.Option value="Active">Nam</Select.Option>
                        <Select.Option value="Inactive">Nữ</Select.Option>
                        <Select.Option value="Active">?</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Vui lòng nhập email!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}>
                    <Input type="number" />
                </Form.Item>
                <Form.Item label="Trạng Thái" name="status">
                    <Select>
                        <Select.Option value="Active">Active</Select.Option>
                        <Select.Option value="Inactive">Inactive</Select.Option>
                        <Select.Option value="Suspended">Suspended</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default CustomerModal