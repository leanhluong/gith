import { ENDPOINTS } from "../constants";

export const forgotPassword = async (body: any) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ENDPOINTS.FORGOT_PASSWORD}`, {
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
        console.error("Error in forgotPassword API:", error);
        throw error;
    }
};
