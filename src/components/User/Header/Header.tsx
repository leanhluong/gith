'use client';

import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import { MenuProps, Dropdown, Button } from 'antd';
import { DownOutlined, ShoppingCartOutlined, UserOutlined, GlobalOutlined } from '@ant-design/icons';

export const Header = () => {
	const menuDichVuItems: MenuProps['items'] = [
		{
			key: '1',
			label: <Link href="/services/service-1">Dịch vụ 1</Link>,
		},
		{
			key: '2',
			label: <Link href="/services/service-2">Dịch vụ 2</Link>,
		},
	];


	const menuNgonNguItems: MenuProps['items'] = [
		{
			key: 'vi',
			label: <Link href="?lang=vi" >Tiếng Việt</Link>,
		},
		{
			key: 'en',
			label: <Link href="?lang=en">English</Link>,
		},
	];

	return (
		<div className={`${styles['fixed-header']}`}>
			<div className="container mx-auto flex items-center justify-between">
				
				<div className="flex items-center">
					<div className="relative aspect-square h-full w-14">
						<Image
							src={'/images/user/header/logo.jpg'}
							fill
							alt="Logo"
							className="object-contain"
						/>
					</div>
					<span className="ml-2 font-bold text-xl">An Anh Catering</span>
				</div>

				<div className="flex items-center space-x-4 ">
					<Link  className="text-black hover:text-yellow-500" href="/home">Trang chủ</Link>
					<Link  className="text-black hover:text-yellow-500" href="/introduction">Giới Thiệu</Link>
					<Dropdown  menu={{ items: menuDichVuItems }}>
						<Link href="/services"  className="text-black hover:text-yellow-500">
							Dịch vụ <DownOutlined />
						</Link>
					</Dropdown>
					<Link href="/menu"  className="text-black hover:text-yellow-500">
						Thực đơn 
					</Link>
					<Link className="text-black hover:text-yellow-500" href="/blogs">Tin tức</Link>
					<Link className="text-black hover:text-yellow-500" href="/clients">Khách hàng</Link>
					<Link className="text-black hover:text-yellow-500" href="/contact">Liên hệ</Link>
				</div>

				<div className="flex items-center space-x-4">

					<Link className="text-black hover:text-yellow-500" href="/login">
						<UserOutlined /> 
						Đăng ký / Đăng nhập
					</Link>
					<Link className="text-black hover:text-yellow-500" href="/cart">
						 <ShoppingCartOutlined />
						  Giỏ hàng
					</Link>

					<Dropdown menu={{ items: menuNgonNguItems }}>
						<Button icon={<GlobalOutlined />} type="link">Ngôn ngữ <DownOutlined /></Button>
					</Dropdown>
				</div>
			</div>
		</div>
	);
};

export default Header;
