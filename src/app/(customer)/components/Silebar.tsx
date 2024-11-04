import { Button, Menu } from 'antd';
import {
    MenuOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const listMenu = [
    {
        key: '1',
        icon: <ShoppingCartOutlined />,
        url: "/manage_customer/order",
        label: <Link href="/manage_customer/order">Đặt hàng</Link>,
    },
    {
        key: '2',
        icon: <MenuOutlined />,
        url: "/manage_customer/menu",
        label: <Link href="/manage_customer/menu">Thực đơn hàng tuần</Link>,
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
