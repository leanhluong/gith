import { ReactNode } from 'react';

const CustomerLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default CustomerLayout;

