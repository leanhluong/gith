import { ENDPOINTS } from "../constants";

export const register = async (body: any) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.REGISTER}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();

    };
