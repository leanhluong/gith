"use client"
import { ReactNode, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import clsx from 'clsx';
import Sidebar from '../components/Silebar';

const CustomerLayout = ({ children }: { children: ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div>
            <Header collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
            <Sidebar collapsed={collapsed} />
            <main>
                <div className={clsx('', collapsed ? "ml-20" : "ml-64")}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CustomerLayout;