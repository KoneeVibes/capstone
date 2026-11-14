import { Stack, styled } from "@mui/material";

export const PrivacySummaryWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		padding: "calc(var(--basic-padding)/6)",
		"& .heading-area": {
			maxWidth: "40rem",
			gap: "calc(var(--flex-gap)/9)",
			"& .title": {
				flexDirection: "row",
				alignItems: "center",
				overflow: "hidden",
				justifyContent: "center",
				gap: "calc(var(--flex-gap)/12)",
			},
		},
		"& .border-line": {
			maxWidth: "3rem",
			maxHeight: 0,
			flex: "0 1 3rem",
			border: "1px solid var(--yellow-color)",
		},
		"& .summary-item": {
			overflow: "hidden",
			borderRadius: "20px",
			gap: "calc(var(--flex-gap)/6)",
			border: "1px solid var(--primary-color-variant--XIV)",
			padding: "calc(var(--basic-padding)/6)",
			"& .icon-area": {
				overflow: "hidden",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				"& img": {
					minHeight: "2.375rem",
				},
			},
			"& .text-area": {
				overflow: "hidden",
				gap: "calc(var(--flex-gap)/12)",
			},
		},
		"& .policy-area": {
			gap: "calc(var(--flex-gap)/3)",
			"& .navigation": {
				borderRadius: "20px",
				gap: "calc(var(--flex-gap)/12)",
				padding: "calc(var(--basic-padding)/6)",
				border: "1px solid var(--primary-color-variant--XIV)",
				"& .nav-items": {
					gap: "calc(var(--flex-gap)/12)",
				},
			},
			"& .content": {
				borderRadius: "20px",
				padding: "0 calc(var(--basic-padding)/6)",
				border: "1px solid var(--primary-color-variant--XIV)",
				"& .policy-item": {
					gap: "calc(var(--flex-gap)/12)",
					padding: "calc(var(--basic-padding)/6) 0",
					borderBottom: "1px solid var(--primary-color-variant--XIV)",
					"& .title": {
						gap: "calc(var(--flex-gap)/12)",
					},
					"& .body": {
						overflow: "hidden",
						gap: "calc(var(--flex-gap)/12)",
					},
					"&.no-border": {
						borderBottom: "none",
					},
				},
			},
		},
		[theme.breakpoints.up("miniTablet")]: {
			"& .heading-area": {
				marginLeft: "auto",
				marginRight: "auto",
			},
			"& .policy-area": {
				"& .content": {
					"& .policy-item": {
						"& .title": {
							alignItems: "center",
							flexDirection: "row",
						},
					},
				},
			},
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/3)",
			"& .policy-area": {
				flexDirection: "row",
				gap: "calc(var(--flex-gap)/6)",
				"& .navigation": {
					flex: "0 1 150px",
					height: "fit-content",
				},
				"& .content": {
					flex: "1",
				},
			},
		},
		[theme.breakpoints.up("laptop")]: {
			"& .policy-area": {
				"& .navigation": {
					flex: "0 1 200px",
				},
			},
		},
	};
});
