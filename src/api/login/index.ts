import { ENDPOINTS } from "../constants";

export const login = async (body: any) => {
    try {
        console.log(process.env.NEXT_PUBLIC_API_URL);
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.LOGIN}`, {
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
    } catch (error) {
        console.error("Error in login API:", error);
        throw error;
    }
};
