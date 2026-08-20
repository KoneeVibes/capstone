import { BASE_ENDPOINT } from "../endpoint";

export const addCaseService = async (payload: BodyInit) => {
	try {
		const response = await fetch(`${BASE_ENDPOINT}/api/v1/case`, {
			method: "POST",
			body: payload,
		});
		const res = await response.json();
		if (!response.ok) {
			console.error("Error:", res);
			throw new Error(res.message);
		}
		return res;
	} catch (error) {
		console.error("API fetch error:", error);
		throw error;
	}
};
