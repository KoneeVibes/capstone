import { Stack, styled } from "@mui/material";

export const ComprehensiveSolutionsWrapper = styled(Stack)(({ theme }) => {
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
			"& .header": {
				gap: "calc(var(--flex-gap)/9)",
			},
		},
		"& .border-line": {
			maxWidth: "3rem",
			maxHeight: 0,
			flex: "0 1 3rem",
			border: "1px solid var(--yellow-color)",
		},
		"& .solution-stack": {
			borderRadius: "20px",
			gap: "calc(var(--flex-gap)/6)",
			justifyContent: "space-between",
			backgroundColor: "var(--light-color)",
			padding: "calc(var(--basic-padding)/6)",
			"& .icon-area": {
				overflow: "hidden",
				display: "flex",
				justifyContent: "flex-end",
				"& img": {
					width: "100%",
				},
			},
			"& .text-area": {
				gap: "calc(var(--flex-gap)/12)",
			},
		},
		[theme.breakpoints.up(280)]: {
			"& .solution-stack": {
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
