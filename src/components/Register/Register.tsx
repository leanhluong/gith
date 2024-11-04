'use client';

import { Button, Form, FormProps, Input, message } from 'antd';
import Image from 'next/image';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { register } from '@/api/register';
import { useRouter } from 'next/navigation';

interface FormValues {
    username?: string;
    password?: string;
    repassword?: string;
    fullName?: string;
    phoneNumber?: string;
    email?: string;
}

export const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();  
	const [messageApi, contextHolder] = message.useMessage();


    const onFinish: FormProps<FormValues>['onFinish'] = async (values) => {
        try {
            setIsLoading(true);
            const payload = {
                username: values.username,
                password: values.password,
                repassword: values.repassword,
                fullName: values.fullName,
                phoneNumber: values.phoneNumber,
                email: values.email,
            };

            const responseData = await register(payload);
            console.log(responseData);

            // Hiển thị thông báo thành công và chuyển hướng về trang login
			messageApi.success("Registration successful! Redirecting to login...");
				
			// Redirect to home after a delay
			setTimeout(() => {
				router.push('/login');
			}, 1500);
        } catch (error) {
            console.error("Registration Error:", error);
            messageApi.error("Registration failed. Please try again.");
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
                <p className='text-center font-semibold'>Sign up here</p>
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
                    className='w-full'
                >
                    <Input placeholder='User name' className='w-full' />
                </Form.Item>

                <Form.Item<FormValues>
                    name='fullName'
                    rules={[{ required: true, message: 'Please input your full name!' }]}
                    className='w-full'
                >
                    <Input placeholder='Full name' className='w-full' />
                </Form.Item>

                <Form.Item<FormValues>
                    name='phoneNumber'
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                    className='w-full'
                >
                    <Input placeholder='Phone number' className='w-full' />
                </Form.Item>

                <Form.Item<FormValues>
                    name='email'
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'The input is not valid E-mail!' }
                    ]}
                    className='w-full'
                >
                    <Input placeholder='Email' className='w-full' />
                </Form.Item>

                <Form.Item<FormValues>
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    className='w-full'
                >
                    <Input.Password placeholder='Password' />
                </Form.Item>

                <Form.Item<FormValues>
                    name='repassword'
                    rules={[{ required: true, message: 'Please confirm your password!' }]}
                    className='w-full'
                >
                    <Input.Password placeholder='Confirm Password' />
                </Form.Item>

                <Button
                    type='primary'
                    htmlType='submit'
                    className='w-full uppercase text-link'
                    loading={isLoading}
                >
                    Sign up
                </Button>
            </Form>

            <div className='mt-8 text-center'>
                <p>
                    Already a member?{' '}
                    <Link href='/login' className='text-link'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};
