import { styled } from "@mui/material";

export const ConfirmationAreaWrapper = styled("form")(({ theme }) => {
	return {
		minHeight: "100vh",
		display: "flex",
		flexDirection: "column",
		gap: "calc(var(--flex-gap)/3)",
		"& .tracking-detail": {
			borderRadius: "8px",
			gap: "calc(var(--flex-gap)/15)",
			padding: "calc(var(--basic-padding)/6)",
			backgroundColor: "var(--primary-color-variant-X)",
		},
		"& .timeline-details": {
			borderRadius: "8px",
			gap: "calc(var(--flex-gap)/6)",
			padding: "calc(var(--basic-padding)/6)",
			backgroundColor: "var(--dark-color-variant-XXV)",
			"& .timeline-item": {
				borderBottom: "1px solid var(--dark-color)",
				padding: "calc(var(--basic-padding)/9) 0",
				justifyContent: "space-between",
				gap: "calc(var(--flex-gap)/3)",
				overflow: "hidden",
				"& .header": {
					flex: 1,
					overflow: "hidden",
					gap: "calc(var(--flex-gap)/9)",
				},
				"& .body": {
					flex: 1,
					overflow: "hidden",
				},
			},
			"& .notice-board": {
				borderRadius: "8px",
				backgroundColor: "var(--light-color)",
				padding: "calc(var(--basic-padding)/6)",
				border: "1px solid var(--dark-color-variant-XXVIII)",
			},
		},
		[theme.breakpoints.up("miniTablet")]: {
			"& .timeline-details": {
				"& .timeline-item": {
					flexDirection: "row",
					alignItems: "flex-end",
				},
			},
		},
	};
});
