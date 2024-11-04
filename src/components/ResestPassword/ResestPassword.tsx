'use client';

import { Button, Form, FormProps, Input, message } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { resetPassword } from '@/api/resetPassword';
import { useRouter } from 'next/navigation';

interface FormValues {
    email?: string;
    codeVerify?: string;
    newPassword?: string;
    rePassword?: string;
}

export const ResetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish: FormProps<FormValues>['onFinish'] = async (values) => {
        try {
            setIsLoading(true);
            const payload = {
                email: values.email!,
                codeVerify: values.codeVerify!,
                newPassword: values.newPassword!,
                rePassword: values.rePassword!,
            };

            const responseData = await resetPassword(payload);
            console.log("API Response:", responseData);
            messageApi.success("Password reset successfully! Redirecting to login...");
            setTimeout(() => {
                router.push('/login');
            }, 1500);
        } catch (error) {
            messageApi.error("An error occurred. Please try again.");
            console.error("Reset Password Error:", error);
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
                    <Image src={'/images/user/logo.jpg'} alt='' fill />
                </div>
                <p className='text-center font-semibold'>Please enter your Email</p>
            </div>
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed} className='w-[400px]'>
                <Form.Item
                    name='email'
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input placeholder='Email' />
                </Form.Item>

                <Form.Item
                    name='codeVerify'
                    rules={[{ required: true, message: 'Please input the verification code!' }]}
                >
                    <Input placeholder='Verification Code' />
                </Form.Item>

                <Form.Item
                    name='newPassword'
                    rules={[{ required: true, message: 'Please input your new password!' }]}
                >
                    <Input.Password placeholder='New Password' />
                </Form.Item>

                <Form.Item
                    name='rePassword'
                    rules={[
                        { required: true, message: 'Please confirm your new password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('newPassword') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Confirm New Password' />
                </Form.Item>

                <Button
                    type='primary'
                    htmlType='submit'
                    className='w-full uppercase text-link'
                    loading={isLoading}
                >
                    Reset Password
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
