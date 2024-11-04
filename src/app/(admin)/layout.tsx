import { ReactNode } from 'react';

const AdminLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
};

export default AdminLayout;
