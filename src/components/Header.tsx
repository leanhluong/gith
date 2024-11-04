'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Header = ({ toggleCollapsed, collapsed }: any) => {
    const menu = [
        {
            key: '1',
            url: '/management/dashboard',
            label: <Link href='/management/dashboard'>Thống kê</Link>,
        },
        {
            key: '2',
            url: '/management/users',
            label: <Link href='/management/users'>Người dùng</Link>,
        },
        {
            key: '3',
            url: '/management/menu',
            label: <Link href='/management/menu'>Thực đơn</Link>,
        },
    ];

    return (
        <header className='sticky top-0 flex items-center justify-between bg-white px-8 py-4 shadow-md'>
            <div className='flex items-center gap-6'>
                <div className='flex items-center'>
                    <Image
                        src='/images/logo.png'
                        alt='Logo'
                        width={40}
                        height={40}
                        className='mr-2'
                    />
                    {!collapsed && <h1 className='text-xl font-semibold'>An Anh Catering</h1>}
                </div>
                <div
                    onClick={toggleCollapsed}
                    className='cursor-pointer'
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
            </div>

            <div className='flex items-center space-x-6'>
                <div className='relative'>
                    <BellOutlined className='cursor-pointer text-2xl' />
                    <div className='absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white'>
                        5
                    </div>
                </div>
                <Dropdown
                    menu={{ items: menu }}
                    trigger={['click']}
                >
                    <Avatar
                        size='large'
                        src='/images/user.jpg'
                        className='cursor-pointer'
                    />
                </Dropdown>
            </div>
        </header>
    );
};

export default Header;
