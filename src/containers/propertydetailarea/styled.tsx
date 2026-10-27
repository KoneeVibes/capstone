import { styled } from "@mui/material";

export const PropertyDetailAreaWrapper = styled("form")(({ theme }) => {
	return {
		display: "flex",
		flexDirection: "column",
		gap: "calc(var(--flex-gap)/3)",
		"& .location-detail": {
			borderRadius: "8px",
			gap: "calc(var(--flex-gap)/15)",
			padding: "calc(var(--basic-padding)/6)",
			backgroundColor: "var(--primary-color-variant-X)",
			"& .icon-area": {
				flex: "0 0 45px",
				overflow: "hidden",
			},
			"& .detail-area": {
				overflow: "hidden",
				gap: "calc(var(--flex-gap)/15)",
			},
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
				"& .title": {
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
			"& .location-detail": {
				flexDirection: "row",
				gap: "calc(var(--flex-gap)/8)",
			},
			"& .timeline-details": {
				"& .timeline-item": {
					flexDirection: "row",
					alignItems: "flex-end",
				},
			},
		},
	};
});
