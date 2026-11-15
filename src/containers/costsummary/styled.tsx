import { styled } from "@mui/material";

export const CostSummaryWrapper = styled("form")(({ theme }) => {
	return {
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		gap: "calc(var(--flex-gap)/3)",
		"& .cost-breakdown": {
			borderRadius: "8px",
			padding: "calc(var(--basic-padding)/6)",
			backgroundColor: "var(--dark-color-variant-XXV)",
			"& .invoice-item": {
				borderBottom: "1px solid var(--dark-color)",
				padding: "calc(var(--basic-padding)/9) 0",
				flexDirection: "row",
				justifyContent: "space-between",
				gap: "calc(var(--flex-gap)/3)",
				overflow: "hidden",
				"& .description": { overflow: "hidden" },
				"& .total-payabale": {
					flexShrink: 0,
					overflow: "hidden",
				},
			},
			"& .total-payable": {
				padding: "calc(var(--basic-padding)/9) 0",
				flexDirection: "row",
				justifyContent: "space-between",
				gap: "calc(var(--flex-gap)/3)",
				overflow: "hidden",
				"& .description": { overflow: "hidden" },
				"& .total-payabale": {
					flexShrink: 0,
					overflow: "hidden",
				},
			},
		},
		"& .call-to-action": {
			gap: "calc(var(--flex-gap)/9)",
		},
		[theme.breakpoints.up("miniTablet")]: {
			"& .cost-breakdown": {
				padding: "calc(var(--basic-padding)/3)",
			},
			"& .call-to-action": {
				flexDirection: "row",
			},
		},
	};
});
