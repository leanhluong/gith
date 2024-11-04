import { Header } from '../../components/User/Header';
import { Footer } from '../../components/User/Footer';

import React, { ReactNode } from 'react';
import FloatingContactButtons from '@/components/User/FloatingContactButtons/FloatingContactButtons';

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<div className='mt-14'>{children}</div>
			<Footer />
			<FloatingContactButtons />
		</>
	);
};

export default layout;
