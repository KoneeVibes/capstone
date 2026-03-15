import { Stack, styled } from "@mui/material";

export const PartnersWrapper = styled(Stack)(({ theme }) => {
	return {
		gap: "calc(var(--flex-gap)/3)",
		background: "var(--primary-color)",
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
		"& .attribute-stack": {
			borderRadius: "20px",
			gap: "calc(var(--flex-gap)/3)",
			border: "1px solid var(--dark-color-variant-VII)",
			height: "-webkit-fill-available",
			padding: "calc(var(--basic-padding)/6)",
			justifyContent: "space-between",
			"& .icon-area": {
				overflow: "hidden",
				display: "flex",
				justifyContent: "center",
				"& img": {
					width: "100%",
				},
			},
			"& .text-area": {
				gap: "calc(var(--flex-gap)/12)",
			},
		},
		[theme.breakpoints.up(280)]: {
			"& .attribute-stack": {
				"& .icon-area": {
					"& img": {
						width: "100px",
					},
				},
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
