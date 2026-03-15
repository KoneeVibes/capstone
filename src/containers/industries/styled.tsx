import { Stack, styled } from "@mui/material";

export const IndustriesWrapper = styled(Stack)(({ theme }) => {
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
		"& .industry-stack": {
			borderRadius: "20px",
			height: "-webkit-fill-available",
			background: "var(--light-color-variant-V)",
			"& .thumbnail-area": {
				overflow: "hidden",
				borderRadius: "20px 20px 0 0",
				"& img": {
					width: "100%",
					display: "flex",
				},
			},
			"& .text-area": {
				gap: "calc(var(--flex-gap)/12)",
				padding: "calc(var(--basic-padding)/6)",
			},
		},
		[theme.breakpoints.up("miniTablet")]: {
			"& .heading-area": {
				marginLeft: "auto",
				marginRight: "auto",
			},
		},
		[theme.breakpoints.up("tablet")]: {
			padding: "calc(var(--basic-padding)/3)",
		},
	};
});
