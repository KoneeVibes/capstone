import { BASE_ENDPOINT } from "../endpoint";

export const trackCaseService = async (id: string) => {
	try {
		const response = await fetch(`${BASE_ENDPOINT}/api/v1/case/track/${id}`, {
			method: "GET",
			credentials: "include",
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
