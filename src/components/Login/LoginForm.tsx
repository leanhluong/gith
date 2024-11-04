'use client';

import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import Link from 'next/link';
import styles from './styles.module.scss';
import { GoogleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useState } from 'react';
import { login } from '@/api/login';
import { useRouter } from 'next/navigation';



	interface FormValues {
		email?: string;
		username?: string;
		password?: string;
		remember?: string;
	}

	export const LoginForm = () => {
		const [isLoading, setIsLoading] = useState(false);
		const router = useRouter();

		const onFinish: FormProps<FormValues>['onFinish'] = async (values) => {
			try {
				setIsLoading(true);
				console.log('Success:', values);
				const payload = { email: values.email, password: values.password, isRememberPassword: values.remember };
				const responseData = await login(payload)
				console.log(responseData)
				if (responseData?.success) {
					router.push('/home');
				}
			} catch(error){
				console.log("ERROR: ",error)
			} finally{
				setIsLoading(false)
			}
		};

		const onFinishFailed: FormProps<FormValues>['onFinishFailed'] = (errorInfo) => {
			console.log('Failed:', errorInfo);
		};
		return (
			<div>
				<div className='mb-6'>
					<div className='relative mx-auto aspect-square w-[70%]'>
						<Image
							src={'/images/user/logo.jpg'}
							alt=''
							fill
						/>
					</div>
					<p className='text-center font-semibold'>Please login to your account</p>
				</div>

				<Form
					name='basic'
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					className={`${styles['login-wrapper']} w-[400px]`}
				>
					<Form.Item<FormValues>
						name='username'
						rules={[{ required: true, message: 'Please input your username!' }]}
						className='dasdas123 w-full'
					>
						<Input
							placeholder='User name'
							className='123123 w-full'
						/>
					</Form.Item>

					<Form.Item<FormValues>
						name='password'
						rules={[{ required: true, message: 'Please input your password!' }]}
					>
						<Input.Password placeholder='Password' />
					</Form.Item>

					<div className='flex w-full justify-between px-10'>
						<Form.Item<FormValues>
							name='remember'
							valuePropName='checked'
							wrapperCol={{ offset: 8, span: 16 }}
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
						<Link href='/forgot-password'>Forgot Password?</Link>
					</div>

					<Button
						type='primary'
						htmlType='submit'
						className='w-full uppercase text-link'
						loading={isLoading}
					>
						Sign in
					</Button>
				</Form>

				<div className='mt-8 text-center'>
					<p>
						Not a member?{' '}
						<Link
							href={'/register'}
							className='text-link'
						>
							Register
						</Link>
					</p>
					<div className='mt-6'>
						<p>
							or sign up with:
							<GoogleOutlined />
						</p>
					</div>
				</div>
			</div>
		);
	};
