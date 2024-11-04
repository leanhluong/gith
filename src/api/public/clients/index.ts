import { ENDPOINTS } from './../../constants';

export const getCustomers = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.LIST_CUSTOMER}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    };
