import { Button, Menu } from 'antd';
import {
    DashboardOutlined,
    MenuOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const listMenu = [
    {
        key: '1',
        icon: <ShoppingCartOutlined />,
        url: "/management_headchef/ingredient",
        label: <Link href="/management_headchef/ingredient">Nguyên liệu</Link>,
    },
    {
        key: '2',
        icon: <MenuOutlined />,
        url: "/management_headchef/menu",
        label: <Link href="/management_headchef/menu">Khách hàng</Link>,
    },

];

const Sidebar = ({ collapsed }: any) => {
    const pathName = usePathname();

    return (
        <aside className="h-screen w-64 text-white fixed flex flex-col border-t-2">
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                selectedKeys={listMenu?.filter((item) => {
                    return pathName.startsWith(item.url);
                }).map((item) => item.key)}
                className="flex-grow"
                items={listMenu}
                inlineCollapsed={collapsed}
            />

        </aside>
    );
};

export default Sidebar;
