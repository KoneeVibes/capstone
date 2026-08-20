import { BASE_ENDPOINT } from "../endpoint";

export const retrieveAllLocationService = async () => {
	try {
		const response = await fetch(`${BASE_ENDPOINT}/api/v1/misc/location`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const res = await response.json();
		if (!response.ok) {
			console.error("Error:", res);
			throw new Error(res.message);
		}
		return res.data;
	} catch (error) {
		console.error("API fetch error:", error);
		throw error;
	}
};
