import { Stack, styled } from "@mui/material";

export const PropertyTrackerWrapper = styled(Stack)(({ theme }) => {
	return {
		minHeight: "100vh",
		"& .description-area": {
			overflow: "hidden",
			gap: "calc(var(--flex-gap)/3)",
			padding: "calc(var(--basic-padding)/6)",
			borderTop: "1.2px solid var(--light-color-variant-XI)",
			"& .header": {
				gap: "calc(var(--flex-gap)/15)",
			},
			"& .offering": {
				flexDirection: "row",
				borderRadius: "10px",
				alignItems: "center",
				gap: "calc(var(--flex-gap)/15)",
				backgroundColor: "var(--light-color)",
				padding: "calc(var(--basic-padding)/15)",
				border: "1px solid var(--dark-color-variant-XXXIV)",
				maxWidth: "13.375rem",
				"& .icon-area": {
					display: "flex",
					overflow: "hidden",
				},
				"& .text-area": {
					overflow: "hidden",
				},
			},
		},
		"& .form-area": {
			overflow: "hidden",
			gap: "calc(var(--flex-gap)/3)",
			padding: "calc(var(--basic-padding)/6)",
			borderTop: "1.2px solid var(--light-color-variant-XI)",
			"& .header": {
				gap: "calc(var(--flex-gap)/8)",
			},
		},
		[theme.breakpoints.up("tablet")]: {
			flexDirection: "row",
			"& .description-area": {
				flex: 0.25,
				padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
			},
			"& .form-area": {
				flex: 0.75,
				borderLeft: "1.2px solid var(--light-color-variant-XI)",
				padding: "calc(var(--basic-padding)/6) calc(var(--basic-padding)/3)",
			},
		},
	};
});
