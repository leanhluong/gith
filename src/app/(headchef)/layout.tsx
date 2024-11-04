import { ReactNode } from 'react';

const HeadChefLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
};

export default HeadChefLayout;
