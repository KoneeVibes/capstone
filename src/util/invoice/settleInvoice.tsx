import { BASE_ENDPOINT } from "../endpoint";

export const settleInvoiceService = async (id: string) => {
	try {
		const response = await fetch(
			`${BASE_ENDPOINT}/api/v1/invoice/settle/${id}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			},
		);
		const res = await response.json();
		if (!response.ok) {
			console.error("Paystack Error:", res);
			throw new Error(res.message);
		}
		return res;
	} catch (error) {
		console.error("API fetch error:", error);
		throw error;
	}
};
