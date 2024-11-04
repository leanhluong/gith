'use client';

import { Button, Form, FormProps, Input, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { forgotPassword } from '@/api/forgotPassword';
import { useRouter } from 'next/navigation';

interface FormValues {
	email?: string;
}

export const ForgotPassword = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const [messageApi, contextHolder] = message.useMessage();

	const onFinish: FormProps<FormValues>['onFinish'] = async (values) => {
		try {
			setIsLoading(true);
			const payload = { email: values.email };

			const responseData = await forgotPassword(payload);
			console.log("API Response:", responseData); 
				messageApi.success("Password reset email sent! Redirecting to login...");
				setTimeout(() => {
					router.push('/resest-password');
				}, 1500);
		} catch (error) {
			messageApi.error("An error occurred. Please try again.");
			console.error("Forgot Password Error:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const onFinishFailed: FormProps<FormValues>['onFinishFailed'] = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div>
			{contextHolder} 
			<div className='mb-6'>
				<div className='relative mx-auto aspect-square w-[70%]'>
					<Image
						src={'/images/user/logo.jpg'}
						alt=''
						fill
					/>
				</div>
				<p className='text-center font-semibold'>Please enter your Email</p>
			</div>
			<Form
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				className={`w-[400px]`}
			>
				<Form.Item
					name='email'
					rules={[
						{ required: true, message: 'Please input your email!' },
						{ type: 'email', message: 'The input is not a valid E-mail!' },
					]}
				>
					<Input placeholder='Email' />
				</Form.Item>
				<Button
					type='primary'
					htmlType='submit'
					className='w-full uppercase text-link'
					loading={isLoading}
				>
					Send email
				</Button>
			</Form>
			<div className='mt-8 text-center'>
				<p>
					Not a member?{' '}
					<Link href={'/register'} className='text-link'>
						Register
					</Link>
				</p>
				<p> OR </p>
				<p>
					Already a member?{' '}
					<Link href={'/login'} className='text-link'>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};
