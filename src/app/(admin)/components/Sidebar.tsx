import { Menu } from 'antd';
import {
    DashboardOutlined,
    UserOutlined,
    SettingOutlined,
    MenuOutlined,
    TeamOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const listMenu = [
    {
        key: '1',
        icon: <DashboardOutlined />,
        url: "/management/dashboard",
        label: <Link href="/management/dashboard">Thống kê</Link>
    },
    {
        key: '2',
        icon: <UserOutlined />,
        url: "/management/users",
        label: <Link href="/management/users">Người dùng</Link>,
    },
    {
        key: '3',
        icon: <TeamOutlined />,
        url: "/management/customers",
        label: <Link href="/management/customers">Khách hàng</Link>,
    },
    {
        key: '4',
        icon: <MenuOutlined />,
        url: "/management/menu",
        label: <Link href="/management/menu">Thực đơn</Link>,
    },
    {
        key: '5',
        icon: <SettingOutlined />,
        url: "/management/settings",
        label: <Link href="/management/settings">Cài đặt</Link>,
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
